var apiKey = "fca9515930a01d9ca28257e94bef596b";

var rest = new XMLHttpRequest();
var topArtist = rest;
var call = "http://ws.audioscrobbler.com/2.0/?method=";

topArtist.open("GET", call + "geo.gettopartists&country=spain&api_key=" + apiKey + "&format=json", false);
topArtist.send();
topArtist = topArtist.response
topArtist = JSON.parse(topArtist);

$(document).ready(function(){
  for (var i = 0; i <= 50; i ++) {
      $(".topArtistDetails").append("<div class='artistDetails'>" + "<div id='artistName'>" + topArtist.topartists.artist[i].name + "</div>" + "<div id='artistImage'>" + "<img id='img' src=" + "'" + topArtist.topartists.artist[i].image[3]["#text"] + "'" + "/>" + "</div>");
  }
});

var artistSearch = rest;
function reloadPage() {
  location.reload();
}

$(document).ready(function(){
  $('#submitArtist').click(function() {
    // event.preventDefault();
    var artistInput = $("#artistSearch").val();
    artistSearch.open("GET", call + "track.search&track=" + artistInput + "&api_key=" + apiKey + "&format=json", false);
    artistSearch.send();
    artistSearch = artistSearch.response;
    artistSearch = JSON.parse(artistSearch);
    if (artistInput === "") {
      alert('Please enter a name');
      reloadPage();
    }
    for (var i = 0; i <= 15; i ++) {
      console.log(artistSearch.results.trackmatches.track[i]);
      $(".artistSearch").append("<div class='artistSearchDetails'>" + "<div id='playContaier'><div id='playbutton'><button id='play'><img src='img/play.png'></button</div></div></div>"+ "<div id='artistSearchName'>" + "<div id='name'>" + artistSearch.results.trackmatches.track[i].name  + "</div>" + "<b>" + " " + artistSearch.results.trackmatches.track[i].artist + "</b>" + "<img src=" + "'" + artistSearch.results.trackmatches.track[i].image[3]["#text"] + "'>" + "</div> </div>");
    }
  });
});
