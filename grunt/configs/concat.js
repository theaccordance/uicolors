module.exports = function (grunt) {
    return {
      skittles: {
          src: [
              'source/js/app.module.js',
              'source/js/color-chip.directive.js',
              'source/js/header.directive.js',
              'source/js/paletteManager.srvc.js',
              'source/js/colorProcessor.srvc.js',
              'source/js/main.ctrl.js'
          ],
          dest: 'preview/js/skittles.js'
      }
    };
};
