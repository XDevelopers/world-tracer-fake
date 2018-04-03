module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      copy: {
        main: {
            files: [
                    {
                        expand: true,
                        cwd: '/',               // 'Current Working Directory' / root to copy
                        src: 'package.json',    // copy all files and subfolders
                        dest: '\\\\192.168.227.68\\D$\\Util\\Fake-WorldTracer\\code\\test-deploy', // Destination folder
                    },
                    {
                        expand: true,
                        cwd: '/app.js',               // 'Current Working Directory' / root to copy
                        src: 'app.js',                // copy all files and subfolders
                        dest: '\\\\192.168.227.68\\D$\\Util\\Fake-WorldTracer\\code\\test-deploy', // Destination folder
                    },
                    {
                        expand: true,
                        cwd: 'results',       // 'Current Working Directory' / root to copy
                        src: '**',            // copy all files and subfolders
                        dest: '\\\\192.168.227.68\\D$\\Util\\Fake-WorldTracer\\code\\self-host\\results', // Destination folder
                    },
                ]                
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default');
  
  };