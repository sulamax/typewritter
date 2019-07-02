const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);

//   }, 2000)
// }



for (const char in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
  }, 100 + char * 100);
};
