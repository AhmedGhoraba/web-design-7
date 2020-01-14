var gulp = require("gulp")
var minify = require("gulp-clean-css")
var sass = require("gulp-sass")

gulp.task("clean",function(){
    return gulp.src("src/scss/style.css")
    .pipe(minify())
    .pipe(gulp.dest("dist/css"))
})

gulp.task("scss",function(){
    return gulp.src("src/scss/01.home/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
})

gulp.task("default",function(){
    gulp.watch('src/scss/01.home/*.scss',gulp.series("scss"))

})