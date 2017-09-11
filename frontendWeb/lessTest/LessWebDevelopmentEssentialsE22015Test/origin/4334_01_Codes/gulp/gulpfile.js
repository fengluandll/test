var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var LessPluginCleanCSS = require("less-plugin-clean-css"),
    cleancss = new LessPluginCleanCSS({advanced: true});

var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

gulp.task('default', function () {
  gulp.src('./less/project.less')
    .pipe(sourcemaps.init())
    .pipe(less({
    plugins: [autoprefix, cleancss]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});
