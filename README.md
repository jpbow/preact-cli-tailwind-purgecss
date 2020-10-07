# preact-cli-tailwind-purgecss

Adds Tailwind and a typical PurgeCSS config to your Preact CLI project.

Unused styles are purged during production builds.

## Getting Started

Install it via npm:

```shell
npm install preact-cli-tailwind-purgecss
```

yarn:

```shell
yarn add preact-cli-tailwind-purgecss --dev
```

Include the plugin in your project by creating a `preact.config.js`

```javascript
const preactCliTailwindPurgeCSS = require("preact-cli-tailwind-purgecss");

export default function (config, env, helpers) {
  preactCliTailwindPurgeCSS(config, env, helpers);
}
```

Create a `tailwind.config.js` file.

```javascript
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

Create a folder for styles, and a CSS file in `src/styles` with the following Tailwind imports. (Or SASS/SCSS, install `sass-loader` & `node-sass` for this `yarn add -D sass-loader node-sass`).

```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

Then import that CSS or SASS file into your app's main `index.js` file, e.g. `import "./styles/index.css";`

### Configure PurgeCSS

Pass in an object with any required config.

```javascript
const preactCliTailwindPurgeCSS = require("preact-cli-tailwind-purgecss");

export default function (config, env, helpers) {
  preactCliTailwindPurgeCSS(config, env, helpers, {
    content: ["./src/**/*.mdx"],
  });
}
```

## License

MIT
