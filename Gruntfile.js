module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'src/*.js']
    },
    jasmine: {
      js: {
        src: 'src/jquery.emotify.js',
        options: {
          specs: 'spec/*_spec.js',
          helpers: ['spec/support/*.js'],
          vendor: ['spec/jquery.min.js']
        }
      }
    },
    uglify: {
      options: {
        mangle: false,
        compress: true
      },
      emotify: {
        files: {
          'build/jquery.emotify.min.js': [
            'src/jquery.emotify.js'
          ]
        }
      }
    },
    watch: {
      js: {
        files: ['src/**/*.js', 'spec/**/*.js'],
        tasks: ['jasmine', 'uglify']
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'jasmine']);

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
