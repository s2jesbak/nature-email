"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("concat:a", function () {
	return gulp.src([	
						'./modules/header.html',
						'./modules/banner-top.html',
						'./modules/hello-nature-readers.html',
						'./modules/hero-image.html',
						
						'./modules/banner-news.html',
						
						'./modules/article-no-image.html',
						'./modules/horizontal-line.html',
						
						'./modules/article-no-image.html',
						'./modules/horizontal-line.html',

						'./modules/article-no-image.html',
						'./modules/horizontal-line.html',

						'./modules/article-no-image.html',

						'./modules/banner-opinions-and-analysis.html',

						'./modules/article-no-image.html',
						'./modules/horizontal-line.html',

						'./modules/article-no-image.html',

						'./modules/thought-for-the-day.html',

						'./modules/footer.html',
						])
		.pipe(concat("index.html"))
		.pipe(gulp.dest("./"));
});