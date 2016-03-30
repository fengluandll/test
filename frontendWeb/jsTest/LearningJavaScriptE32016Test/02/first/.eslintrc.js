module.exports = {
    "env": {
        "browser": false,
        "node":true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": false
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            2,
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        // "quotes": [
        //     "error",
        //     "single"
        // ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [
            "error",
            { allow: ["log","warn", "error"] }
        ]
    }
};