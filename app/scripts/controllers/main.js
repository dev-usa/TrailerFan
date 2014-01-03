'use strict';

var myApp = angular.module("trailerFanApp", ['ui.bootstrap']);

myApp.controller("PlayerCtrl",
    function PlayerCtrl($scope, $log, $sce, $modal, $timeout, trailers) {

        $scope.videos = trailers;

        $scope.playVideo = function(video) {

            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    selectedVideo: function() {
                        return video;
                    }
                }
            });

            var myPlayer;
            modalInstance.opened.then(function() {
                $timeout(function() {
                    console.log('timeout complete');
                    myPlayer = videojs('tfVideo', {
                        "techOrder": ["youtube"],
                        "src": "http://www.youtube.com/watch?v=" + video.ytId,
                        "quality": "1080p"
                    }).ready(function() {
                        this.play();
                        // Cue a video using ended event
                        // this.one('ended', function() {
                        //   console.log('next video playing...');
                        //   this.src('http://www.youtube.com/watch?v=jofNR_WkoCE');
                        // });
                    });
                }, 100);
            });

            modalInstance.result.then(function() {}, function() {
                // console.log('Modal dismissed at: ' + new Date());
                console.log("Disposing Video...");
                myPlayer.dispose();
            });

        };
    });

var ModalInstanceCtrl = function($scope, $modalInstance, selectedVideo) {

    $scope.selectedVideo = selectedVideo;

    $scope.dismissModal = function() {
        //console.log('dismissModal()... dismissing');
        $modalInstance.dismiss('dismissModal');
        //console.log('dismissModal()... done');
    };
};

myApp.directive("displayOnHover", function() {
    return function(scope, element, attrs) {
        element.parent().bind('mouseenter', function() {
            element.show();
        });
        element.parent().bind('mouseleave', function() {
            element.hide();
        });
    }
});

myApp.run(function() {
    // console.log("loading sublime ... ");
    // sublime.load();  
    // sublime.ready(function (){
    //   console.log("done loading sublime ... ");
    // });
});

myApp.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                elem.on('click', function(e) {
                    e.preventDefault();
                    if (attrs.ngClick) {
                        scope.$eval(attrs.ngClick);
                    }
                });
            }
        }
    };
});

myApp.factory('trailers', function() {
    var trailers = [{
        ytId: "6kw1UVovByw",
        imgSrc: "http://img.youtube.com/vi/6kw1UVovByw/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 1",
        lang: "English",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "uWgDVz4NEO4",
        imgSrc: "http://img.youtube.com/vi/uWgDVz4NEO4/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 2",
        lang: "Hindi",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "ddAAjFJBeZM",
        imgSrc: "http://img.youtube.com/vi/ddAAjFJBeZM/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 3",
        lang: "Telugu",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "mMMPdtN_qaQ",
        imgSrc: "http://img.youtube.com/vi/mMMPdtN_qaQ/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 4",
        lang: "Tamil",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "6kw1UVovByw",
        imgSrc: "http://img.youtube.com/vi/6kw1UVovByw/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 1",
        lang: "English",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "uWgDVz4NEO4",
        imgSrc: "http://img.youtube.com/vi/uWgDVz4NEO4/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 2",
        lang: "Hindi",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "ddAAjFJBeZM",
        imgSrc: "http://img.youtube.com/vi/ddAAjFJBeZM/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 3",
        lang: "Telugu",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "mMMPdtN_qaQ",
        imgSrc: "http://img.youtube.com/vi/mMMPdtN_qaQ/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 4",
        lang: "Tamil",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "6kw1UVovByw",
        imgSrc: "http://img.youtube.com/vi/6kw1UVovByw/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 1",
        lang: "English",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "uWgDVz4NEO4",
        imgSrc: "http://img.youtube.com/vi/uWgDVz4NEO4/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 2",
        lang: "Hindi",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "ddAAjFJBeZM",
        imgSrc: "http://img.youtube.com/vi/ddAAjFJBeZM/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 3",
        lang: "Telugu",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "mMMPdtN_qaQ",
        imgSrc: "http://img.youtube.com/vi/mMMPdtN_qaQ/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 4",
        lang: "Tamil",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "6kw1UVovByw",
        imgSrc: "http://img.youtube.com/vi/6kw1UVovByw/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 1",
        lang: "English",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "uWgDVz4NEO4",
        imgSrc: "http://img.youtube.com/vi/uWgDVz4NEO4/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 2",
        lang: "Hindi",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "ddAAjFJBeZM",
        imgSrc: "http://img.youtube.com/vi/ddAAjFJBeZM/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 3",
        lang: "Telugu",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "mMMPdtN_qaQ",
        imgSrc: "http://img.youtube.com/vi/mMMPdtN_qaQ/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 4",
        lang: "Tamil",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "6kw1UVovByw",
        imgSrc: "http://img.youtube.com/vi/6kw1UVovByw/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 1",
        lang: "English",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "uWgDVz4NEO4",
        imgSrc: "http://img.youtube.com/vi/uWgDVz4NEO4/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 2",
        lang: "Hindi",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "ddAAjFJBeZM",
        imgSrc: "http://img.youtube.com/vi/ddAAjFJBeZM/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 3",
        lang: "Telugu",
        relDate: "2013/17/11",
        rating: "3.5"
    }, {
        ytId: "mMMPdtN_qaQ",
        imgSrc: "http://img.youtube.com/vi/mMMPdtN_qaQ/0.jpg",
        width: "320",
        height: "300",
        title: "My Custom Title 4",
        lang: "Tamil",
        relDate: "2013/17/11",
        rating: "3.5"
    }];
    return trailers;
});
