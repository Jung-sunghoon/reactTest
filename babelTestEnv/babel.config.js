const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        chrome: "40",
      },
      useBuiltIns: "usage",
      corejs: { version: 3, propsals: true },
    },
  ],
];

module.exports = { presets };
