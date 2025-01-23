export default [
  {
    files: ["**/*.js"], // Adjust this pattern for your project
    languageOptions: {
      ecmaVersion: "latest", // Ensures modern JavaScript features are supported
      sourceType: "module",
    },
    rules: {
      "constructor-super": "error", // Include basic rules
    },
  },
];
