var audio = new Audio("https://vincent1403.github.io/Sounds/kickinthedoor.mp3");

$('#play-pause-button').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio.pause();
   }
});

audio.onended = function() {
     $("#play-pause-button").removeClass('fa-pause');
     $("#play-pause-button").addClass('fa-play');
};
