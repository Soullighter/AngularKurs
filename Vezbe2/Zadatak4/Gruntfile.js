module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      less: {
        files: ['style/less/**/*.less'],
        tasks: ['less:development']
      }
    },
    less: {
      development: {
        options: {
          sourceMap: true,
          sourceMapRootpath: '/',
          sourceMapBasepath: 'app'
        },
        files: {
          'style/css/style.css': 'style/less/style.less',
        }
      }
    },
	   uglify: {
	    options: {
	      mangle: false
	    },
	    my_target: {
	      files: {
	        'dest/app.min.js': ['src/app.js']
	      }
	    }
	  }
  });

  grunt.registerTask('dev', [
    'less:development',
    'uglify',
    'watch'
  ]);

};