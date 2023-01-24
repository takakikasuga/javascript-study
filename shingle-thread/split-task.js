// let i = 0;

// let start = Date.now();

// function count() {

//   // 重い処理を実行
//   for (let j = 0; j < 1e9; j++) {
//     i++;
//   }

//   alert("Done in " + (Date.now() - start) + 'ms');
// }

// count();

// let i = 0;

// let start = Date.now();

// function count() {

//   // 重い処理の一部を実行 (*)
//   do {
//     i++;
//   } while (i % 1e6 != 0);

//   if (i == 1e9) {
//     alert("Done in " + (Date.now() - start) + 'ms');
//   } else {
//     setTimeout(count); // 新たな呼び出しをスケジュール (**)
//   }

// }

// count();

// let i = 0;

// let start = Date.now();

// function count() {
//   // 先頭にスケジューリングを移動させる
//   if (i < 1000000000 - 1000000) {
//     setTimeout(count); // 新たな呼び出しのスケジュール
//   }

//   do {
//     i++;
//   } while (i % 1000000 != 0);
//   console.log('i % 1000000 == ', i % 1000000);
//   console.log('i == ', i);

//   if (i == 1000000000) {
//     alert('Done in ' + (Date.now() - start) + 'ms');
//   }
// }

// count();
