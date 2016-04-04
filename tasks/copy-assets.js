import gulp from 'gulp';
import seq from 'run-sequence';

gulp.task('assets:favicon', () =>
  gulp.src('assets/favicon.ico')
    .pipe(gulp.dest('lib/'))
);

gulp.task('assets:copy', () =>
  gulp.src('assets/**/*')
    .pipe(gulp.dest('lib/assets/'))
);

export default function copyAssetsTask() {
  return new Promise((resolve, reject) =>
    seq([ 'assets:copy', 'assets:favicon', 'assets:emoji' ], err =>
      err ? reject(err) : resolve()
    )
  );
}
