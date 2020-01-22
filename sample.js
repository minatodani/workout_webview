let msg = "";

// #1
console.log("#1");
msg = msg + "Hello ";

// #2
setTimeout(() => {
  // 時間のかかる処理
  console.log("#2");
  msg = msg + "I'm ";
}, 500);

// #3
console.log("#3");
msg = msg + "Jeccy";

// #4
console.log("#4");
console.log(msg);
