$(document).ready(function(){
    // $("button").click(function(){
        // $("#div1").fadeIn();
        // $("#div2").fadeIn(1000);
        // $("#div3").fadeIn(3000);
        // $("#div4").fadeIn(5000);
        // $("#div1").fadeOut(5000);
        // $("#div2").fadeOut(3000);
        // $("#div3").fadeOut(1000);
        // $("#div4").fadeOut();
        // $("#div1").fadeToggle(5000);
        // $("#div2").fadeToggle(3000);
        // $("#div3").fadeToggle(1000);
        // $("#div4").fadeToggle();
    //     $("#div1").fadeTo(1000,0.2);
    //     $("#div2").fadeTo(1000,0.4);
    //     $("#div3").fadeTo(1000,0.6);
    //     $("#div4").fadeTo(1000,0.8);
    // });
    // $(document).ready(function(){
        // $("#topbar").click(function(){
            // $("#panel").slideDown(1000);
            // $("#panel").slideUp(1000);
            // $("#panel").slideToggle(1000);

        // });
    // });
    // $("button").click(function(){
        // $("#square").animate({left:"800px",opacity:"0.25",height:"toggle",height:"+=200px",width:"+=200px"},1000);
        
        // var square = $("#square");
        // square.animate({height:"500px",opacity:"0.5"},1000);
        // square.animate({width:"500px",opacity:"0.9"},500);
        // square.animate({height:"200px",opacity:"0.5"},1000);
        // square.animate({width:"200px",opacity:"0.9"},500);

    // });

    // $("#start").click(function(){
    //     $("#square").animate({left:"800px"},3000);
    // });
    // $("#stop").click(function(){
    //     $("#square").stop();
    // });

    // If Callback function is not used , then undesirable results
    // $(document).ready(function(){
    //     $("button").click(function(){
    //         $("#square").hide(1000);
    //             alert("The Square is now Hidden.")
            
    //     });
    // });

    // $(document).ready(function(){
        // $("button").click(function(){
        //     $("#square").css("background","red")
        //         //chaining
        //         .slideUp(2000)
        //         .slideDown(2000);
        // })
        // $(function(){
        //     $("#drag").draggable();
        // })

        // $(function(){
        //     $("#accordion").accordion();
        // });

        // $("#button1").click(function(){
        //     alert($("#line1").text());
        // });
        // $("#button2").click(function(){
        //     alert($("#line1").html());
        // })

        // $("button").click(function(){
        //     alert($("#name").val());
        // });
    // });
    // });

    // $("button").click(function(){
    //     alert($("#go").attr("href"));
    // });

    // $("#btn1").click(function(){
    //     $("#text1").text("New Text Line");
    // });
    // $("#btn2").click(function(){
    //     $("#text2").html("<b>Bold Text Line</b>");
    // });
    // $("#btn3").click(function(){
    //     $("#name").val("Radhe Krishna");
    // });

    // $("button").click(function(){
    //     $("#go").attr("href","google.php");
    // });

    // $("#btn1").click(function(){
    //     $("p").append("<b>More text</b>.");
    // });
    // $("#btn2").click(function(){
    //     $("ol").append("<li>New Sport</li>");
    // });

    // $("#btn1").click(function(){
    //     $("p").prepend("<b>More text</b>.");
    // });
    // $("#btn2").click(function(){
    //     $("ol").prepend("<li>New Sport</li>");
    // });

    // $("#btn1").click(function(){
    //     $("img").before("<b>Text Added Before Element</b>.");
    // });
    // $("#btn2").click(function(){
    //     $("img").after("<i>Text Added After Element.</i>");
    // });

    // $("button").click(function(){
    //     // $("#square").remove();
    //     $("#square").empty();
    // });

    // $("button").click(function(){
    //     $("p").remove(".rem1, .rem2");
    // });

    $("button").click(function(){
        // $("h1,h2,p").addClass("red");
        // $("div").addClass("big red");
        // $('h1, h2, p').removeClass("red");
        $('h1, h2, p').toggleClass("red");
        
    });

});