module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["**/bin/**/*.js"],
  transform: {
    "\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },
};
