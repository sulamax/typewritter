// const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);

//   }, 2000)
// }

setTimeout(function() {
  process.stdout.write('h\n');
}, 1000);
setTimeout(function() {
  process.stdout.write('e\n');
}, 2000);
setTimeout(function() {
  process.stdout.write('l\n');
}, 3000);
setTimeout(function() {
  process.stdout.write('l\n');
}, 4000);
setTimeout(function() {
  process.stdout.write('o\n');
}, 5000);