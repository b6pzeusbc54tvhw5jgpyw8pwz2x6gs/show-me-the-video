module.exports = {
  "presets": ["next/babel"],
  "plugins": [
    "@babel/plugin-proposal-optional-chaining",
    ["babel-plugin-styled-components", { "minify": false }],
  ],
  "env": {
    "test": {
      "presets": ["next/babel"],
      "plugins": [
        "@babel/plugin-proposal-optional-chaining",
        "babel-plugin-rewire",
        ["babel-plugin-styled-components", { "minify": false }],
      ]
    }
  }
}

