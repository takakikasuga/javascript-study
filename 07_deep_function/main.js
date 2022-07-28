console.log('******** レキシカル環境 ********');
// let apple  =  "apple"
// let banana = "banana"
// {
//   let mango = "mango"
//   console.log('?')
//   {
//     let orange = "orange"
//   }
// }
/**
 * レキシカル環境 - 1
 * global object
 * apple: apple
 * banana: banana
 */
/**
 * レキシカル環境 - 2
 * outerEnv（外側のレキシカル環境を指し示す。） - 「レキシカル環境 - 1」
 * （*アドレスで指し示す。）
 * mango: mango
 * 「console.log('?')」はそこに存在する「レキシカル環境 - 2」を見て、変数がない場合は「outerEnv = レキシカル環境 - 1」を見て探しに行く。
 */
/**
 * レキシカル環境 - 3
 * outerEnv（外側のレキシカル環境を指し示す。） - 「レキシカル環境 - 2」
 * orange: orange
 */

console.log('******** 単純な関数におけるレキシカル環境の仕組み ********');
// let apple = 'apple';
// let banana = 'banana';
// let outerFunc = (a) => {
//   let mango = 'mango';
//   let innerFunc = () => {
//     let orange = 'orange';
//   };
//   innerFunc();
// };
// // NOTE: 関数は呼び出した時にレキシカル環境が作成される。
// outerFunc('Hello!');
/**
 * レキシカル環境 - 1
 * global object
 * apple: apple
 * banana: banana
 * outerFunc: {}
 */
/**
 * レキシカル環境 - 2（*「outerFunc("Hello!");」の呼び出し時に作成される。）
 * outerEnv（外側のレキシカル環境を指し示す。） - 「レキシカル環境 - 1」
 * a: Hello!
 * mango: mango
 * innerFunc: {}
 */
/**
 * レキシカル環境 - 3（*「innerFunc();」の呼び出し時に作成される。）
 * outerEnv（外側のレキシカル環境を指し示す。） - 「レキシカル環境 - 2」
 * orange: orange
 */

console.log(
  '******** 複雑な関数ではレキシカル環境はこうなっている -クロージャ(Closure) ********'
);
let outerFunc = () => {
  const mango = 'mango';
  return () => {
    const orange = 'orange';
    console.log({ mango, orange });
  };
};
// NOTE: 関数は呼び出した時にレキシカル環境が作成される。
const innerFunc = outerFunc();
innerFunc();
/**
 * レキシカル環境 - 1
 * global object
 * outerFunc: { [[Environment]]: 「レキシカル環境 - 1」}
 * innerFunc: { [[Environment]]: 「レキシカル環境 - 2」}
 * [[Environment]]: その関数が作られたレキシカル環境を指し示す。
 */
/**
 * レキシカル環境 - 2（*「outerFunc();」の呼び出し時に作成される。）
 * outerEnv（outerFuncの[[Environment]]を指し示す。） - 「レキシカル環境 - 1」
 * mango: mango
 */
/**
 * レキシカル環境 - 3（*「innerFunc();」の呼び出し時に作成される。）
 * outerEnv（innerFuncの[[Environment]]を指し示す。） - 「レキシカル環境 - 2」
 * orange: orange
 */

console.log('******** レキシカル環境を理解する上での３つの注意点 ********');
let fruit = 'apple';
const satFruit = () => {
  console.log(fruit);
};
fruit = 'banana';
satFruit(); // ⇨ banana
/**
 * レキシカル環境 - 1
 * global object
 * fruit: apple ⇨ banana
 * satFruit: { [[Environment]]: 「レキシカル環境 - 1」}
 * [[Environment]]: スナップショットではなく、アドレスで指定されている。
 * [[Environment]]: その関数が作られたレキシカル環境を指し示す。
 */
/**
 * レキシカル環境 - 2（*「satFruit();」の呼び出し時に作成される。）
 * outerEnv（satFruitの[[Environment]]を指し示す。） - 「レキシカル環境 - 1」
 */

const createCounter = () => {
  let count = 0;

  return () => {
    let tomato = 'tomato';
    // NOTE: V8エンジンだとcount自体消えるが、safariだと残ってしまう。
    count += 1;
    // debugger;
    console.log('count === ', count);
  };
};
let counter = createCounter();
counter(); // ⇨ 1
counter(); // ⇨ 2
/**
 * レキシカル環境 - 1
 * global object
 * createCounter: { [[Environment]]: 「レキシカル環境 - 1」}
 * counter: { [[Environment]]: 「レキシカル環境 - 2」}
 * [[Environment]]: その関数が作られたレキシカル環境を指し示す。
 */
/**
 * レキシカル環境 - 2（*「createCounter();」の呼び出し時に作成される。）
 * outerEnv（createCounterの[[Environment]]を指し示す。） - 「レキシカル環境 - 1」
 * count: 0
 */
/**
 * レキシカル環境 - 3-1（*「counter();」の呼び出し時に作成される。）
 * outerEnv（counterの[[Environment]]を指し示す。） - 「レキシカル環境 - 2」
 */
/**
 * レキシカル環境 - 3-2（*「counter();」の呼び出し時に作成される。）
 * outerEnv（counterの[[Environment]]を指し示す。） - 「レキシカル環境 - 2」
 */

console.log('******** クロージャを使ってプライベート変数を作る方法 ********');
// NOTE: プライベート変数を作成することができる。
const generatePerson = (name) => {
  let age = 0;
  return {
    getName: () => name,
    getAge: () => age,
    incrementAge: () => {
      age++;
    }
  };
};
const takaki = generatePerson('takaki');
console.log(takaki);
console.log(takaki.getName());
console.log(takaki.getAge());
takaki.incrementAge();
takaki.incrementAge();
console.log(takaki.getAge());
const tom = generatePerson('tom');
console.log(tom);
console.log(tom.getName());
console.log(tom.getAge());
tom.incrementAge();
tom.incrementAge();
tom.incrementAge();
console.log(tom.getAge());

console.log(
  '******** IIFE(即時実行関数式)を使って、関数の定義と呼び出し式を組み合わせる方法 ********'
);
const speedExec = (() => {
  console.log('speedExec');
})();

console.log(
  '******** 自分自身を呼び出す再帰関数を使って、効率よくループ処理をする方法 ********'
);
// 3! 3 * 2 * 1
let factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
console.log(factorial(3));

console.log(
  '******** これが実行コンテキストスタック(execution context stack)だ！ ********'
);
// NOTE: コールスタック
const c = () => {
  return 'hello';
};
const b = () => {
  return c();
};
const a = () => {
  return b();
};
// debugger;
a();
