'use strict';

var myApp = angular.module("trailerFanApp", []);

myApp.controller("PlayerCtrl",
  function PlayerCtrl($scope,$log,$sce,trailers)
  {
     $scope.videos = trailers;

     $scope.selectedVideo = {
        ytId: "",
        imgSrc:"",
        width:"320",
        height:"300",
        title:"",
        lang: "",
        relDate: "",
        rating: ""
      };

     $scope.showModal = false;

     $scope.playVideo = function(video){
        //console.log("the glorious string==> " + JSON.stringify(video));

        $scope.showModal = true;
        $scope.selectedVideo = video;

        //$scope.initPlayer = false;
     };
    
    $scope.closeVideo = function(video){
        $scope.showModal = false;
     };

  }
);

myApp.directive("trailerList", function(){
  var htmlTemplate = "<div class='col-md-4 col-sm-6 col-xs-12'>" +
    " <div class='row top-buffer'>" +
    " </div>" +
    "<div style='position:relative;'>" +
    "  <div class='fader'>" +
    "    <a href='#' ng-click='playVideo(video)'>" +
    "      <img width='{{video.width}}' height='{{video.height}}' alt='{{video.title}}' style='position: relative; z-index: 1;' src='{{video.imgSrc}}'/>" +
    "      <img src='images/play.png' style='position: absolute;left:40%; top:40%;z-index: 10;'/>" +
    "    </a>" +
    "  </div>" +
    "</div>";

  return {
    restrct: 'AE',
    scope: {
      video : "=",
      playVideo : "&"
    },
    template: htmlTemplate
  }
});

myApp.directive("displayOnHover", function(){
  return function(scope,element,attrs){
    element.parent().bind('mouseenter',function(){
      element.show();
    });
    element.parent().bind('mouseleave',function(){
      element.hide();
    });
  }
});

myApp.directive("userDataRefresh", function(){
  return function (scope, element, attrs){
    scope.$watch("showModal",  function(newValue, oldValue){
      console.log("userDataRefresh ==> showModal ==> OLD ==> " + oldValue);
      console.log("userDataRefresh ==> showModal ==> NEW ==> " + newValue);

      if(newValue == true)
      {
        //console.log("element ==> " + element);
        $("#tfVideo").on("show.bs.modal", function() {
          var height = $(window).height() - 200;
          $(this).find(".modal-body").css("max-height", height);
        });

        $('#tfModal').on('shown.bs.modal', function (e) {

          sublime.ready(function(){
            console.log("sublime is ready... ");
            console.log('preparing...');
            sublime.prepare('tfVideo', function(player) {
              console.log("playing video ... ");
              player.play();
            });
          });
        })

        $('#tfModal').on('hidden.bs.modal', function (e) {
          console.log('un preparing...');
          sublime.unprepare('tfVideo');
        })

        $('#tfModal').modal({
          backdrop:"static",
          keyboard: false
        });
      }
    }, true);
  }
});


myApp.run(function(){
  console.log("loading sublime ... ");
  sublime.load();  
  sublime.ready(function (){
    console.log("done loading sublime ... ");
  });
});

myApp.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
                elem.on('click', function(e){
                    e.preventDefault();
                    if(attrs.ngClick){
                        scope.$eval(attrs.ngClick);
                    }
                });
            }
        }
   };
});

myApp.factory('trailers',function(){
  var trailers = [
      {
        ytId: "6kw1UVovByw",
        imgSrc:"http://img.youtube.com/vi/6kw1UVovByw/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 1",
        lang: "English",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "uWgDVz4NEO4",
        imgSrc:"http://img.youtube.com/vi/uWgDVz4NEO4/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 2",
        lang: "Hindi",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "ddAAjFJBeZM",
        imgSrc:"http://img.youtube.com/vi/ddAAjFJBeZM/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 3",
        lang: "Telugu",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "mMMPdtN_qaQ",
        imgSrc:"http://img.youtube.com/vi/mMMPdtN_qaQ/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 4",
        lang: "Tamil",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "6kw1UVovByw",
        imgSrc:"http://img.youtube.com/vi/6kw1UVovByw/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 1",
        lang: "English",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "uWgDVz4NEO4",
        imgSrc:"http://img.youtube.com/vi/uWgDVz4NEO4/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 2",
        lang: "Hindi",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "ddAAjFJBeZM",
        imgSrc:"http://img.youtube.com/vi/ddAAjFJBeZM/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 3",
        lang: "Telugu",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "mMMPdtN_qaQ",
        imgSrc:"http://img.youtube.com/vi/mMMPdtN_qaQ/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 4",
        lang: "Tamil",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "6kw1UVovByw",
        imgSrc:"http://img.youtube.com/vi/6kw1UVovByw/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 1",
        lang: "English",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "uWgDVz4NEO4",
        imgSrc:"http://img.youtube.com/vi/uWgDVz4NEO4/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 2",
        lang: "Hindi",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "ddAAjFJBeZM",
        imgSrc:"http://img.youtube.com/vi/ddAAjFJBeZM/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 3",
        lang: "Telugu",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "mMMPdtN_qaQ",
        imgSrc:"http://img.youtube.com/vi/mMMPdtN_qaQ/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 4",
        lang: "Tamil",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "6kw1UVovByw",
        imgSrc:"http://img.youtube.com/vi/6kw1UVovByw/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 1",
        lang: "English",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "uWgDVz4NEO4",
        imgSrc:"http://img.youtube.com/vi/uWgDVz4NEO4/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 2",
        lang: "Hindi",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "ddAAjFJBeZM",
        imgSrc:"http://img.youtube.com/vi/ddAAjFJBeZM/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 3",
        lang: "Telugu",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "mMMPdtN_qaQ",
        imgSrc:"http://img.youtube.com/vi/mMMPdtN_qaQ/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 4",
        lang: "Tamil",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "6kw1UVovByw",
        imgSrc:"http://img.youtube.com/vi/6kw1UVovByw/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 1",
        lang: "English",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "uWgDVz4NEO4",
        imgSrc:"http://img.youtube.com/vi/uWgDVz4NEO4/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 2",
        lang: "Hindi",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "ddAAjFJBeZM",
        imgSrc:"http://img.youtube.com/vi/ddAAjFJBeZM/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 3",
        lang: "Telugu",
        relDate: "2013/17/11",
        rating: "3.5"
      },
      {
        ytId: "mMMPdtN_qaQ",
        imgSrc:"http://img.youtube.com/vi/mMMPdtN_qaQ/0.jpg",
        width:"320",
        height:"300",
        title:"My Custom Title 4",
        lang: "Tamil",
        relDate: "2013/17/11",
        rating: "3.5"
      }
     ];
  return trailers;
});
