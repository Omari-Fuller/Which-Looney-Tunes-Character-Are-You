

$("button").click(function() {
    var personality = $(".personality").val();
    var enemyCount = $(".enemyCount").val();

    if (enemyCount>4 && personality==="crazy") {
     alert("You are Yosemite Sam");
    $(".yosemite").fadeIn();    
    $(".emotion").fadeOut();
    $(".button").fadeOut();
} else if(enemyCount<4 && personality==="calm"){
     alert("You are Bugs Bunny");
     $(".bugs").fadeIn();    
     $(".emotion").fadeOut();
     $(".button").fadeOut();
    
    }else if (enemyCount<4 && personality==="crazy") {
     alert("You are Lola Bunny");
     $(".lola").fadeIn();
     $(".emotion").fadeOut();
     $(".button").fadeOut();
    }else if (enemyCount>4 && personality==="calm") {
     alert("You are Daffy Duck");
     $(".daffy").fadeIn();
     $(".emotion").fadeOut();
     $(".button").fadeOut();
    }
});
