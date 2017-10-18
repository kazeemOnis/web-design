var mapp = [];
//Here we process the tweet information getting the bits we need for the map generation
function initialize(){
  for (index in data){
    for (var i in data[index].coordinates)
    //This is to ensure the tweets we are getting contain geo coordinates
    if (data[index].geo != 'null'){
      mapp.push(data[index].coordinates[i])
    }
  }
  if (mapp.length == 0){
    $("#map-canvas").append("<p>"+"There are no geo-tagged tweets"+"</p>")
  }
  var lat = mapp[1][1]
  var lng = mapp[1][0]
  var myLatlng = new google.maps.LatLng(lat, lng);
  var mapOptions = { center: myLatlng, zoom: 17 }
  map = new google.maps.Map(document.getElementById("map-canvas"),  mapOptions);
  for (i =0; i < mapp.length-1; i+=2){
    for (j=0; j <mapp[i+1].length - 1; j++){
      var markers = [];
      //The Latitude and longitude for each tweet is taking from the coordinates of
      //tweet if it is geo tagged.
      var myLatlng2 = new google.maps.LatLng(mapp[i+1][j+1], mapp[i+1][j]);
      //For each tweet create a marker and then add the marker to an array of markers
      // and update/position the map
      var marker = new google.maps.Marker({
        id: i,
        position: myLatlng2,
        map: map,
        title: '@' + data[index].user.screen_name + ':' + data[index].text,
        icon: {
          url: data[index].user.profile_image_url,
          size: new google.maps.Size(64, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(40, 40)
        }
      });
      //markers.push(marker);
      var infowindow = new google.maps.InfoWindow({
        content: data[i].text,
        maxWidth: 200
      });
      infowindow.open(map, marker);
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
      });
    }
  }
}
google.maps.event.addDomListener(window, 'load', initialize());
},
