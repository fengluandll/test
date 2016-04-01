function addPrefix(prefix, ...words) {
// we will learn a better way to do this later!
    const prefixedWords = [];
    for(let i=0; i<words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}
console.log(addPrefix("con", "verse", "vex")); // ["converse", "convex"]