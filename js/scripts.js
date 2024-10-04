let inp = document.querySelector('#tel');
function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1)
    event.preventDefault();
}

// // Проверяем фокус
// inp.addEventListener('focus', _ => {
//   // Если там ничего нет или есть, но левое
//   if(!/^\+\d*$/.test(inp.value))
//     // То вставляем знак плюса как значение
//     inp.value = '+';
// });

// inp.addEventListener('keypress', e => {
//   // Отменяем ввод не цифр
//   if(!/\d/.test(e.key))
//     e.preventDefault();
// });
// <form action="">
//   {/* Ограничение на длину: maxlength */}
//   <input type="text" name="tel" placeholder="Номер телефона" required maxlength="13" id="tel">
// </form>