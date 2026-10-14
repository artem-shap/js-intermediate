// 1. Addition
{
  let sum = 0;

  for (let i = 200; i <= 2700; i++) {
    const by3 = i % 3 === 0;
    const by5 = i % 5 === 0;

    if (by3 !== by5) {
      sum += i;
    }
  }

  console.log(sum); 
}

// 2. Shift the values 
{
  let X = [2, 1, 6, 4, -7];

  for (let i = 0; i < Math.floor(X.length / 2); i++) {
    let temp = X[i];
    X[i] = X[X.length - 1 - i];
    X[X.length - 1 - i] = temp;
  }

  console.log(X); 
}

// 3. FizzBuzz 
{
  let result = [];

  for (let i = 1; i <= 135; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }

  console.log(result); 
}

// 4. Fibonacci
{
  let a = 0;
  let b = 1;
  let sum = 0;

  while (a < 1000000) {
    sum += a;
    let next = a + b;
    a = b;
    b = next;
  }

  console.log(sum); 
}

// 5. Remove the negatives
{
  let X = [1, -2, 4, 1];
  let result = [];

  for (let i = 0; i < X.length; i++) {
    if (X[i] >= 0) {
      result.push(X[i]);
    }
  }

  console.log(result); 
}

// 6. Communist censorship
let X = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
let word = 'Program';   // change this to any other word

for (let i = 0; i < X.length; i++) {
  if (X[i] === word) {
    X[i] = '*'.repeat(X[i].length);
  }
}

console.log(X); // ['Man', 'I', 'Love', 'The', 'Matrix', '*******']