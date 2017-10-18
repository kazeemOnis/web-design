
      flick = flickr.map(function(photo){
                return "https://farm" + photo.farm +
                  ".staticflickr.com/" +
                  photo.server + "/" +
                  photo.id + "_" +
                  photo.secret + "_t" + ".jpg";
            });
                        console.log(flick)
                        for (var i=0; i<flick.length; i++){
                          $("<img/>").attr("src", flick[i]).appendTo("#images")
                        }
