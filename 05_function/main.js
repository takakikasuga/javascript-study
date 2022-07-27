console.log('********関数はオブジェクトである********');
console.log(add(1, 2));
// NOTE: 関数宣言巻き上げられる。
// NOTE: === let add = {}
function add(a, b) {
  return a + b;
}
console.dir(add);
console.log('add.name === ', add.name);
console.log('add.length === ', add.length);

console.log('********関数式を使って、関数を変数に代入する方法********');
// NOTE: 分が必要な場所では「関数宣言文」となり、式が必要な場所では「関数式」となる。
// NOTE: 名前付き関数式
let sayHi = function hi() {
  return 'hi';
};
console.log('sayHi() ==== ', sayHi());
console.dir(sayHi);
// NOTE: 無名関数（アノニマス関数）
sayHi = function () {
  return 'sayHi';
};
console.log('sayHi() ==== ', sayHi());
console.dir(sayHi);

console.log('********関数宣言と関数式の違い********');
// NOTE: 関数宣言は上書きされる。
function add(a, b) {
  return a + b + 10;
}
console.log(add(1, 2));

console.log('********関数とメソッドの違い********');
const person = {
  name: 'takaki',
  sayHi: function () {
    return {
      a: 'a',
      sayHello: function () {}
    };
  }
};
console.log('person.sayHi().a === ', person.sayHi().a);

console.log('********アロー関数が持つ3つの特徴********');
/**
 * @diff1 1つの式を返す場合、returnと()を省略することができる。
 * @diff2 パラメーターが1つのみの場合、引数の()を省略することができる。
 * @diff3 thisの挙動が異なる。
 */
sayHi = function (name) {
  return `Hi ${name}!`;
};
sayHi = (name) => `Hi ${name}!`;
console.log('sayHi("takaki") === ', sayHi('takaki'));
// NOTE: オブジェクトを返す場合は、()で囲む。
sayHi = (name) => ({
  name
});
console.log('sayHi("takaki") === ', sayHi('takaki'));

console.log('********デフォルトパラメーター********');
sayHi = (name = 'User', message = 'I like cake') => `Hi ${name}! ${message}`;
console.log(sayHi('takaki'));
console.log(sayHi());
console.log(sayHi(undefined));
console.log(sayHi(null));
console.log(sayHi(0));

console.log('********レストパラメーター********');
let sum = (...nums) => {
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};
console.log('sum(1, 3, 5) === ', sum(1, 3, 5));

sum = function () {
  // NOTE: ES2015以前のレストパラメーターの書き方。アロー関数には使用できない。
  console.log('arguments === ', arguments);
  let total = 0;
  for (argument of arguments) {
    total += argument;
  }
  return total;
};
console.log('sum(1, 2, 3, 4, 5) === ', sum(1, 2, 3, 4, 5));

console.log('********コールバック関数********');
let subtract = (a, b, callback) => {
  let result = a - b;
  callback(result);
};
subtract(10, 3, (name) => {
  console.log(`${name} Hello 🚀`);
});

console.log('********無名関数式と名前付き関数の違い********');
// NOTE: デバッグの時に「名前付き関数」の方がわかりやすい。
// subtract(10, 3, function showResult(name) {
//   console.log(`${name} Hello 🚀`);
//   console.log(anonymous);
// });

console.log('********パラメーターは後から変更ができる********');
let changeable = (a, b) => {
  // NOTE: letの変数宣言のような扱いになる。
  a = 30;
  return a + b;
};
console.log(changeable(1, 2));

console.log('********関数とオブジェクトを見分けられる。********');
console.log(typeof function(){});
console.log(typeof {});