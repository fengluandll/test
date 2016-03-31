const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript",
};

function getSentence({subject,verb,object}) {
    return `${subject} ${verb}, ${object}`;
}

console.log(getSentence(o));;