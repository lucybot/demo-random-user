'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  //require('load-grunt-tasks')(grunt);
  grunt.task.loadNpmTasks('grunt-jslint');
  grunt.task.loadNpmTasks('grunt-jsonlint');
  console.log('loaded');

  // Project configuration.
  grunt.initConfig({
     jsonlint: {
       sample: {
         src: [ 'recipes/get_random_users.json' ]
       }
     },
     jslint: {
       sample: {
          src: ['actions/request/get_random_users.ejs.js'],
          options: {
            indent: 2,
            edition: 'latest', // specify an edition of jslint or use 'dir/mycustom-jslint.js' for own path
            junit: 'out/server-junit.xml', // write the output to a JUnit XML
            log: 'out/server-lint.log',
            jslintXml: 'out/server-jslint.xml',
            errorsOnly: true, // only display errors
            failOnError: false, // defaults to true
            checkstyle: 'out/server-checkstyle.xml' // write a checkstyle-XML
          }
       }
     }
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', 'jslint');
};
