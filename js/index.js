console.log("This is my first JS");

//$('#b5').on('click', function() {
    //console.log("This is inside JS");;
    //$(".fadeMe").fadeToggle("slow");
    //$("elementName").css("property", "value");
    //console.log("This is inside JS");;
 // } );

  $('#b5').mouseenter(function() {
   // $( this ).fadeOut( 100 );
   // $( this ).fadeIn( 500 );
    $( this ).css("background-color", "#000000");
    console.log("This is inside JS 1");;
  });

  $('#b5').mouseleave(function() {
     $( this ).css("background-color", "#484848");
     console.log("This is inside JS 2");;
   });
 console.log("This is my download button");

 //$('#b1').mouseenter(function() {
  // $( this ).fadeOut( 100 );
  // $( this ).fadeIn( 500 );
   //$( this ).css("background-color", "#ff0000");
   //console.log("This is inside JS 3");;
 //});

 //$('#b1').mouseleave(function() {
   // $( this ).css("background-color", "#ff7402");
    //console.log("This is inside JS 4");;
  //});
console.log("This is my contact button");



//let button = "b1";

//$("#b1").mouseenter(function(){$(this).css("background","#000000")});
//$("#b1").mouseleave(function(){$(this).css("background","#484848")});