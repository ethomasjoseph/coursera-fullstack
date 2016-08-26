# The conFusion Project
_(adapted from the Coursera's Fullstack specialization course at - https://www.coursera.org/specializations/full-stack)_

## How to use
Before building and using this application, there are a few standard pre-requisites for a NodeJS based web application.

### Pre-Requisite
1. Install NodeJS (with NPM) from https://nodejs.org/
2. Install Grunt

   `npm install -g grunt-cli`

3. Install Bower

   `npm install -g bower`
   

### Building

1. `npm install`
2. `bower install`
3. `grunt`

This will result in a distribution folder `dist`, which will contain the distributable project files.

*Note*: To auto reload the development changes, issue the command `grunt serve`.

## Development Notes

* At times the fonts may not display properly, and instead show as squares (especially the fontawesome fonts). This is because we are using the css directly, which makes the some font declaration away from the beginning of the css files. Ideally the css should be broken into smaller units (or else as `less` or `sass` files compiled into css), and combined such that font declarations appear at the beginning.