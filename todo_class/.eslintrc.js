module.exports = {
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      rules: {
        "max-len": ["error", { "code": 100, "ignoreStrings": true, "ignoreTemplateLiterals": true }]
      }
    }
  ]
};