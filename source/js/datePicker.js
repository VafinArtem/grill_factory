const DatePicker = (mobileDetect) => {
  const dateInputElement = document.querySelector(`.js-datepicker`);

  if (dateInputElement && mobileDetect.mobile()) {
    dateInputElement.type = `date`;
  } else if (dateInputElement) {
    const picker = datepicker(`.js-datepicker`, {
      formatter: (input, date, instance) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const value = date.toLocaleDateString(`ru-RU`, options);
        input.value = value;
      },
      customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      customMonths: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      minDate: new Date(),
      dateSelected: new Date(),
      disableMobile: true,
      disableYearOverlay: true,
    });
  }
};

export default DatePicker;

// (() => {
//   let urls = [
//     "http://mylink1",
//     "http://mylink2",
//     "http://mylink3",
//     "http://mylink4",
//   ];

//   let idx = 0;
//   let length = urls.length;

//   const doNext = () => {
//     let entry = urls[idx];

//     console.log(idx + ":" + entry);
//     idx++;
//     console.log([idx, length]);
//     if (idx < length) {
//       // Don't do anything special
//     } else {
//       idx = 0;
//     }
//     setTimeout(doNext, 300);
//   };

//   doNext();
// })();
