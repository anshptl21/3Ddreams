

function openNavMenu(){
    document.getElementById("nav-menu-block").style.display = "block";
    document.getElementById("nav-menu-block").style.animation = "slideInFromLeft .4s ease-in";
    if (document.getElementById("nav-menu-block").style.display == "block"){
        document.body.style.overflowY = "hidden";
        document.getElementById("nav-menu-button").style.zIndex = "-1 !important";
    } else {
        return false
    }
}

function closeNavMenu(){
    document.getElementById("nav-menu-block").style.animation = "none";
    document.getElementById("nav-menu-block").style.animation = "slideOutFromLeft .4s ease-in";
    setTimeout(function(){
        document.getElementById("nav-menu-block").style.display = "none";
        document.getElementById("nav-menu-button").style.zIndex = "2";
    }, 375);
}

function onLoadAnimation(){
    document.getElementById("before_animation").style.animation = "fadeOut .8s ease-in";
    setTimeout(function(){
        document.getElementById("before_animation").style.display = "none";
        document.body.style.overflowY = "auto !important";
    }, 650);
}

function openSnippetBox(box){
    openBox = [];
    openBox.push("code-box", "math-box", "space-box", "engineer-box", "about-box", "contact-box");
    var i = 0;
    var close_index = 0;
    while (close_index < openBox.length){
        if (document.getElementById(openBox[close_index]).style.display == "flex"){
            closeSnippetBox(openBox[close_index]);   
        }    
        close_index++;
    }
    while (i < openBox.length){
        if (box == openBox[i]){
            document.getElementById(box).style.display = "flex";
            document.getElementById(box).style.animation = "slideInFromBottom .4s ease-in";
            setTimeout(function(){
                document.getElementById(box + "_arrow").style.transform = "rotate(180deg)";
                document.getElementById(box + "_arrow").style.transition = ".4s ease-in";
            }, 150);
        }
        i++;
    }

}

function closeSnippetBox(box){
    closeBox = [];
    closeBox.push("code-box", "math-box", "space-box", "engineer-box", "about-box", "contact-box");
    var i = 0;
    while (i < closeBox.length){
        document.getElementById(box + "_arrow").style.transform = "rotate(360deg)";
        document.getElementById(box + "_arrow").style.transition = ".2s ease-in";
        document.getElementById(box).style.animation = "slideOutFromBottom .4s ease-in";
        setTimeout(function(){
            document.getElementById(box).style.display = "none";
        }, 375);
        i++;
    }
}

function openPage(page){
    var i = 0;
    openPages = [];
    openPages.push("resume_page", "projects_page", "research_page");
    var close_index = 0;
    while(close_index < openPages.length){
        if (page !== "home"){
            if (document.getElementById(openPages[close_index]).style.display == "block"){
                closePage(openPages[close_index]);
            }
        }
        close_index++;
    }
    while(i < openPages.length){
        if(page == openPages[i]){
            document.getElementById(openPages[i]).style.display = "block";
            document.getElementById(openPages[i]).style.animation = "slideInFromRight .8s ease-in";
        } else if (page == "home"){
            var home_index = 0;
            while(home_index < openPages.length){
                if (document.getElementById(openPages[home_index]).style.display == "block"){
                    closePage(openPages[home_index])
                    break;
                }
                home_index++;
            }
        }
        i++;
    }
}


function closePage(page){
    closePages = [];
    closePages.push("resume_page", "projects_page", "research_page");
    var i = 0;
    while (i < closePages.length){
        if (closePages[i] == page){
            document.getElementById(page).style.animation = "slideOutFromRight .8s ease-in";
            setTimeout(function(){
                document.getElementById(page).style.display = "none";
            }, 375);
        }
        i++;
    }
}
function changeBackgroundScroll(){
        document.getElementById("nav-bar").style.backgroundColor = "lightsteelblue";
        document.getElementById("nav-bar").style.transition = ".4s ease-in";
}




/*function heightOfText(){
        var math = document.getElementById("math");
        var math_box = document.getElementById("math-box");
        var math_dim = math.getBoundingClientRect();
        var math_box_dim = math_box.getBoundingClientRect();
        console.log("working");
        console.log(math_dim.height);
        console.log(math_box_dim.height);
        document.getElementById("math-box").style.height = (math_box_dim.height + math_dim.height) + "px";
    }



function openScreen(clicked_button){
    console.log("in function")
    about = document.getElementById("about-button");
    contact = document.getElementById("contact-button");
    about_screen = document.getElementById("about-button-onclick-screen").style.display;
    header = document.getElementById("header").style.display;
    if (clicked_button == "about-button"){
        if (about_screen == "none"){
            document.getElementById("about-button-onclick-screen").style.display = "block";
            document.getElementById("about-button-onclick-screen").style.animation = "slideInFromLeft .4s ease-in";
        }
        else {
            document.getElementById("about-button-onclick-screen").style.display = "none";
        }
    } else if (clicked_button == "contact-button"){
        if (about_screen == "none"){
            document.getElementById("contact-button-onclick-screen").style.display = "block";
            document.getElementById("contact-button-onclick-screen").style.animation = "slideInFromRight .6s ease-in";
        }
        else {
            document.getElementById("contact-button-onclick-screen").style.display = "none";
        }
    }
}
 
function closeScreen(){
    if (document.getElementById("about-button-onclick-screen").style.display == "block"){
        document.getElementById("about-button-onclick-screen").style.animation = "none";
        document.getElementById("about-button-onclick-screen").style.animation = "slideOutFromLeft .4s ease-in";
        setTimeout(function(){
            document.getElementById("about-button-onclick-screen").style.display = "none";
        }, 375);
    } else 
        document.getElementById("contact-button-onclick-screen").style.animation = "none";
        document.getElementById("contact-button-onclick-screen").style.animation = "slideOutFromRight .6s ease-in";
        setTimeout(function(){
            document.getElementById("contact-button-onclick-screen").style.display = "none";
        }, 375);
}


document.addEventListener("click", function(event){
    about = document.getElementById("about-button-onclick-screen").style.display;
    contact = document.getElementById("contact-button-onclick-screen").style.display;
    console.log(event)
    if (about || contact == "block"){
        console.log("in if statement for block")
        document.body.style.overflowY = "hidden";
    }
    setTimeout(function(){
    about_after = document.getElementById("about-button-onclick-screen").style.display
    contact_after = document.getElementById("contact-button-onclick-screen").style.display;
    console.log(about_after)
    console.log(contact_after)
    if (about_after == "none"){
        if (contact_after == "none"){
            console.log("working");
            document.body.style.overflowY = "visible";
        }
    }
    }, 500);
});
*/


