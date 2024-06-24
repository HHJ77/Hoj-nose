module.exports = function (api) {
  api.cache(true);

  const presets = ["@vue/cli-plugin-babel/preset"];

  const plugins = [
    // 在这里添加静态类块转换插件
    "@babel/plugin-transform-class-static-block",
    // ... 你可能已经有的其他插件
  ];

  return {
    presets,
    plugins,
  };
};
