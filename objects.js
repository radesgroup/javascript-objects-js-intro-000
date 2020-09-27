var playlist = {
  rihanna: "umbrella",
  madonna: "vogue",
  maroon5: "memories"
};
var artist = "beyonce";
var song = "halo";
function updatePlaylist (playlist, artist, song){
Object.assign({}, playlist, artist, song)
}
playlist
