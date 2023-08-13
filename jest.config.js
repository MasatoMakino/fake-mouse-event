module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["./src/**/*.ts"],
  transform: {
    "\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },
};
