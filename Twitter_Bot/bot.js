var Twit=require("twit");
var config=require("./config");
var T = new Twit(config);


// var params={
//     q:'codingrainbow',
//     count:10
// };

// T.get('search/tweets',params,gotData);

// function gotData(err, data, response){
//     var tweets=data.statuses;
//     for(var i=0;i<tweets.length;i++){
//         console.log(tweets[i].text);
//     }
// };





// var tweet={
//     status:"#codingrainbow with nodeJS"
// }
// T.post('statuses/update',tweet,tweeted);
// function tweeted(err,data,response){
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         console.log("All done!!");
//     }
// }



function tweetIt(){
    // var r=Math.floor(Math.random()*100);
    var tweet={
        status:" #codingrainbow POC_Demo_NodeJS By @Sparsh09380363 "
    }
    T.post('statuses/update',tweet,tweeted);
    function tweeted(err,data,response){
        if(err){
            console.log(err);
        }
        else
        {
            console.log("All done!!");
        }
    }
}
setInterval(tweetIt,1000*20)
tweetIt();