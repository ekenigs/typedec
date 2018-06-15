module.exports = {
    "testEnvironment": "node",
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "/__tests__/.*\\.test\\.ts$",
    "testPathIgnorePatterns": [
        "<rootDir>/build/"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ]
};
