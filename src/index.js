module.exports = function toReadable (number) {
  const zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const arr = Array.from(String(number), Number);
  if (number <= 19) {
      return zeroToNineteen[number];
  } else if (number === 20 || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90) {
      return dozen[arr[0]];
  } else if (number > 19 && number <= 99) {
      return dozen[arr[0]] + ' ' + zeroToNineteen[arr[1]];
  } else if (number >= 100) {
      arrSlice = arr.slice(1)
      if (number === 100 || number === 200 || number === 300 || number === 400 || number === 500 || number === 600 || number === 700 || number === 800 || number === 900) {
          return zeroToNineteen[arr[0]] + ' hundred';
      } else if (arr[1] === 0) {
          return zeroToNineteen[arr[0]] + ' hundred ' +  zeroToNineteen[arr[2]];
      } else if (arr[1] === 1) {
          return zeroToNineteen[arr[0]] + ' hundred ' +  zeroToNineteen[arrSlice.join('')];
      } else if (arrSlice.join('') === '20' || arrSlice.join('') === '30' || arrSlice.join('') === '40' || arrSlice.join('') === '50' || arrSlice.join('') === '60' || arrSlice.join('') === '70' || arrSlice.join('') === '80' || arrSlice.join('') === '90') {
          return zeroToNineteen[arr[0]] + ' hundred ' + dozen[arr[1]];
      } else if (arr[1] >= 2 && arr[1] <= 9) {
          return zeroToNineteen[arr[0]] + ' hundred ' + dozen[arr[1]] + ' ' + zeroToNineteen[arr[2]];
      }
  }
}
