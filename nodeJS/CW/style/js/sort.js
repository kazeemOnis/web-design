function sortObject (mydict){
            var keys = [];
            var arr = [];
            for(var key in mydict){
              arr.push({key:key, val: mydict[key]})
            }
            arr.sort(function(a, b) {
              return b.val - a.val;
            })
            for (i=0; i<10; i++){
              if (typeof arr[i] != 'undefined' ){
                keys = keys.concat(arr[i])
              }
            }
            return keys
          }
          var mostFrequentWords = [];
                  var frequentWords = [];
                  var activeUsers = []; //an array of all the users in all the retrieved tweet
                  var mostActiveUsers = {}; //an object of the top 10 most active users and their frequency
                  var regex = /\B@\w+/gi; //regular expression to extract all the words containing @
                  var regex1 = /\w+/gi; //regex to extract all non words symbol
                  for ( i = 0 ; i < tweetsA.length; i++) { //tweetsA is a list of all the retrieved tweets as a string
                    /* loop through all the retrieved tweets and extract the all the active users*/
                    while((m = regex.exec(tweetsA[i])) != null) {
                      activeUsers = activeUsers.concat(m[0]);
                    }
                    while((j = regex1.exec(tweetsA[i])) != null) {
                      frequentWords = frequentWords.concat(j[0]);
                    }
                  }
                              /* loop through all the retrieved tweets and remove any punctuations and hashtag
                  and return an array of the retrieved tweets */
                  var arrayOfTweets = tweetsA.map(function (str) {
                    return str.replace(regex1, '');
                  });
                  /* loop through all active users in from retrieved tweets, then compute a frequency
                  of all the active users */
                  for (i = 0; i < activeUsers.length; i++){
                    if (activeUsers[i] in mostActiveUsers){
                      mostActiveUsers[activeUsers[i]] += 1
                    }else{
                      mostActiveUsers[activeUsers[i]] = 1
                    }
                  }
                  for (i = 0; i < frequentWords.length; i++){
                    if (frequentWords[i] in mostFrequentWords){
                      mostFrequentWords[frequentWords[i]] += 1
                    }else{
                      mostFrequentWords[frequentWords[i]] = 1
                    }
                  }
                  mostActiveUsers = sortObject(mostActiveUsers); //sort the most active users by frequency and retrieve the top 10
                  mostFrequentWords = sortObject(mostFrequentWords)
                  for (i in mostActiveUsers){
                    $("#plxwork2").append("<p>"+mostActiveUsers[i].key+  "   "  +mostActiveUsers[i].val+" tweets" +"</p>")
                  }
                  for (i in mostFrequentWords){
                    $("#plxwork3").append("<p>"+mostFrequentWords[i].key+  ":    "  +mostFrequentWords[i].val+"</p>")
                  }
