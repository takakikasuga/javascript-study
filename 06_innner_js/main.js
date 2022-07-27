/**
 * @docs use strict
 * @refs https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode
 */
// 'use strict';
console.log(
  '********内蔵されているグローバルオブジェクトはこうなっている********'
);
/**
 * @docs 標準組み込みオブジェクト
 * @ref https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects
 */
/**
 * @docs Window
 * @ref https://developer.mozilla.org/ja/docs/Web/API/Window
 */
/**
 * @docs NodeJS globals
 * @ref https://nodejs.org/api/globals.html
 */
console.log('globalThis === ', globalThis);

console.log(
  '********varとletの４つの違い(ホイスティングやスコープなど)********'
);
/**
 * @docs let, const との違い
 * @diff1 var再宣言できる。
 * @diff2 ブロックスコープが効かない。（例:関数スコープが適用される。）
 * @diff3 関数スコープ以外でvarで定義した変数はグローバルオブジェクトに登録される。
 * @diff4 var宣言は変数の巻き上げは起きるが初期値は伴わない。
 */
{
  {
    // NOTE: varは関数スコープでconst, letはブロックスコープになる。
    var tomato = 'tomato';
  }
}
console.log('tomato === ', tomato);
function sayPasta() {
  var pasta = 'pasta';
}
// NOTE: pastaにはアクセスすることができない。
// console.log('pasta === ', pasta);

// NOTE: 関数以外のvar宣言はglobalオブジェクトに追加される。
var hello = 'hello';
var hello = 'hi!!';
console.log('hello === ', hello);

// NOTE: var宣言は変数の巻き上げは起きるが初期値は伴わない。
console.log(apple); // undefined
var apple = 'apple';
console.log(apple); // apple

console.log(
  '********関数宣言文とvarはここが似ている********'
);
/**
 * @docs 関数宣言は非常にvarと近い
 * @diff1 関数宣言は再宣言できる。
 * @diff2 ブロックスコープが効かない。（例:関数スコープが適用される。）
 * @diff3 関数スコープ以外で関数宣言で定義した変数はグローバルオブジェクトに登録される。
 * @diff4 関数宣言は変数の巻き上げが起こり、初期値も伴う。（例:ブロックスコープが適用される。）
 */

// NOTE: 関数宣言は再宣言できる。
function sayBanana() {
  var banana = 'banana';
  console.log(banana);
}
function sayBanana() {
  var banana = 'banana2';
  console.log(banana);
}
sayBanana()

// NOTE: ブロックスコープが効かない。（例:関数スコープが適用される。）
{
  function sayLemon() {
    var lemon = 'lemon';
    console.log(lemon);
  }
}
sayLemon()

// NOTE: 関数スコープ以外でvarで定義した変数はグローバルオブジェクトに登録される。
console.log(globalThis);

// NOTE: 関数宣言は変数の巻き上げが起こり、初期値も伴う。
sayChocolate()
function sayChocolate() {
  var chocolate = 'chocolate';
  console.log(chocolate);
}

// 「'use strict';」によるstrictモードを有効にして、言語の緩い実装を縛る。
// {
//   function sayTomato() {
//     // NOTE: strictは関数の一番上に書くこともできる。
//     // 'use strict';
//     var tomato = 'tomato';
//   }
// }
// sayTomato();

console.dir(sayTomato); // undefined
{
  // NOTE: ブロックスコープ内部の関数宣言は変数の巻き上げは起きるが初期値は伴わない。
  function sayTomato() {
    // NOTE: strictは関数の一番上に書くこともできる。
    // 'use strict';
    var tomato = 'tomato';
  }
}
console.dir(sayTomato); // sayTomato

console.log(
  '********「primitive」と「object」********'
);
const coffee = {
  name: 'Cafe Latte'
};
const coffee3 = {
  name: 'Cafe Latte'
};
console.log(coffee === coffee3);
const coffee2 = coffee;
coffee2.name = 'Espresso';
console.log(coffee);
console.log(coffee === coffee2);
