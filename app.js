(function(){
 
 var HalApp = angular.module('HalApp', [])
 
 .controller('TalkController', function($scope){
     var talk = this;
     talk.replies = {
         goodMorning: 'Good morning, Dave.',
         imSorry: 'I\'m sorry, I cannot do that, Dave.'
     }
     
     talk.currentText = "";
     talk.currentReply = 'imSorry';
     
     talk.typewriter = function(){
         
         var typeString = talk.replies[talk.currentReply];
         var strLength = typeString.length;
         var d = 0;
         
     for(var i = 0; i <= strLength; i++){
         var tempLetter = typeString.charAt(i);
         setTimeout(function(){
            $scope.$apply(function(){
             console.log(typeString.charAt(d));
             console.log(talk.currentText);

             talk.currentText += typeString.charAt(d);
             d++;
            });
         }, 80 * i)
         
     }    
         
         
         
     }
     
     talk.key = function($event){
    console.log($event.keyCode);
    if ($event.keyCode == 38)
        alert("up arrow");
    else if ($event.keyCode == 39)
        alert("right arrow");
    else if ($event.keyCode == 40)
        alert("down arrow");
    else if ($event.keyCode == 37)
        alert("left arrow");
}
     
     
 })
 
 })();