/**
 * Created by skolapar on 7/21/2017.
 */
var scrollapp = angular.module("scrollapp",[]);
//Using AnchorScroll
scrollapp.controller("ItemController",
    function ($scope, $location, $anchorScroll) {
        $scope.terms = {
            "fruits":["Apple","Mango","orange",
                "litchi","pears"],
            "flowers":["Rose","lily","jasmin",
                "lotus","sunflower"],
            "vegetables":["Potato","tomato","ladyfinger",
                "couliflower","cabbage"],
            "games":["Cricket","football","tennis",
                "baseball","hockey"],
            "countries":["India","America","China",
                "united kingdom","germany"]
        };
        $scope.jumpToLocation = function(key){
            $location.hash(key);
            $anchorScroll();
        }
    });