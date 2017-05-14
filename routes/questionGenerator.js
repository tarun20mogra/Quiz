//------------declarations----------------------------------//
var express = require('express');
var router = express.Router();
var obj ;
var fs = require('fs');
var jsonObj;
var randomOption;
var que;
var ans;
var randomNumber;
var actorName = 'Brad Pitt';
var options = [];
var option1;
var option2;
var option3;
var questionOption = [];

//-------------Reading the file to get the JSON data--------------//
obj = fs.readFileSync('./themoviedb_data.json');
jsonObj = JSON.parse(obj);


//---------------Generating the questions-----------------------//
router.get('/', function(req, res, next) {

    switch (req.param("data")) {
        case "yesNo" :
            randomNumber = Math.floor((Math.random() * 20) + 1);
            que = ["Is " + jsonObj.results[randomNumber].title.toUpperCase() + " a " + actorName + " Movie ?"];
            ans = 'yes';
            var data=[que,ans];
            console.log(data);
            res.send(data);
            break;
        case "choices" :
            randomNumber = Math.floor((Math.random() * 20) + 1);
            que = [" What is the release date of " + jsonObj.results[randomNumber].title + "?"];
            ans = jsonObj.results[randomNumber].release_date;
            //-------------------------generating three number other than selected random JSON data index for options--------------//
            while(options.length < 3){
                randomOption = Math.ceil(Math.random()*20)
                if(randomOption == randomNumber)
                    continue;
                else if(options.indexOf(randomOption) > -1 )
                    continue;

                options[options.length] = randomOption;
            }
            option1 = options[0];
            option2 = options[1];
            option3 = options[2];
            //---------------------------------------assigning the options-------------------------------------------------//
            questionOption = [jsonObj.results[option1].release_date,jsonObj.results[option2].release_date,jsonObj.results[option3].release_date];
            var data=[que,ans, questionOption[0],questionOption[1],questionOption[2]];
            console.log(data);
            res.send(data);
            break;
        case "poster" :

            randomNumber = Math.floor((Math.random() * 20) + 1);
            que = ["What is movie name of the following poster ?"];
            ans = jsonObj.results[randomNumber].title;
            //-------------------------generating three number other than selected random JSON data index for options--------------//
            while(options.length < 3){
                randomOption = Math.ceil(Math.random()*20)
                if(randomOption == randomNumber)
                    continue;
                else if(options.indexOf(randomOption) > -1 )
                    continue;

                options[options.length] = randomOption;
            }

            option1 = options[0];
            option2 = options[1];
            option3 = options[2];
            //---------------------------------------assigning the options-------------------------------------------------//
            questionOption = [jsonObj.results[option1].title,jsonObj.results[option2].title, jsonObj.results[option3].title];

            var data=[que,ans, questionOption[0],questionOption[1],questionOption[2],jsonObj.results[randomNumber].backdrop_path];
            console.log(data);
            res.send(data);

            break;
   }
});
module.exports = router;
