app.directive('flashToaster', ['$timeout', function ($timeout) {
    return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/notify.html',
    scope: {},
    link: function (scope, element) {
        var boxHeight = 160,
        height = (boxHeight * 60) / window.innerHeight,
        yCenter = (60 / 2) - (height / 2),
        rectStartPos = {
            y: yCenter * 0.75,
            height: height,
            opacity: 0
        };

        scope.viewBox = '0 0 80 60';

        scope.rect = rectStartPos;

        scope.$on('notify:show', function (event, data) {
          var toPath = 'M 40 -21.875 C 11.356078 -21.875 -11.875 1.3560784 -11.875 30 C -11.875 58.643922 11.356078 81.875 40 81.875 C 68.643922 81.875 91.875 58.643922 91.875 30 C 91.875 1.3560784 68.643922 -21.875 40 -21.875 Z',
              fromPath = 'M40,30 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 Z',
              toaster = Snap('#toaster > path');
              toaster.attr({fill: data.hex});
          element.addClass('show');

          toaster.animate({d: toPath}, 250, mina.elastic(), function () {
              var toast = Snap('#toast');
              toast.animate({
                  y: yCenter,
                  opacity: 1
              }, 250);
              $timeout(function () {
                  toast.animate(rectStartPos, 100, mina.backout(), function () {
                      toaster.animate({opacity: 0}, 250, mina.backout(), function () {
                          element.removeClass('show');
                          toaster.attr({d: fromPath, opacity: 1});
                      });
                  });
              }, 2000);
          });
        });
    }
    };
}]);
