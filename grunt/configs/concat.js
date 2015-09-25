module.exports = function (grunt) {
    return {
      skittles: {
          src: [
              'source/js/app.module.js',
              'source/js/color-chip.directive.js',
              'source/js/header.directive.js',
              'source/js/notify.directive.js',
              'source/js/colorProcessor.srvc.js',
              'source/js/palette.ctrl.js'
          ],
          dest: 'preview/js/skittles.js'
      }
    };
};
