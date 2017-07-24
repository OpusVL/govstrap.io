# Govstrap.IO Boilerplate Starter Kit

This Boilerplate Starter Kit is a Front-end web kit and boilerplate for building web apps or small sites reflecting the GOV.UK designs patterns using Pug(Jade) and Sass / Scss

Govstrap.io is a port of the GOV.UK standard web theme to the Bootstrap framework

Govstrap.io is a port of the GOV.UK standard web theme to the Bootstrap framework which allows developers with working knowledge of Bootstrap to build GOV.UK related sites without learning the details of the GDS methods. This software enables the developer to take advantage of the significant investments made by GDS in accessibility and device compatibility by re-using the GDS theme.

The code was created as a by-product of the Summer 2016 <http://code4health.org> website update and subsequently released for re-use by others, therefore all code created for the govstrap.io project is available as Open Source software.

Please keep in mind this project is still beta, meaning things may not be working as expected or will be changed in future updates and may have some broken links whilst we develop the site.

This repo contains the <http://govstrap.io> website code and examples.

The site is created using apache SSI to simplify editing and management of the site. govstrap.io has also been integrated in to the <http://flexibase.io> CMS platform.


## Inspiration

This project is based on a simple and fast workflow focused mainly on the front-end task. It gives a solid starting point for newcomers who wants a ready-to-deploy local environment setup. The sources used to build this project includes:

-   [H5BP Project](https://github.com/h5bp/html5-boilerplate)
-   [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit)
-   [Mark Goodyear's Blog](https://markgoodyear.com/2014/01/getting-started-with-gulp/)
-   [Web Starter Kit](https://github.com/google/web-starter-kit)

## Features

-   Pug-Sass ready.
-   Easy to deploy your production files
-   Performance optimization: minify and concatenate JavaScript, CSS, HTML and images
-   Live browser reloading with `BrowserSync`
-   Includes:
    -   [`Normalize.css`](https://necolas.github.com/normalize.css/) for CSS normalizations and common bug fixes
    -   [`jQuery`](https://jquery.com/) via Bower installation
    -   [`Bootstrap`](http://getbootstrap.com/) via Bower installation
    -   [`html5shiv`](https://github.com/aFarkas/html5shiv) via CDN
    -   [`Respond`](https://github.com/scottjehl/Respond) via CDN
    -   [`gulpfile.js`](http://gulpjs.com/) with Gulp presets

## Requirements

-   [Node.js](https://nodejs.org)
-   [npm](https://www.npmjs.com)
-   [Gulp](http://gulpjs.com/)

## Optionals

-   [Bower](https://bower.io/)

## Getting Started

After [Node.js](https://nodejs.org/en/download/), [npm](https://docs.npmjs.com/getting-started/installing-node), [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) and [Bower](https://bower.io/#install-bower)(optional) installation, you can create a new project based on `pug-sass-boilerplate-starter-kit` by doing the following:

### Install From Source

First, clone the project:

```bash
$ git clone https://github.com/Errec/pug-sass-boilerplate-starter-kit.git <my-project-name>
```
or simply download from the GitHub repo

Initialize `npm` on `<my-project-name>` directory

```bash
$ cd <my-project-name>
$ npm install
```

Install `Gulp` locally

```bash
$ sudo npm install gulp --save-dev
```

Install `Bower` local dependencies used for the site

```bash
$ sudo bower install jquery bootstrap font-awesome --save-dev
```

Finally, install `Gulp` required dependencies and developer dependencies

```bash
$ npm i -D autoprefixer  gulp-babel browser-sync gulp-changed del gulp-eslint gulp-include gulp-imagemin gulp-pug minimist gulp-cssnano gulp-postcss gulp-rename gulp-sass run-sequence gulp-uglify gulp-plumber gulp-util graceful-fs minimatch
```


### Running Your Local Server With Gulp

After the installation of all requirements and its dependencies, your local web development environment is ready to run. Setup your initial files with `gulp build`. This command is only necessary the first time the project is set or if the build folder is deleted.

```bash
$ gulp build
```

Now run your local server using the `server` task

```bash
$ gulp server
```

This task will open the browser window usually with the URL <http://localhost:3000/>. Any saved changes made to the project files, will reload automatically the browser.


### The build/ Contents

    .
    ├── build/
        ├── fonts/                    # Contains the font files used in the project
        ├── images/                    # Contains the compressed and optimized image files
        ├── styles/                    # Contains the concatenated/minified .css files and .map files
        ├── scripts/                     # Contains the concatenated/minified/uglyfied .js files and normal js files
        ├── vendors/             # Store third party libraries (jQuery, bootstrap, font-awesome)
        └── index.html              # Minified html index file

### Deployment

All you need to do is copy the content of the build folder into your hosting account and you are set.
