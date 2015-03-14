
$(document).ready(readyFn);

function readyFn(){
  $("#frame_1of1").load;
    // Code to run when the document is ready.
}



var frame_1of1_src = $('#frame_1of1').attr('src');
var frame_src_hold = frame_1of1_src
var frame_src_hold2 = frame_1of1_src
var frame_1of4_src = $('#frame_1of4').attr('src');
var frame_2of4_src = $('#frame_2of4').attr('src');
var frame_3of4_src = $('#frame_3of4').attr('src');
var frame_4of4_src = $('#frame_4of4').attr('src');
var curr_frame = 0
  
//*$("body").live("pageshow", function() {
//*    $.mobile.silentScroll(0);
//*});

$("#frame_1of4").mouseover (
  //promote to top of page  
  function(){
     if (curr_frame == 1) {
        console.log("frame 1 of 4 repeat mouseover "); 
     }
     else {
        curr_frame = 1;
        console.log("frame 1 of 4 mouseover -->" + frame_src_hold);
        frame_src_hold2 = $('#frame_1of4').attr('src');
        frame_src_hold  = $('#frame_1of1').attr('src');
        $("#frame_1of1").attr('src',frame_src_hold2);
        $("#frame_1of4").attr('src',frame_src_hold);

//        frame_src_hold  = $('#frame_1of1').attr('src');
//        $("#frame_1of1").load;
//        $("#frame_1of4").load;
      }
   }   
);   
$("#frame_2of4").mouseover (
   //promote to top of page  
  function(){
     if (curr_frame == 2) {
        console.log("frame 2 of 4 repeat mouseover "); 
     }
     else {
        curr_frame = 2;
        console.log("frame 2 of 4 mouseover -->" + frame_src_hold);
        frame_src_hold2 = $('#frame_2of4').attr('src');
        frame_src_hold  = $('#frame_1of1').attr('src');
        $("#frame_1of1").attr('src',frame_src_hold2);
        $("#frame_2of4").attr('src',frame_src_hold);
//        $("#frame_1of1").load;
//        $("#frame_2of4").load;
      }
   }   
);    
$("#frame_3of4").mouseover (
   //promote to top of page  
  function(){
     if (curr_frame == 3) {
        console.log("frame 3 of 4 repeat mouseover "); 
     }
     else {
        curr_frame = 3;
        console.log("frame 3 of 4 mouseover -->" + curr_frame);
        frame_src_hold2 = $('#frame_3of4').attr('src');
        frame_src_hold  = $('#frame_1of1').attr('src');
        $("#frame_1of1").attr('src',frame_src_hold2);
        $("#frame_3of4").attr('src',frame_src_hold);
      }
   }   
);     
$("#frame_4of4").mouseover (
   //promote to top of page  
  function(){
     if (curr_frame == 4) {
        console.log("frame 4 of 4 repeat mouseover "); 
     }
     else {
        curr_frame = 4;
        console.log("frame 4 of 4 mouseover -->" + curr_frame);
        frame_src_hold2 = $('#frame_4of4').attr('src');
        frame_src_hold  = $('#frame_1of1').attr('src');
        $("#frame_1of1").attr('src',frame_src_hold2);
        $("#frame_4of4").attr('src',frame_src_hold);
      }
   }   
);    
$("#NYT_Frontpage").hover (
  //swap images } 
  function(e){
   console.log("nyt_frontpage hover");
   $("#preview_frame").attr( {src:"http://www.nytimes.com"})
   $("#preview_frame").load( )
 }
);
$("#WashPo").hover (
  //swap images } 
  function(e){
   console.log("washpo hover");
   $("#preview_frame").attr( {src:"http://www.washingtonpost.com"})
   $("#preview_frame").load( )
 }
);
$("#WSJ").hover (
  //swap images } 
  function(e){
   console.log("wsj hover");
   $("#preview_frame").attr( {src:"http://www.wallstreetjournal.com"})
   $("#preview_frame").load( )
 }
);
$("#Philly_FrontPage").hover (
  function(e){
   console.log("philly_frontpage hover");
   $("#preview_frame").attr( {src:"http://www.philly.com"})
   $("#preview_frame").load( )
 }
);
$("#NJ_FrontPage").hover (
  function(e){
   console.log("nj_frontpage hover");
   $("#preview_frame").attr( {src:"http://www.nj.com"})
   $("#preview_frame").load( )
 }
);
$("#Guardian").hover (
  function(e){
   console.log("Guardian hover");
   $("#preview_frame").attr( {src:"http://www.theguardian.com"})
   $("#preview_frame").load( )
 }
);
$("#Economist").hover (
  function(e){
   console.log("Economist hover");
   $("#preview_frame").attr( {src:"http://www.economist.com"})
   $("#preview_frame").load( )
 }
);
$("#Philly_sports").hover (
  //swap images } 
  function(e){
   console.log("philly_sports hover");
   $("#preview_frame").attr( {src:"http://www.philly.com/philly/sports"})
   $("#preview_frame").load( )
 }
);
$("#NYT_Sports").hover (
   function(e){
   console.log("nyt_sports hover");
   $("#preview_frame").attr( {src:"http://www.nytimes.com/pages/sports"})
   $("#preview_frame").load( )
 }
);
$("#NJ_Sports").hover (
   function(e){
   console.log("nj_sports hover");
   $("#preview_frame").attr( {src:"http://www.nj.com/sports"})
   $("#preview_frame").load( )
 }
);
$("#ESPN").hover (
  //swap images } 
  function(e){
   console.log("ESPN hover");
   $("#preview_frame").attr( {src:"http://www.espn.com"})
   $("#preview_frame").load( )
 }
);
$("#Politico").hover (
   function(e){
   console.log("Politico hover");
   $("#preview_frame").attr( {src:"http://www.politico.com"})
   $("#preview_frame").load( )
 }
);
$("#RealClear").hover (
   function(e){
   console.log("Real Clear hover");
   $("#preview_frame").attr( {src:"http://www.realclearpolitics.com"})
   $("#preview_frame").load( )
 }
);
$("#Huffington").hover (
  function(e){
   console.log("Huffington hover");
   $("#preview_frame").attr( {src:"http://www.huffingtonpost.com"})
   $("#preview_frame").load( )
 }
);
$("#NewYorker").hover (
  //swap images } 
  function(e){
   console.log("New Yorker hover");
   $("#preview_frame").attr( {src:"http://www.newyorker.com"})
   $("#preview_frame").load( )
 }
);
$("#Atlantic").hover (
  //swap images } 
  function(e){
   console.log("Atlantinc hover");
   $("#preview_frame").attr( {src:"http://www.theatlantic.com"})
   $("#preview_frame").load( )
 }
);
$("#DailyBeast").hover (
  //swap images } 
  function(e){
   console.log("Daily Beast hover");
   $("#preview_frame").attr( {src:"http://www.dailybeast.com"})
   $("#preview_frame").load( )
 }
);
$("#LongForm").hover (
  //swap images } 
  function(e){
   console.log("Long Form hover");
   $("#preview_frame").attr( {src:"http://www.longform.org"})
   $("#preview_frame").load( )
 }
);