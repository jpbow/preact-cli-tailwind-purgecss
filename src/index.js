const preactCliTailwindPurgeCSS = (config, env, helpers, options = {}) => {
  if (!config) {
    throw Error("You need to pass the config");
  }
  if (!env) {
    throw Error("You need to pass the env");
  }
  if (!helpers) {
    throw Error("You need to pass the helpers");
  }

  const purgecss = require("@fullhuman/postcss-purgecss")({
    // Specify the paths to all of the template files in your project
    content: [
      "./src/**/*.html",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./src/**/*.js",
      "./src/**/*.jsx",
    ],
    // Include any special characters you're using in this regular expression
    defaultExtractor: (content = "") => content.match(/[\w-/:]+(?<!:)/g) || [],
    ...options,
  });

  const postCssLoaders = helpers.getLoadersByName(config, "postcss-loader");

  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.plugins;

    // Add tailwind css at the top.
    plugins.unshift(require("tailwindcss"));

    // Add PurgeCSS only in production.
    if (env.production) {
      plugins.push(purgecss);
    }
  });
};

module.exports = preactCliTailwindPurgeCSS;
