module.exports = {
    testPathIgnorePatterns: ['<rootDir>/node_modules'],
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ]
}