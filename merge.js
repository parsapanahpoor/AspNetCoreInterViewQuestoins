const fs = require("fs");
const vm = require("vm");

const ctx = { window: {} };
vm.createContext(ctx);
["part1", "part2", "part3", "part4"].forEach((p) => {
  vm.runInContext(fs.readFileSync(p + ".js", "utf8"), ctx);
});

const all = [
  ...ctx.window.__PART1,
  ...ctx.window.__PART2,
  ...ctx.window.__PART3,
  ...ctx.window.__PART4,
];

const out = "window.INTERVIEW_BANK = " + JSON.stringify(all, null, 2) + "\n";
fs.writeFileSync("questions-data.js", out, "utf8");

const ctx2 = { window: {} };
vm.createContext(ctx2);
vm.runInContext(fs.readFileSync("questions-data.js", "utf8"), ctx2);
const bank = ctx2.window.INTERVIEW_BANK;
console.log(
  "OK cats",
  bank.length,
  "qs",
  bank.reduce((s, c) => s + c.questions.length, 0)
);
console.log("size", fs.statSync("questions-data.js").size);
