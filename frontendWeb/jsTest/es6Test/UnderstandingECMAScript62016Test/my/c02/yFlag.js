let text = "hello1 hello2 hello3",
    pattern = /hello\d\s?/,
    result = pattern.exec(text),
    globalPattern = /hello\d\s?/g,
    globalResult = globalPattern.exec(text),
    stickyPattern = /hello\d\s?/y,
    stickyResult = stickyPattern.exec(text);

console.log(result[0]);
console.log(globalResult[0]);
console.log(stickyResult[0]);

// "hello1 " // "hello1 " // "hello1 "

console.log(pattern.lastIndex);
console.log(globalPattern.lastIndex);
console.log(stickyPattern.lastIndex);

result = pattern.exec(text);
globalResult = globalPattern.exec(text);
stickyResult = stickyPattern.exec(text);

// 0 // 7 //
console.log(result[0]);
console.log(globalResult[0]);
console.log(stickyResult[0]);

// "hello1 " // "hello2 " // "hello2 "

console.log(pattern.lastIndex);
console.log(globalPattern.lastIndex);
console.log(stickyPattern.lastIndex);

// 0 // 14 // 14