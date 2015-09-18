module.exports = function (grunt) {
    return {
      skittles: {
          src: [
              'source/js/app.module.js',
              'source/js/palette.ctrl.js'
          ],
          dest: 'preview/js/skittles.js'
      }
    };
};
