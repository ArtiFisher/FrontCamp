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
        src: ['dist/*.js'],
        // dest: 'dist/<%= pkg.name %>.js'
        dest: 'dist/fullScript.js'
      }
    },
    uglify: {
      polyfills: {
        files: {
          'dist/polyfills.min.js': ['resources/promise.js', 'resources/fetch.js']
        }
      }
    },
    clean: {
      build: ['dist']
    }
  });
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['clean', 'babel', 'uglify', 'concat']);

};