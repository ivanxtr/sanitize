/** ************************************
  Your challenge is to refactor the cleanse function so its return value is a 
  clone of its received object, absent all `null` and `undefined` values.
   - You can use Ramda.js or vanilla JavaScript to solve
   - You may not mutate foo

  Example:
  const foo = { a : 1, b : 2, c : 0, d : false, e : undefined, f : null, g : 'hello' };
  cleanse(foo); // { a : 1, b : 2, c : 0, d : false, g : 'hello' };
  foo remains unmutated // { a : 1, b : 2, c : 0, d : false, e : undefined, f : null, g : 'hello' };
 ************************************ **/

const foo = {
  a : 'foo',
  b : 'bar',
  c : null,
  d : undefined,
  e : 0,
  f : {
    a : 'fuz',
    b : null,
    c : {
      a : 'biz',
      b : 'buz',
      c : [
        {
          a : 'foo',
          b : 'bar',
          c : null,
          d : undefined,
          e : 0,
          f : false
        },
        {
          a : 'foo',
          b : 'bar',
          c : null,
          d : undefined,
          e : 0
        },
        {
          a : 'foo',
          b : 'bar',
          c : null,
          d : undefined,
          e : 0
        }
      ]
    }
  }
};

// cleaning the object
const cleanse = o => {
  return JSON.parse(JSON.stringify(o, (key, value) => {
    return (value === null ? undefined : value);
  }));
};

console.log(cleanse(foo));
console.log('------------------')
console.log(foo)
