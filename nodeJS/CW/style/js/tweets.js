
              for (var index in tweets){
                       tweetsA.push(tweets[index].text);;
                       var x = "<img src = '"+tweets[index].user.profile_image_url+"'>";
                          $("#plxwork").append("<p>"+"AUTHOR: "+x+tweets[index].user.name+"   "+"@"+tweets[index].user.screen_name+"</p>")
                          $("#plxwork").append("<p>"+"TWEET: "+"  "+tweets[index].text+"</p>")
                        }
