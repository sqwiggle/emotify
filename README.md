# jquery.emotify.js :)

Jquery plugin to parse emoticons.

## Installation

Just use the minified file in the build dir.

## Usage

Include the plugin in your html page then use

    $(".div").emotify();

## Tasks

1. `grunt jasmine` - Specs
2. `grunt watch` - Spec Runner
4. `grunt uglify` - Concat all JS files
6. `grunt` - Run all tasks

## Development

Make sure you've got node.js and npm.

    sudo npm install -g grunt-cli
    
In the project dir (this looks in the package.json file and installs the dev dependencies.)

    npm install
    
Compile and run the specs with:    
    
    grunt
