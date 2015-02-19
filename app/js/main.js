var resultOneT = "";
var resultOneA = "";
var resultTwoT = "";
var resultTwoA = "";
var resultThreeT = "";
var resultThreeA = "";
var aResult = "";


//LIESTEN TO THE BUTTON PRESS, AND STORE THE USER'S INPUT
document.getElementById('searchform').addEventListener('submit', function (e) {
   e.preventDefault();
        aResult = (document.getElementById('artist').value)
        tResult = (document.getElementById('track').value);
        console.log(aResult, tResult);      

// google search

var googleApiKey = 'AIzaSyCmcbCK_SDB_bmRn1osOUMig0UZO91gl2U';
var cx = '010867104842650022402:1_wfamoobvu';

      console.log("we found");
      console.log($(aResult);
  var userSearch = {
      artist: aResult,
    }
    client.addEvent("artist", userSearch);    





      function fetchImage() {

          var url = 'https://www.googleapis.com/customsearch/v1';
          var args = { 
                  key: googleApiKey,
                  cx:cx,
                  q: aResult,
                  searchType:'image',
                  fileType : 'jpg',
                  imgSize:'huge',
                  alt:'json',
          }; 

          $.getJSON(url, args,
                function(data) {

                      console.log(aResult);
                      console.log(data.items[0].link);
                      $('body').css('background','url('+data.items[0].link+') no-repeat center center fixed');

                
                  }
            );
      }
      fetchImage();  


//USE THE USER'S INPUT TO SEARCH FOR SIMILAR TRACKS ON LAST.FM
// // var LastfmAPI = require('lastfmapi');

var cache = new LastFMCache();

var lastfm = new LastFM({
    apiKey : '70cee47d1aecc2d367a6d8cbfbd10631',
    apiSecret : '4572becf9ca21a83f4abe76339dfcc8f',
    cache : cache,
});

lastfm.track.getSimilar({
  artist : aResult,
  track : tResult,
  limit : '10',
  autocorrect : '1'}, {success: function(data){
    console.log(data);

//CREATE INDIVIDUAL VARIABLES FOR EACH SONG, WITH TRACK NAME AND ARTIST.
var resultOne = (data.similartracks.track[3].name + " " + 
  data.similartracks.track[3].artist.name);
          console.log(resultOne);

    resultOneT = (data.similartracks.track[3].name);
          console.log(resultOneT);
    resultOneA = (data.similartracks.track[3].artist.name);
          console.log(resultOneA);

var resultTwo = (data.similartracks.track[6].name + " " + 
  data.similartracks.track[6].artist.name);
          console.log(resultTwo);

    resultTwoT = (data.similartracks.track[6].name);
          console.log(resultTwoT);
    resultTwoA = (data.similartracks.track[6].artist.name);
          console.log(resultTwoA);

var resultThree = (data.similartracks.track[9].name + " " + 
  data.similartracks.track[9].artist.name);
          console.log(resultThree);

    resultThreeT = (data.similartracks.track[9].name);
          console.log(resultThreeT);
    resultThreeA = (data.similartracks.track[9].artist.name);
          console.log(resultThreeA);


//USE THE INDIVIDUAL SONG VARIABLES TO SEARCH ON SPOTIFY AND GET ID
var spotifyApi = new SpotifyWebApi();

// search tracks whose name, album or artist contains the variable
spotifyApi.searchTracks(resultOne)
  .then(function(data) {
    console.log('Search for Option 1', data);
    var trackId1 = data.tracks.items[0].id;
    console.log('ID for Option 1:', trackId1);
    var track1Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId1);
    console.log(track1Url);
    var iframe1 = document.querySelector("#result iframe:nth-child(1)");
    iframe1.setAttribute("src", track1Url);
  }, function(err) {
    console.error(err);
  });

  spotifyApi.searchTracks(resultTwo)
  .then(function(data) {
    console.log('Search for Option 2', data);
    var trackId2 = data.tracks.items[0].id;
    console.log('ID for Option 2:', trackId2);
    var track2Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId2);
    console.log(track2Url);
    var iframe2 = document.querySelector("#result iframe:nth-child(2)");
    iframe2.setAttribute("src", track2Url);
  }, function(err) {
    console.error(err);
  });

  spotifyApi.searchTracks(resultThree)
  .then(function(data) {
    console.log('Search for Option 3', data);
    var trackId3 = data.tracks.items[0].id;
    console.log('ID for Option 3:', trackId3);
    var track3Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId3);
    console.log(track3Url);
    var iframe3 = document.querySelector("#result iframe:nth-child(3)");
    iframe3.setAttribute("src", track3Url);
  }, function(err) {
    console.error(err);
  });
  }, error: function(code, message){
    console.log("Error: ");
}});}, false);





//GO FURTHER 1

