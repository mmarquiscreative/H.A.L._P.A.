(function(){
 
 var HalApp = angular.module('HalApp', [])
 
 .controller('TalkController', function($scope){
     var talk = this;
     talk.replies = {
         goodMorning: "Good morning, Dave.",
         imSorry: "I\'m sorry, Dave. I\'m afraid I can\'t do that.",
         error1: "I\'ve just picked up a fault in the AE35 unit.",
         fullUse: "I am putting myself to the fullest possible use",
         howHelp: "How can I be of service today, Dave?"
         
     }
     
     talk.layout = [
         {ifState: true,
         btnText: 'Morning Hal.',
         ngClick: 'howHelp'},
         
         {ifState: true,
         btnText: "My name's not Dave.",
         ngClick: 'error1'},
         
         {ifState: false,
         btnText: 'Morning Hal.',
         ngClick: 'howHelp'},
     ]
     
     talk.currentText = "";
     talk.currentReply = 'goodMorning';
     
     talk.typewriter = function(someString){
         talk.currentText = "";
         setTimeout(function(){
             var typeString = talk.replies[someString];
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
         }, 50 * i)
         
     }    
         }, 2000);
         
     }
         talk.typewriter('goodMorning');
     
 })
 
 })();