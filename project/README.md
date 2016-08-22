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