// Инициализация
$('.datepicker-here').datepicker({
  clearButton: false,
  range: true,
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  navTitles: {
    days: 'MM yyyy'
  },
})

// Доступ к экземпляру объекта
$('.datepicker-here').data('datepicker')

$('.datepicker--content').after($('.calendar__buttons'));

// Код для добавления двух кнопок

// let applyButtons = document.querySelectorAll('.apply-button');
// let datepickers = document.querySelectorAll('.datepicker');
// let dateDropdowns = document.querySelectorAll('.datepicker--buttons');
// for (let i = 0; i < dateDropdowns.length; i++) {

//     dateDropdowns[i].addEventListener('click', (e) => {
//         if (!e.target.classList.contains('input__label') && e.target != dateDropdowns[i]) {
//             dateDropdowns[i].querySelector('.datedropdown__input_first').focus();
//         }
//     })

//     applyButtons[i].addEventListener('click', () => {
//         datepickers[i].classList.remove('active');
//         datepickers[i].style.left = '-100000px';
//         datepickers[i].style.top = '1601px';
//     })

//     $('.datedropdown__input_first').eq(i).datepicker({ 
//         onSelect: function (fd, d, picker) { 
//           $('.datedropdown__input_first').eq(i).val(fd.split(",")[0]);
//           $('.datedropdown__input_second').eq(i).val(fd.split(",")[1]);
//         }
//     });
// }
