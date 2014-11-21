module.exports = function (grunt) {
  "use-strict"

  //required
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ";;",
        stripBanners: true,
        //banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
        sourceMap: true
      },
      dist: {
        src: ['js/**/*.js'],
        dest: 'build/build.js'
      }
    },

    uglify: {
      options: {
        mangle:true,
        preserveComments: 'some',
        //banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      brookes_app: {
        files: {
          'build/ugliness.min.js': ['js/*.js']
        }
      }
    }
  })

  //load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify')


  //required
  grunt.registerTask('build', ['uglify','concat'])
	
}