document.getElementById("Result1search").onclick = function() {goResults1() };
function goResults1() {
// // var LastfmAPI = require('lastfmapi');

var cache = new LastFMCache();

var lastfm = new LastFM({
    apiKey : '70cee47d1aecc2d367a6d8cbfbd10631',
    apiSecret : '4572becf9ca21a83f4abe76339dfcc8f',
    cache : cache,
});

lastfm.track.getSimilar({
  artist : resultOneA,
  track : resultOneT,
  limit : '10',
  autocorrect : '1'}, {success: function(data){
    console.log(data);

//CREATE INDIVIDUAL VARIABLES FOR EACH SONG, WITH TRACK NAME AND ARTIST.
var resultOne = (data.similartracks.track[3].name + " " + 
  data.similartracks.track[3].artist.name);
          console.log(resultOne);

    resultOneT = (data.similartracks.track[3].name);
          console.log(resultOneT);
    resultOneA = (data.similartracks.track[3].artist.name);
          console.log(resultOneA);

var resultTwo = (data.similartracks.track[6].name + " " + 
  data.similartracks.track[6].artist.name);
          console.log(resultTwo);

    resultTwoT = (data.similartracks.track[6].name);
          console.log(resultTwoT);
    resultTwoA = (data.similartracks.track[6].artist.name);
          console.log(resultTwoA);

var resultThree = (data.similartracks.track[9].name + " " + 
  data.similartracks.track[9].artist.name);
          console.log(resultThree);

    resultThreeT = (data.similartracks.track[9].name);
          console.log(resultThreeT);
    resultThreeA = (data.similartracks.track[9].artist.name);
          console.log(resultThreeA);



//USE THE INDIVIDUAL SONG VARIABLES TO SEARCH ON SPOTIFY AND GET ID
var spotifyApi = new SpotifyWebApi();

// search tracks whose name, album or artist contains 'the content of the var resultXXX'
spotifyApi.searchTracks(resultOne)
  .then(function(data) {
    console.log('Search for Option 1', data);
    var trackId1 = data.tracks.items[0].id;
    console.log('ID for Option 1:', trackId1);
    var track1Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId1);
    console.log(track1Url);
    var iframe1 = document.querySelector("#result iframe:nth-child(1)");
    iframe1.setAttribute("src", track1Url);
  }, function(err) {
    console.error(err);
  });

  spotifyApi.searchTracks(resultTwo)
  .then(function(data) {
    console.log('Search for Option 2', data);
    var trackId2 = data.tracks.items[0].id;
    console.log('ID for Option 2:', trackId2);
    var track2Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId2);
    console.log(track2Url);
    var iframe2 = document.querySelector("#result iframe:nth-child(2)");
    iframe2.setAttribute("src", track2Url);
  }, function(err) {
    console.error(err);
  });

  spotifyApi.searchTracks(resultThree)
  .then(function(data) {
    console.log('Search for Option 3', data);
    var trackId3 = data.tracks.items[0].id;
    console.log('ID for Option 3:', trackId3);
    var track3Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId3);
    console.log(track3Url);
    var iframe3 = document.querySelector("#result iframe:nth-child(3)");
    iframe3.setAttribute("src", track3Url);
  }, function(err) {
    console.error(err);
  });

  }, error: function(code, message){
    console.log("Error: ");
}});}




//GO FURTHER 2

document.getElementById("Result2search").onclick = function() {goResults2() };
function goResults2() {
// // var LastfmAPI = require('lastfmapi');

var cache = new LastFMCache();

var lastfm = new LastFM({
    apiKey : '70cee47d1aecc2d367a6d8cbfbd10631',
    apiSecret : '4572becf9ca21a83f4abe76339dfcc8f',
    cache : cache,
});

lastfm.track.getSimilar({
  artist : resultTwoA,
  track : resultTwoT,
  limit : '10',
  autocorrect : '1'}, {success: function(data){
    console.log(data);

//CREATE INDIVIDUAL VARIABLES FOR EACH SONG, WITH TRACK NAME AND ARTIST.
var resultOne = (data.similartracks.track[3].name + " " + 
  data.similartracks.track[3].artist.name);
          console.log(resultOne);

    resultOneT = (data.similartracks.track[3].name);
          console.log(resultOneT);
    resultOneA = (data.similartracks.track[3].artist.name);
          console.log(resultOneA);

var resultTwo = (data.similartracks.track[6].name + " " + 
  data.similartracks.track[6].artist.name);
          console.log(resultTwo);

    resultTwoT = (data.similartracks.track[6].name);
          console.log(resultTwoT);
    resultTwoA = (data.similartracks.track[6].artist.name);
          console.log(resultTwoA);

var resultThree = (data.similartracks.track[9].name + " " + 
  data.similartracks.track[9].artist.name);
          console.log(resultThree);

    resultThreeT = (data.similartracks.track[9].name);
          console.log(resultThreeT);
    resultThreeA = (data.similartracks.track[9].artist.name);
          console.log(resultThreeA);



//USE THE INDIVIDUAL SONG VARIABLES TO SEARCH ON SPOTIFY AND GET ID
var spotifyApi = new SpotifyWebApi();

// search tracks whose name, album or artist contains 'the content of the var resultXXX'
spotifyApi.searchTracks(resultOne)
  .then(function(data) {
    console.log('Search for Option 1', data);
    var trackId1 = data.tracks.items[0].id;
    console.log('ID for Option 1:', trackId1);
    var track1Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId1);
    console.log(track1Url);
    var iframe1 = document.querySelector("#result iframe:nth-child(1)");
    iframe1.setAttribute("src", track1Url);
  }, function(err) {
    console.error(err);
  });

  spotifyApi.searchTracks(resultTwo)
  .then(function(data) {
    console.log('Search for Option 2', data);
    var trackId2 = data.tracks.items[0].id;
    console.log('ID for Option 2:', trackId2);
    var track2Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId2);
    console.log(track2Url);
    var iframe2 = document.querySelector("#result iframe:nth-child(2)");
    iframe2.setAttribute("src", track2Url);
  }, function(err) {
    console.error(err);
  });

  spotifyApi.searchTracks(resultThree)
  .then(function(data) {
    console.log('Search for Option 3', data);
    var trackId3 = data.tracks.items[0].id;
    console.log('ID for Option 3:', trackId3);
    var track3Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId3);
    console.log(track3Url);
    var iframe3 = document.querySelector("#result iframe:nth-child(3)");
    iframe3.setAttribute("src", track3Url);
  }, function(err) {
    console.error(err);
  });

  }, error: function(code, message){
    console.log("Error: ");
}});}




