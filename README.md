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

And include in your project by creating a `preact.config.js`

```javascript
const preactCliTailwindPurgeCSS = require("preact-cli-tailwind-purgecss");

export default function (config, env, helpers) {
  preactCliTailwindPurgeCSS(config, env, helpers);
}
```

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
