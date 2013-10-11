# Emotify :)

Jquery plugin to parse emoticons.

## Installation

Just use the minified file in the build dir.

## Usage

Include the plugin in your html page then use

    $(".div").emotify();

## Tasks

1. `grunt jasmine` - run specs
2. `grunt watch` - auto run specs
3. `grunt uglify` - minify the js files
4. `grunt` - run all tasks

## Development

Make sure you've got node.js and npm.

    sudo npm install -g grunt-cli
    
In the project dir (this looks in the package.json file and installs the dev dependencies.)

    npm install
    
Compile and run the specs with:    
    
    grunt
