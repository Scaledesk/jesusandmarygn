/*var app = angular.module('myApp', ['ngRoute']);*/

app.controller('HomeController', function($scope){
    
 $scope.myInterval =2000;
  $scope.noWrapSlides =false;
 /* $scope.transition=false;*/
/*  $scope.noWrapSlides = false;*/
 /* $scope.active = "Index of first slide";*/	
  var currIndex = 0 ;
var slides = $scope.slides = [ 
{image:'assets/images/slide/slide-1.jpg',id:'0'},
{image:'assets/images/slide/slide-2.jpg',id:'1'},
{image:'assets/images/slide/slide-3.jpg',id:'2'},
{image:'assets/images/slide/slide-4.jpg',id:'3'},
{image:'assets/images/slide/slide-5.jpg',id:'4'},
{image:'assets/images/slide/slide-6.jpg',id:'5'},
{image:'assets/images/slide/slide-7.jpg',id:'6'},
{image:'assets/images/slide/slide-8.jpg',id:'7'},
{image:'assets/images/slide/slide-9.jpg',id:'8'},
{image:'assets/images/slide/slide-10.jpg',id:'9'}];
});
