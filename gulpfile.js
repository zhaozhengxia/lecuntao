var gulp = require("gulp");
gulp.task("watchall",async ()=>{
		gulp.watch("html/*.html",async ()=>{
			gulp.src("html/*.html")
		.pipe(gulp.dest("D:\\PHPstudy\\PHPTutorial\\WWW\\lecuntao\\html"));
	})
		gulp.watch("css/*.css",async ()=>{
			gulp.src("css/*.css")
		.pipe(gulp.dest("D:\\PHPstudy\\PHPTutorial\\WWW\\lecuntao\\css"));
	})
		gulp.watch("img/**/*",async ()=>{
			gulp.src("img/**/*")
		.pipe(gulp.dest("D:\\PHPstudy\\PHPTutorial\\WWW\\lecuntao\\img"));
	})
		gulp.watch("images/*.{jpg,png}",async ()=>{
			gulp.src("images/*.{jpg,png}")
		.pipe(gulp.dest("D:\\PHPstudy\\PHPTutorial\\WWW\\lecuntao\\images"));
	})
		gulp.watch("js/*.js",async ()=>{
			gulp.src("js/*.js")
		.pipe(gulp.dest("D:\\PHPstudy\\PHPTutorial\\WWW\\lecuntao\\js"));
	})
		gulp.watch("php/*.php",async ()=>{
			gulp.src("php/*.php")
		.pipe(gulp.dest("D:\\PHPstudy\\PHPTutorial\\WWW\\lecuntao\\php"));
	})

});