//GO FURTHER 3

document.getElementById("Result3search").onclick = function() {goResults3() };
function goResults3() {
// // var LastfmAPI = require('lastfmapi');

var cache = new LastFMCache();

var lastfm = new LastFM({
    apiKey : '70cee47d1aecc2d367a6d8cbfbd10631',
    apiSecret : '4572becf9ca21a83f4abe76339dfcc8f',
    cache : cache,
});

lastfm.track.getSimilar({
  artist : resultThreeA,
  track : resultThreeT,
  limit : '10',
  autocorrect : '1'}, {success: function(data){
    console.log(data);

//CREATE INDIVIDUAL VARIABLES FOR EACH SONG, WITH TRACK NAME AND ARTIST.
var resultOne = (data.similartracks.track[3].name + " " + 
  data.similartracks.track[3].artist.name);
          console.log(resultOne);

    resultOneT = (data.similartracks.track[3].name);
          console.log(resultOneT);
    resultOneA = (data.similartracks.track[3].artist.name);
          console.log(resultOneA);

var resultTwo = (data.similartracks.track[6].name + " " + 
  data.similartracks.track[6].artist.name);
          console.log(resultTwo);

    resultTwoT = (data.similartracks.track[6].name);
          console.log(resultTwoT);
    resultTwoA = (data.similartracks.track[6].artist.name);
          console.log(resultTwoA);

var resultThree = (data.similartracks.track[9].name + " " + 
  data.similartracks.track[9].artist.name);
          console.log(resultThree);

    resultThreeT = (data.similartracks.track[9].name);
          console.log(resultThreeT);
    resultThreeA = (data.similartracks.track[9].artist.name);
          console.log(resultThreeA);


//USE THE INDIVIDUAL SONG VARIABLES TO SEARCH ON SPOTIFY AND GET ID
var spotifyApi = new SpotifyWebApi();

// search tracks whose name, album or artist contains 'the content of the var resultXXX'
spotifyApi.searchTracks(resultOne)
  .then(function(data) {
    console.log('Search for Option 1', data);
    var trackId1 = data.tracks.items[0].id;
    console.log('ID for Option 1:', trackId1);
    var track1Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId1);
    console.log(track1Url);
    var iframe1 = document.querySelector("#result iframe:nth-child(1)");
    iframe1.setAttribute("src", track1Url);
  }, function(err) {
    console.error(err);
  });

  spotifyApi.searchTracks(resultTwo)
  .then(function(data) {
    console.log('Search for Option 2', data);
    var trackId2 = data.tracks.items[0].id;
    console.log('ID for Option 2:', trackId2);
    var track2Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId2);
    console.log(track2Url);
    var iframe2 = document.querySelector("#result iframe:nth-child(2)");
    iframe2.setAttribute("src", track2Url);
  }, function(err) {
    console.error(err);
  });

  spotifyApi.searchTracks(resultThree)
  .then(function(data) {
    console.log('Search for Option 3', data);
    var trackId3 = data.tracks.items[0].id;
    console.log('ID for Option 3:', trackId3);
    var track3Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId3);
    console.log(track3Url);
    var iframe3 = document.querySelector("#result iframe:nth-child(3)");
    iframe3.setAttribute("src", track3Url);
  }, function(err) {
    console.error(err);
  });

  }, error: function(code, message){
    console.log("Error: ");
}})


;}
























