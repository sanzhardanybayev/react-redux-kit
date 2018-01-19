# react-redux-kit
Welcome to the React-Redux Starter kit!
This kit will help you boost up project setting and increase efficiency 🚀

## Get Started
1. **Install [Node 8](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.** - `https://github.com/sanzhardanybayev/react-redux-kit` or [download the zip](https://github.com/sanzhardanybayev/react-redux-kit/archive/master.zip)
3. **Make sure you're in the directory you just created.** - `cd react-redux-kit`
4. **Install Node Packages.** - `npm install`
5. **Install Babel.** - `npm install i -g babel-cli`
6. **Run the app.** - `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching  all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
7. **[Disable safe write](http://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write)** to assure hot reloading works properly.
8. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
9. Having issues? See below.

## Having Issues? Try these things first:
1. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
2. Make sure the path doesn't include any spaces, or install the latest version of eslint-watch which adds support for paths containing spaces: `npm install eslint-watch@2.1.13`
3. Make sure you're running the latest version of Node. Or, use [Node 8.9.4](https://nodejs.org/download/release/v8.9.4/) if you're having issues on Windows. Node 6 has issues on some Windows machines.
4. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
5. Don't run the project from a symbolic link. It will cause issues with file watches.
6. Use path.resolve on all path references in both the dev and prod webpack.config.
7. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
8. Nothing above work? Delete your node_modules folder and re-run npm install.


## Dependencies

- [body-parser](https://ghub.io/body-parser): Node.js body parsing middleware
- [cheerio](https://ghub.io/cheerio): Tiny, fast, and elegant implementation of core jQuery designed specifically for the server
- [clean-webpack-plugin](https://ghub.io/clean-webpack-plugin): A webpack plugin to remove your build folder(s) before building
- [colors](https://ghub.io/colors): get colors in your node.js console
- [compression](https://ghub.io/compression): Node.js compression middleware
- [express](https://ghub.io/express): Fast, unopinionated, minimalist web framework
- [fs-extra](https://ghub.io/fs-extra): fs-extra contains methods that aren&#39;t included in the vanilla Node.js fs package. Such as mkdir -p, cp -r, and rm -rf.
- [html-webpack-plugin](https://ghub.io/html-webpack-plugin): Simplifies creation of HTML files to serve your webpack bundles
- [nodemailer](https://ghub.io/nodemailer): Easy as cake e-mail sending from your Node.js applications
- [normalize.css](https://ghub.io/normalize.css): A modern alternative to CSS resets
- [open](https://ghub.io/open): open a file or url in the user&#39;s preferred application
- [prop-types](https://ghub.io/prop-types): Runtime type checking for React props and similar objects.
- [pug](https://ghub.io/pug): A clean, whitespace-sensitive template language for writing HTML
- [react](https://ghub.io/react): React is a JavaScript library for building user interfaces.
- [react-dom](https://ghub.io/react-dom): React package for working with the DOM.
- [react-redux](https://ghub.io/react-redux): Official React bindings for Redux
- [redux](https://ghub.io/redux): Predictable state container for JavaScript apps
- [webpack](https://ghub.io/webpack): Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... and your custom stuff.
- [webpack-merge](https://ghub.io/webpack-merge): Variant of merge that&#39;s useful for webpack configuration

## Dev Dependencies

- [babel-core](https://ghub.io/babel-core): Babel compiler core.
- [babel-loader](https://ghub.io/babel-loader): babel module loader for webpack
- [babel-plugin-transform-class-properties](https://ghub.io/babel-plugin-transform-class-properties): This plugin transforms static class properties as well as properties declared with the property initializer syntax
- [babel-plugin-transform-object-rest-spread](https://ghub.io/babel-plugin-transform-object-rest-spread): Compile object rest and spread to ES5
- [babel-preset-env](https://ghub.io/babel-preset-env): A Babel preset for each environment.
- [babel-preset-es2015](https://ghub.io/babel-preset-es2015): Babel preset for all es2015 plugins.
- [babel-preset-react](https://ghub.io/babel-preset-react): Babel preset for all React plugins.
- [css-loader](https://ghub.io/css-loader): css loader module for webpack
- [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-airbnb](https://ghub.io/eslint-config-airbnb): Airbnb&#39;s ESLint config, following our styleguide
- [eslint-plugin-import](https://ghub.io/eslint-plugin-import): Import with sanity.
- [eslint-plugin-jsx-a11y](https://ghub.io/eslint-plugin-jsx-a11y): Static AST checker for accessibility rules on JSX elements.
- [eslint-plugin-react](https://ghub.io/eslint-plugin-react): React specific linting rules for ESLint
- [eslint-watch](https://ghub.io/eslint-watch): Run eslint with watch mode
- [eventsource-polyfill](https://ghub.io/eventsource-polyfill): A browser polyfill for W3C EventSource (http://www.w3.org/TR/eventsource/)
- [fs](https://ghub.io/fs): This package name is not currently in use, but was formerly occupied by another package. To avoid malicious use, npm is hanging on to the package name, but loosely, and we&#39;ll probably give it to you if you want it.
- [node-sass](https://ghub.io/node-sass): Wrapper around libsass
- [npm-run-all](https://ghub.io/npm-run-all): A CLI tool to run multiple npm-scripts in parallel or sequential.
- [path](https://ghub.io/path): Node.JS path module
- [sass-loader](https://ghub.io/sass-loader): Sass loader for webpack
- [style-loader](https://ghub.io/style-loader): style loader module for webpack
- [url-loader](https://ghub.io/url-loader): url loader module for webpack
- [webpack-dev-middleware](https://ghub.io/webpack-dev-middleware): A development middleware for webpack
- [webpack-dev-server](https://ghub.io/webpack-dev-server): Serves a webpack app. Updates the browser on changes.
- [webpack-hot-middleware](https://ghub.io/webpack-hot-middleware): Webpack hot reloading you can attach to your own server
