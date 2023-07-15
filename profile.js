

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


async function changeNavBackground(){
    pageOpen = [];
    pageOpen.push("resume_page", "projects_page", "research_page");
    background_nav = []
    background_nav.push("resume", "projects", "research")    
    var i = 0;
    while (i < pageOpen.length){
        if (document.getElementById(pageOpen[i]).style.display == "block"){
            document.getElementById(background_nav[i]).style.backgroundColor = "black";
            document.getElementById(background_nav[i]).style.color = "white";
            document.getElementById(background_nav[i]).style.transition = ".2s ease-in";
        } else {
            document.getElementById(background_nav[i]).style.backgroundColor = "transparent";
            document.getElementById(background_nav[i]).style.color = "black";
            document.getElementById(background_nav[i]).style.transition = ".2s ease-in";
        }
        i++;
    }
}

setInterval(async () => {
    await changeNavBackground();
  }, 300)

async function changeIconBackground(){
    boxOpen = [];
    boxOpen.push("code-box", "math-box", "space-box", "engineer-box", "about-box", "contact-box");
    background_icon = []
    background_icon.push("code-icons", "math-icons", "space-icons", "engineer-icons", "about-icons", "contact-icons")    
    var i = 0;
    while (i < boxOpen.length){
        if (document.getElementById(boxOpen[i]).style.display == "flex"){
            document.getElementById(background_icon[i]).style.backgroundColor = "white"
            document.getElementById(background_icon[i]).style.borderRadius = "50%";
            document.getElementById(background_icon[i]).style.transition = ".2s ease-in";
        } else {
            document.getElementById(background_icon[i]).style.backgroundColor = "transparent";
            document.getElementById(background_icon[i]).style.transition = ".2s ease-in";
        }
        i++;
    }
}
setInterval(async () => {
    await changeIconBackground();
  }, 300)
