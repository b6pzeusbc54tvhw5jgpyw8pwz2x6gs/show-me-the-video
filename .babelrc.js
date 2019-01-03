module.exports = {
  presets: [
    "next/babel",
    "@zeit/next-typescript/babel",
  ],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    "babel-plugin-rewire",
    ["babel-plugin-styled-components", { "minify": false }],
  ],
  "env": {
    "test": {
      "presets": [
        "next/babel",
        "@zeit/next-typescript/babel",
      ],
      "plugins": [
        "@babel/plugin-proposal-optional-chaining",
        "babel-plugin-rewire",
        ["babel-plugin-styled-components", { "minify": false }],
      ]
    }
  }
}
