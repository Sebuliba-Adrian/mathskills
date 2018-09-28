module.exports = {
  extends: [
        "airbnb",
        "plugin:prettier/recommended"
    ],
  plugins: [
        "react",
        "jsx-a11y",
        "import"
    ],
  rules: {
        "react/jsx-filename-extension": [
            1,
            { extensions: [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "prettier/prettier": [
            "error",
            { singleQuote: true
            }
        ],
    }
};
