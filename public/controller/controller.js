var app = angular.module('myApp', []);
var quesType = ['yesNo','choices','poster'];
var selectedOption;
var option1;
var option2;
var option3;
var option4;
var arr = [];
var correctResult = 'no';
var result = 'yes';
var randomNumber;

//---------------------------Controller for Index Page------------------------//
app.controller('TransferPage', function ($rootScope,$scope, $http, $window) {
    randomNumber = Math.floor((Math.random() * 3)+1);
    //-----------------------HTTP call to get the random number-----------------------------//
    $http({
        method: 'GET',
        url: '/questionGenerator',
        params:{data : quesType[randomNumber-1]}
    }).then(function successCallback(response) {
        switch (randomNumber) {
            case 1:
                /*Showing the First Type of Question i.e Yes or No Type of Question*/
                $scope.question1 = false;
                $scope.question1 = response.data[0].toString().replace("[","").replace("]","");
                correctResult = response.data[1].toString();
                break;
            case 2:
                $scope.question2= false;
                while(arr.length < 4){
                    randomnumber = Math.ceil(Math.random()*4);
                    if(arr.indexOf(randomnumber) > -1) continue;
                    arr[arr.length] = randomnumber;
                }
                option1 = arr[0];
                option2 = arr[1];
                option3 = arr[2];
                option4 = arr[3];

                $scope.question2 = response.data[0].toString().replace("[","").replace("]","");
                $scope.date1 = response.data[option1].toString().replace("[","").replace("]","");
                $scope.date2 = response.data[option2].toString().replace("[","").replace("]","");
                $scope.date3= response.data[option3].toString().replace("[","").replace("]","");
                $scope.date4 = response.data[option4].toString().replace("[","").replace("]","");
                correctResult = response.data[1].toString();
                break;
            case 3:
                $scope.question3 = false;
                //-------------------------creating jumbeled option so no two same type question have index of answer--------//
                while(arr.length < 4){
                    var randomnumber = Math.ceil(Math.random()*4);
                    if(arr.indexOf(randomnumber) > -1) continue;
                    arr[arr.length] = randomnumber;
                }
                option1 = arr[0];
                option2 = arr[1];
                option3 = arr[2];
                option4 = arr[3];


                //------------------Inflating the HTML using the dynamic random values from JSON data -----------------------//
                $scope.question3 = response.data[0].toString().replace("[","").replace("]","");
                $scope.poster = 'https://image.tmdb.org/t/p/w500'+response.data[5].toString();
                $scope.name1 = response.data[option1].toString().replace("[","").replace("]","");
                $scope.name2 = response.data[option2].toString().replace("[","").replace("]","");
                $scope.name3= response.data[option3].toString().replace("[","").replace("]","");
                $scope.name4 = response.data[option4].toString().replace("[","").replace("]","");
                correctResult = response.data[1].toString();
                break;
            default:
                $scope.question1 = false;
                $scope.question1 = response.data[0].toString().replace("[","").replace("]","");
                correctResult = response.data[1].toString();

        }
        },
        function errorCallback(response) {
            console.log("error");
            console.log(response);
        });
    //-----------------------------------------gettinh the value of the radio button clicked---------------------------//
    $scope.getRadioButtonValue = function() {
        var typeChecked = document.getElementsByName("optradio1");
        if(typeChecked[0].checked){
            result = 'yes';
            alert(result);
        }
        else if (typeChecked[1].checked){
            result = 'no';
            alert(result);
        }
    }
    $scope.getRadioButtonValue1 = function () {
        var typeChecked = document.getElementsByName("optradio2");
        if(typeChecked[0].checked){
            result = document.getElementsByName("optradio2")[0].value;
            alert(result);
        }
        else if (typeChecked[1].checked){
            result = document.getElementsByName("optradio2")[1].value;
            alert(result);
        }
        if(typeChecked[2].checked){
            result = document.getElementsByName("optradio2")[2].value;
            alert(result);
        }
        else if (typeChecked[3].checked){
            result = document.getElementsByName("optradio2")[3].value;
            alert(result);
        }
    }
    $scope.getRadioButtonValue2 = function () {
        var typeChecked = document.getElementsByName("optradio3");
        if(typeChecked[0].checked){
            result = document.getElementsByName("optradio3")[0].value;
            alert(result);
        }
        else if (typeChecked[1].checked){
            result = document.getElementsByName("optradio3")[1].value;
            alert(result);
        }
        if(typeChecked[2].checked){
            result = document.getElementsByName("optradio3")[2].value;
            alert(result);
        }
        else if (typeChecked[3].checked){
            result = document.getElementsByName("optradio3")[3].value;
            alert(result);
        }
    }

    //-------------------------Method call after submit button is called--------------------------------//
    $scope.submitButton = function () {
        alert("in submit"+result);



        $http({
            method: 'GET',
            url: '/result'
        }).then(function successCallback(data,json) {
            $window.location.href = '../../views/result.html';
                if(result!=null && result!="" ){
                    if(correctResult==result){
                        $scope.result = "Hurray! Correct Answer";
                        alert("correct");
                    }else{
                        $scope.result="Opps! Wrong Answer";
                        alert("wrong");}
                }
            },
            function errorCallback(response) {
                console.log("error");
                console.log(response);
            });
    }

    //-------------------controlling the onClick of Replay Button---------------------------//
    $scope.taketohome = function () {

        $http({
            method: 'GET',
            url: '/redirecthome',
        }).then(function successCallback(response) {
                $window.location.href="../../views/index.html";
            },
            function errorCallback(response) {
                console.log("error");
                console.log(response);
            });
    }
});

