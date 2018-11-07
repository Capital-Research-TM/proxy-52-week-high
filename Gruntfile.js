module.exports = function(grunt) {
  grunt.intiConfig({
    aws: grunt.file.readJSON('aws-keys.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AwsAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>',
        region: 'us-west-1',
        bucket: 'robinhood-proxy-purchase',
      },
      files: {
        expand: true,
        cwd: '../52-week-high/client/dist/src',
        src: 'bundle.js',
        dest: '/bundle'
      }
    },
    watch: {
     js: {
       files: 'bundle.js',
       tasks: ['aws_s3'],
       options: {
         cwd: {
           files: '../service-purchase/client/dist',
         },
       },
     },
   },
  })
  grunt.loadNpmTasks('grunt-aws-s3');
 grunt.registerTask('default', ['aws_s3']);
}
