const a = 17;
const b = 7;

console.log(convertBits(a, b));

/**
 * 31 - 11111
 * 14 - 01110
 *
 */

function convertBits (A, B) {
  console.log(A.toString(2));
  console.log(B.toString(2));

  let diff = A ^ B;

  let count = 0;
  let bits = diff.toString(2).split('');
  bits.forEach(bit => {
    if (bit === '1') {
      count++;
    }
  });
  return count;
}
