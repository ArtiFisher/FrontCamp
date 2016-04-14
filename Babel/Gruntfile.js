module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
        options: {
            presets: ['es2015']
        },
        dist: {
            files: {
                'dist/transpiled.js': 'src/topStories.js'
            }
        }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['node_modules/fetch-polyfill/fetch.js', 'dist/transpiled.js'],
        // dest: 'dist/<%= pkg.name %>.js'
        dest: 'dist/fullScript.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['babel', 'concat']);

};