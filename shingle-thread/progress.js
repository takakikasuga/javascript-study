// function count() {
//   for (let i = 0; i < 1e6; i++) {
//     i++;
//     progress.innerHTML = i;
//   }
// }

// count();

let i = 0;

function count() {
  // 重い処理の一部を実行 (*)
  do {
    i++;
    progress.innerHTML = i;
  } while (i % 1000 != 0);

  if (i < 1000000) {
    setTimeout(count);
  }
}

count();
