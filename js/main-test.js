
$(document).ready(function(){
  $('.header').height($(window).height());
  
   $("a").click(function(event) {
	       $('.navbar-collapse').collapse('hide');

    var href = $(event.target).attr('href').substring(1); //this will give you the href value
	
	if(href=="about")
	{
		  document.getElementById(href).style.display = "block";
          document.getElementById("home").style.display = "none";
          document.getElementById("contact").style.display = "none";

    }
 
    else if(href=="contact")
	{
          document.getElementById(href).style.display = "block";
          document.getElementById("home").style.display = "none";
          document.getElementById("about").style.display = "none";    }
	
	else if(href=="home")
	{
          document.getElementById(href).style.display = "block";
          document.getElementById("about").style.display = "none";
          document.getElementById("contact").style.display = "none";
    }
   });
});
