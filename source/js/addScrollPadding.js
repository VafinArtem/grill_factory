const AddScrollPadding = () => {
  const div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';

  document.body.append(div);

  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  if (window.matchMedia("(min-width: 1200px)").matches) {
    document.documentElement.style.setProperty("--desktop-padding-right", `calc(100px + ${scrollWidth}px)`);
  } else if (window.matchMedia("(min-width: 992px)").matches) {
    document.documentElement.style.setProperty("--tablet-padding-right", `calc(30px + ${scrollWidth}px)`);
  }
};

export default AddScrollPadding;
