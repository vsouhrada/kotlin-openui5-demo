var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins(
  {
    pattern: ['gulp-*', 'gulp.*', 'del', 'run-sequence']
  }
);
// TODO - run-sequence can be removed with gulp 4.0 => there will be standard solution for this

var config = {
  bowerComponents: 'bower_components',
  webapp: "www",
  dist: "dist",
  temp: "temp",
  ui5ResourceFolder: "lib/sap"
};

gulp.task('ui5preload', function(){
  return gulp.src([
      config.temp + '/**/**.+(js|xml)',
      '!src/ui/thirdparty/**' //exclude files that don't belong in preload (optional)
    ])
    .pipe(plugins.ui5Preload({base:config.temp, namespace:'myCompany.myApp'}))
    .pipe(gulp.dest(config.temp));
});

gulp.task('clean', function() {
  return plugins.del([config.temp, config.webapp + '/' + config.ui5ResourceFolder]);
});

gulp.task('copy', function() {
  return gulp.src(config.temp + '/**').pipe(plugins.copy(config.dist, {prefix: 1}));
});

gulp.task('copyToTemp', function() {
  return gulp.src(config.webapp + '/**').pipe(plugins.copy(config.temp, {prefix: 1}));
});

gulp.task('copyResToDev', function() {
  return gulp.src(config.temp + '/**').pipe(plugins.copy(config.webapp, {prefix: 1}));
});

gulp.task('copyUI5res', function() {
  var ui5FilesToCopy = [
    config.bowerComponents + '/openui5-sap.m/resources/**',
    config.bowerComponents + '/openui5-sap.ui.commons/resources/**',
    config.bowerComponents + '/openui5-sap.ui.core/resources/**',
    config.bowerComponents + '/openui5-sap.ui.layout/resources/**',
    config.bowerComponents + '/openui5-sap.ui.unified/resources/**',
    config.bowerComponents + '/openui5-themelib_sap_bluecrystal/resources/**',
    config.bowerComponents + '/openui5-sap.tnt/resources/**',
    config.bowerComponents + '/openui5-sap.uxap/resources/**',
  ];

  return gulp.src(ui5FilesToCopy).pipe(plugins.copy(config.temp + '/' + config.ui5ResourceFolder, {prefix: 3}));
});

gulp.task('default', function(cb) {
  plugins.runSequence('clean', ['copyUI5res', 'lint'], 'copyToTemp', 'ui5preload', 'copy', cb);
});

gulp.task('dev', function(cb) {
  plugins.runSequence('clean' ,'copyUI5res', 'copyResToDev', 'open', 'watch', cb);
});

gulp.task('alpha', function(cb) {
  plugins.runSequence('clean' ,'copyUI5res', 'copyResToDev', 'open', cb);
});

gulp.task('lint', function () {
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  return gulp.src([config.webapp + '/**/*.js', '!node_modules/**', '!' + config.webapp +'/resources/**'])
    // eslint() attaches the lint output to the "eslint"] property
    // of the file object so it can be used by other modules.
    .pipe(plugins.eslint('eslintrc.json'))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(plugins.eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    //.pipe(plugins.eslint.failAfterError())
    // TODO depends if we want fail after error

    .pipe(plugins.notify({ message: 'Lint task complete' }));
});

gulp.task('watch', function() {
  // Watch .js files
  gulp.watch(config.webapp + '/**/*.js', ['lint']);

});

gulp.task('open', function() {
  gulp.src(config.webapp)
    .pipe(plugins.serverLivereload({
      defaultFile: 'test.html',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});