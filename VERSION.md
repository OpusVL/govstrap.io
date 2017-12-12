## 2.0.0

- Updated the Bootstrap versin to version 4 - beta2
- refactored the Pug templates 
  - using the new strucutre
  - now it is using the default layout.pug file and each page is a `block content`
  - inlcuded the default JS files in the Bundle.js
- using display flex on the whole body to ensure the footer is always at the bottom of the page even if the page has no real content
- updated the style to be more compliant with the [Gov.uk](https://gov.uk) design paterns

## 1.0.1

### Pug templates

Pug templates are now being used with the limitless possibility to create 'modules' and include them into the different pages.

### SCSS files

The SCSS has been broken up into smaller pieces to allow for easier debugging, modification and any other changes needed to the styling

### Images

The images are now compressed and optimized when building the project

### JS files

The bundle that gets created when building includes now the jQuery and the Bootstrap since these are needed by the theme and provide functionality

### Live Reload

Now it uses the live reload properly with gulp and allows for easier visualization of any changes done to the front end CSS / Pug templates / JS files
