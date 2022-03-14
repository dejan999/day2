var app = angular
    .module('myModule', [])
    
    .controller('myController', function ($scope) {



        var technologies = [
            { name: 'SQL Server', like: 0, dislike: 0 },
            { name: 'C#', like: 0, dislike: 0 },
            { name: 'AngularJS', like: 0, dislike: 0 },
            { name: 'ASP.NET', like: 0, dislike: 0 }
        ];



        $scope.technologies = technologies;

        $scope.incrementLike = function (technology) {
            technology.like++;
        }

        $scope.incrementDislike = function (technology) {
            technology.dislike++;
        }



        var employees = [
            { name: "Ben", dateOfBirth: new Date("November 23,1980"), gender: 1, salary: 5900.56 },
            { name: "Sara", dateOfBirth: new Date("May 05,1970"), gender: 3, salary: 9800 },
            { name: "Mark", dateOfBirth: new Date("December 15,1974"), gender: 1, salary: 4900.9 },
            { name: "Pam", dateOfBirth: new Date("November 21,1995"), gender: 2, salary: 9900.45 },
            { name: "Todd", dateOfBirth: new Date("December 23,1986"), gender: 1, salary: 4800 }
        ]
        $scope.employees = employees;
        $scope.sortColumn = "name";

        $scope.reverseSort = false;

        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column) {
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
            }
            return '';
        }


        $scope.search = function (item) {
            if ($scope.searchText == undefined) {
                return true;
            }
            else {
                if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 |
                    item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        }

        
    });

    app.controller('myCtrl', function($scope, $http,$log) {

        var successCallBack=function (response) {
            $scope.albums=response.data
        }

        var errorCallBack=function (response) {
            $scope.error=response.data;
        }

        $http({
           method:"GET",
           url: "https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default" 
        })
        
        .then(successCallBack,errorCallBack);
      });