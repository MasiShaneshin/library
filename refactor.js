const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
 printPlaylists = function() {
       for (item in library.playlists) {
       playlListId=library. playlists[item].id;
       playlistname=library.playlists[item].name;
       tracks=library.playlists[item].tracks.length;
 
       console.log(playlListId+":"+playlistname+tracks+"tracks");
       }}
       


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
printTracks = function() {
  for (var item in library.tracks){
tracksid=library.tracks[item].id;
tracksname=library.tracks[item].name;
tracksartist=library.tracks[item].artist;
tracksalbum=library.tracks[item].album;


console.log(tracksname+"by"+tracksartist+"("+tracksalbum+")")
  }
}

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
 printPlaylist = function(playlistId) {
       playlistid=this.playlists[playlistId].id;
       playlistname=this.playlists[playlistId].name;
       playlisttracks=this.playlists[playlistId].tracks;
       console.log(playlistid + "  " + playlistname + "  " + playlisttracks);

       
}


// adds an existing track to an existing playlist
addTrackToPlaylist = function(trackId, playlistId) {
       this.playlists[playlistId].tracks.push(trackId);
       console.log(library.playlists[playlistId].tracks)
   
   
   
   }
   
   




// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
 generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


 addTrack = function(name, artist, album) {

       this.tracks = {name: "name", artist: "artist", album: "album"};
       console.log(this.tracks);

}


// adds a playlist to the library
addPlaylist = function(name) {
      
       this.playlists = {id: 09, name: "newname", tracks: ""};
       console.log(this.playlists);
     
     }
     
     
     
     




// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

//const printSearchResults = function(query) {
        printSearchResults = (obj, searchKey, results = []) => {
              const r = results;
              Object.keys(obj).forEach(key => {
                 const value = obj[key];
                 if(key === searchKey && typeof value !== 'object'){
                    r.push(value);
                 }else if(typeof value === 'object'){
                     printSearchResults(value, searchKey, r);
                 }
              });
              return r;
           };
           console.log(printSearchResults(this, 'name'));


          

       
