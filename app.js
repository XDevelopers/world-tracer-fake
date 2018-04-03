/*
----------------------------------------------------------------------------------------------------------- 
-- App to simulate the request and response that WTR use to continue working without [FortiClient]
-----------------------------------------------------------------------------------------------------------
*/
var express = require('express');
var fs = require('fs');
var path = require("path");
// Define app
var app = express();

// Path to get files
var startPath = "./results";


//-----------------------------------------------------------------------------------------------------------
// POST UrlPostLogin
//-----------------------------------------------------------------------------------------------------------
app.post('/baggage/wtr/wtrtablet/v1.0/login/auth', function (req, res) {
    
    var content = "";
    findFile(startPath, /Authenticate/i, function(filename){
        //console.log('-- found: ', filename);
        content = readFile(filename);      
    });

    res.contentType('json');
    res.send(content);
});

//-----------------------------------------------------------------------------------------------------------
// POST "UrlPostDMRTransaction" value="{EnvironmentDomain}baggage/wtr/v4.0/config/mrecordslocal/8"
//-----------------------------------------------------------------------------------------------------------
app.post('/baggage/wtr/v4.0/config/mrecordslocal/8', function (req, res) {
    
    var content = "";
    findFile(startPath, /ReturnGetPermissionUser/i, function(filename){
        content = readFile(filename);        
    });

    res.contentType('json');
    res.send(content);
});

//-----------------------------------------------------------------------------------------------------------
// POST "UrlPostGetStationList" value="{EnvironmentDomain}baggage/wtr/v4.0/config/stations/8"
//-----------------------------------------------------------------------------------------------------------
app.post('/baggage/wtr/v4.0/config/stations/8', function (req, res) {
    
    var content = "";
    findFile(startPath, /Return-GetStationList/i, function(filename){
        content = readFile(filename);       
    });

    res.contentType('json');
    res.send(content);
});

//-----------------------------------------------------------------------------------------------------------
// POST "UrlGetBagJourneyForBagTag" value="{EnvironmentDomain}baggage/wtr/history/v1.0/tag/{0}/flightdate/{1}"
//-----------------------------------------------------------------------------------------------------------
app.get('/baggage/wtr/history/v1.0/tag/:bagTag/flightdate/:flightdate', function (req, res) {
    
    var content = "";
    findFile(startPath, /HistoryBagForBagTag/i, function(filename){
        content = readFile(filename);       
    });

    res.contentType('json');
    res.send(content);
});

//-----------------------------------------------------------------------------------------------------------
// POST "UrlPostDSSTransaction" value="{EnvironmentDomain}baggage/wtr/v4.0/config/stationsAttributeslocal/8"
//-----------------------------------------------------------------------------------------------------------
app.post('/baggage/wtr/v4.0/config/stationsAttributeslocal/8', function (req, res) {
    
    var content = "";
    findFile(startPath, /ReturnDssTransaction/i, function(filename){
        content = readFile(filename);       
    });

    res.contentType('json');
    res.send(content);
});

//-----------------------------------------------------------------------------------------------------------
// Mount the self-host to listen port :7000
//-----------------------------------------------------------------------------------------------------------
var server = app.listen(7000, function () {
    var host = server.address().address;
    host = (host === '::' ? 'localhost' : host);
    var port = server.address().port;
 
    console.log('listening at http://%s:%s', host, port);
});

var readFile = function(filename){
    if(filename === null || filename === undefined) return null;

    console.log('-- found: ', filename);
    var result = fs.readFileSync(filename, 'utf8');
    // fs.readFile(filename, 'utf8', function(err, contents) {
    //     console.log(contents);
    //     result = contents;
    // });

    return result;
};


/*
  //Method to find a specific file by filter.

  @param {string} startPath 
  @param {string} filter 
  @param {Function} callback 
*/
function findFile(startPath, filter, callback){

    //console.log('Starting from dir ' + startPath + '/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for(var i = 0; i < files.length; i++){
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            findFile(filename, filter, callback); //recurse
        }
        else if (filter.test(filename)) callback(filename);
    }
/* 
// How to use
findFile('../LiteScript', /\.html$/, function(filename){
    console.log('-- found: ',filename);
});
*/
}

function readFiles(){
    var p = "./results";
    fs.readdir(p, function (err, files) {
        if (err) {
            throw err;
        }

        files.map(function (file) {
            return path.join(p, file);
        }).filter(function (file) {
            return fs.statSync(file).isFile();
        }).forEach(function (file) {
            console.log("%s (%s)", file, path.extname(file));
        });
        console.log("entrou");
    });
}