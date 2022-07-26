let ok = true;
let maybeOk = false;
if (ok) {
  console.log('OK!');
} else if (maybeOk) {
  console.log('maybe OK...');
} else {
  console.log('NO!');
}
ok = 1 === 1;
ok = 'hello' === 'hello';
ok = 1 !== 2;
ok = 1 == 1;
ok = 1 == '1';
ok = 1 === '1';
ok = 1 != '2';

const coffee1 = { name: 'Cafe Latte' };
const coffee2 = { name: 'Cafe Latte' };
const coffee3 = coffee1;
ok = coffee1 === coffee3;
ok = coffee1.name === coffee2.name;
const fruits1 = ['apple', 'banana'];
const fruits2 = ['apple', 'banana'];
ok = fruits1 === fruits2;

ok = 1 > 0;
ok = 'a' < 'b';
ok = 'A' < 'a';
ok = 100;
ok = {};
ok = 'false';
if (ok) {
  // console.log('OK!');
} else {
  console.log('NO!');
}
ok = false && true;
ok = false || false;
ok = 'hello' && 'hi';
ok = '' || 'hi';
const userInput = '';
const userName = userInput || 'User';
const x = 15;
ok = x > 10 && x < 20;
ok = x === 10 || (x > 12 && userName);
if (ok) {
  // console.log('OK!');
} else {
  console.log('NO!');
}
ok = !true;
ok = !'hello';
ok = !x;
ok = !!x;

const hello = 'hello2';
{
  const hello = 'hello1';
}
ok = false;
ok = ok ? 'OK' : 'NO';

function vegetableColor(vegetable) {
  switch (vegetable) {
    case 'tomato': {
      const message = 'tomato is red!';
      console.log(message);
      break;
    }
    case 'carrot':
    case 'pumpkin': {
      console.log(message);
      // const message = `${vegetable} is orange!`;
      break;
    }
    case 'onion': {
      const message = 'onion is white!';
      console.log(message);
      break;
    }
    default: {
      const message = 'not found';
      console.log(message);
    }
  }
  // if (vegetable === 'tomato') {
  //   console.log('tomato is red!');
  // } else if (vegetable === 'pumpkin') {
  //   console.log('pumpkin is orange!');
  // } else if (vegetable === 'onion') {
  //   console.log('onion is white!');
  // }
}
vegetableColor('tomato');

let count = 100;
while (count < 10) {
  console.log('while: ', count);
  count += 1;
}

let tomatoCount = 100;
do {
  // console.log('do-while: ', tomatoCount);
  tomatoCount += 1;
} while (tomatoCount < 10);

for (
  let pumpkinCount = 0, i = 0;
  pumpkinCount < 10;
  pumpkinCount += 1, i += 1
) {
  // console.log(pumpkinCount, i);
}

const fruits = ['apple', 'banana', 'grape', 'orange', 'mango'];
for (let i = 0; i < fruits.length; i += 1) {
  // console.log(fruits[i]);
}
for (const fruit of fruits) {
  // console.log(fruit);
}
const coffee = {
  name: 'Caffe Latte',
  size: 350,
  isHot: true
};
coffeeCondition: if (true) {
for (const key in coffee) {
    // console.log(key);
    // console.log(coffee[key]);
    if (key === 'size') {
      // console.log('continue!');
      break coffeeCondition;
    }
  }
  // console.log('inside an if statement');
}
const coffeeCondition = 'coffee';

function logChocolate() {
  try {
    console.log('try');
    console.log(chocolate);
  } catch (error) {
    console.log('catch', error);
  } finally {
    console.log('finally');
    return 'hello';
  }
}
logChocolate();

hello: {
  break hello;
}
