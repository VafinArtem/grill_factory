const displacementSlider = function(opts) {
  const animationSlide = (slideId) => {
    mat.uniforms.nextImage.value = sliderImages[slideId];
    mat.uniforms.nextImage.needsUpdate = true;

    TweenLite.to( mat.uniforms.dispFactor, 1, {
      value: 1,
      ease: 'Expo.easeInOut',
      onComplete: function () {
        mat.uniforms.currentImage.value = sliderImages[slideId];
        mat.uniforms.currentImage.needsUpdate = true;
        mat.uniforms.dispFactor.value = 0.0;
      }
    });

    let slideTitleEl = document.getElementById('slide-title');
    let nextSlideTitle = document.querySelectorAll(`[data-slide-title="${slideId}"]`)[0].innerHTML;

    TweenLite.fromTo( slideTitleEl, 0.5,
      {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0
      },
      {
        autoAlpha: 0,
        filter: 'blur(10px)',
        y: 20,
        ease: 'Expo.easeIn',
        onComplete: function () {
            slideTitleEl.innerHTML = nextSlideTitle;

            TweenLite.to( slideTitleEl, 0.5, {
                autoAlpha: 1,
                filter: 'blur(0px)',
                y: 0,
            });
        }
    });
  };

  const changeSlide = (isAnimatingStatus, state, paginations, direction) => {
    if(!isAnimatingStatus) {
      isAnimatingStatus = true;

      const currentSlide = document.getElementById('pagination').querySelectorAll('.active')[0].dataset.slide;

      if (direction === `ltr`) {
        if (parseInt(currentSlide, 10) === paginations.length - 1) {
          state.slideId = 0;
        } else {
          state.slideId = parseInt( currentSlide, 10 ) + 1;
        }
      } else if (direction === `rtl`) {
        if (parseInt(currentSlide, 10) === 0) {
          state.slideId = 2;
        } else {
          state.slideId = parseInt( currentSlide, 10 ) - 1;
        }
      }

      document.getElementById('pagination').querySelectorAll('.active')[0].classList.remove(`active`);
      paginations[state.slideId].classList.add(`active`);

      animationSlide(state.slideId);
      isAnimatingStatus = false;
    }
  };

  let vertex = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
  `;
  let fragment = `
      varying vec2 vUv;
      uniform sampler2D currentImage;
      uniform sampler2D nextImage;
      uniform float dispFactor;
      void main() {
          vec2 uv = vUv;
          vec4 _currentImage;
          vec4 _nextImage;
          float intensity = 0.3;
          vec4 orig1 = texture2D(currentImage, uv);
          vec4 orig2 = texture2D(nextImage, uv);
          _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));
          _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));
          vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
          gl_FragColor = finalTexture;
      }
  `;

  let images = opts.images, image, sliderImages = [];
  let canvasWidth = images[0].clientWidth;
  let canvasHeight = images[0].clientHeight;
  let parent = opts.parent;
  let renderWidth = images[0].clientWidth;
  let renderHeight = images[0].clientHeight;
  let renderW, renderH;

  if( renderWidth > canvasWidth ) {
    renderW = renderWidth;
  } else {
    renderW = canvasWidth;
  }

  renderH = canvasHeight;

  let renderer = new THREE.WebGLRenderer({
    antialias: false,
  });

  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setClearColor( 0x23272A, 1.0 );
  renderer.setSize( renderW, renderH );
  parent.appendChild( renderer.domElement );

  let loader = new THREE.TextureLoader();
   loader.crossOrigin = "anonymous";

  images.forEach( ( img ) => {
    image = loader.load( img.getAttribute( 'src' ) + '?v=' + Date.now() );
    image.magFilter = image.minFilter = THREE.LinearFilter;
    image.anisotropy = renderer.capabilities.getMaxAnisotropy();
    sliderImages.push( image );
  });

  let scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x23272A );
  let camera = new THREE.OrthographicCamera(
    renderWidth / -2,
    renderWidth / 2,
    renderHeight / 2,
    renderHeight / -2,
    1,
    1000
  );

  camera.position.z = 1;

  let mat = new THREE.ShaderMaterial({
    uniforms: {
        dispFactor: { type: "f", value: 0.0 },
        currentImage: { type: "t", value: sliderImages[0] },
        nextImage: { type: "t", value: sliderImages[1] },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    opacity: 1.0
  });

  let geometry = new THREE.PlaneBufferGeometry(
    renderWidth,
    renderHeight,
    1
  );
  let object = new THREE.Mesh(geometry, mat);
  object.position.set(0, 0, 0);
  scene.add(object);

  let addEvents = function(){
    let pagButtons = Array.from(document.getElementById('pagination').querySelectorAll('button'));
    const slider = document.getElementById('slider');
    let isAnimating = false;

    const touchState = {
      start: 0,
      end: 0,
      slideId: 0
    };

    slider.addEventListener(`touchstart`, (evt) => {
      touchState.start = evt.targetTouches[0].screenX;
    });
    slider.addEventListener(`touchend`, (evt) => {
      touchState.end = evt.changedTouches[0].screenX;
      if (touchState.end > touchState.start) {
        changeSlide(isAnimating, touchState, pagButtons, `ltr`);
      } else if (touchState.end < touchState.start) {
        changeSlide(isAnimating, touchState, pagButtons, `rtl`);
      }
    });

    pagButtons.forEach( (el) => {
      el.addEventListener('click', function() {
        if( !isAnimating ) {
          isAnimating = true;

          document.getElementById('pagination').querySelectorAll('.active')[0].className = '';
          this.className = 'active';

          let slideId = parseInt( this.dataset.slide, 10 );

          animationSlide(slideId);
          isAnimating = false;
        }
      });
    });
  };

  addEvents();

  window.addEventListener( 'resize' , function(e) {
      renderer.setSize(renderW, renderH);
  });

  let animate = function() {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
  };
  animate();
};

(() => {
  const el = document.getElementById('slider');
  if (el) {
    const imgs = Array.from(el.querySelectorAll('img'));
    new displacementSlider({
        parent: el,
        images: imgs
    });
  }
})();

export default displacementSlider;
