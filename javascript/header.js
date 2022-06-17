//Sidenav

    function SideBarOpen() {
        document.getElementById("sidenav").style.left = "0";
        document.getElementById("sidenav").style.opacity = "1";
        document.getElementById("sidenav").style.transition = "0.7s ease-in-out";
        document.getElementById("filter").style.left = "0";
    }

    function SideBarClose() {
        document.getElementById("sidenav").style.left = "-65%";
        document.getElementById("sidenav").style.opacity = "0";
        document.getElementById("sidenav").style.transition = "0.7s ease-in-out";
        document.getElementById("filter").style.left = "-100%";
    }
    
//Light & Dark Mode

    function DarkMode() {
        //Source
        document.getElementById("background").src = "./img/background/Dark Mode.png";
        
        const moonsuns = document.querySelectorAll("#moonsun") 

        moonsuns.forEach(moonsun => {
            moonsun.src = "./img/icons/Sun.png";
        });

        const emails = document.querySelectorAll("#email") 

        emails.forEach(email => {
            email.src = "./img/icons/7.png";
        });

        const fbs = document.querySelectorAll("#fb") 

        fbs.forEach(fb => {
            fb.src = "./img/icons/8.png";
        });

        const msgrs = document.querySelectorAll("#msgr") 

        msgrs.forEach(msgr => {
            msgr.src = "./img/icons/9.png";
        });

        const igs = document.querySelectorAll("#ig") 

        igs.forEach(ig => {
            ig.src = "./img/icons/10.png";
        });

        const smss = document.querySelectorAll("#sms") 

        smss.forEach(sms => {
            sms.src = "./img/icons/11.png";
        });

        const calls = document.querySelectorAll("#call") 

        calls.forEach(call => {
            call.src = "./img/icons/12.png";
        });

        document.getElementById("burger").src = "./img/icons/Burger-W.png";
        document.getElementById("x").src = "./img/icons/X-W.png";
        document.getElementById("scroll-up").src = "./img/icons/Scroll-W.png";
        document.getElementById("school1").src = "./img/about/2.png";
        document.getElementById("school2").src = "./img/about/4.png";
        document.getElementById("school3").src = "./img/about/6.png";
        document.getElementById("school4").src = "./img/about/8.png";
        document.getElementById("previous").src = "./img/icons/Scroll-W.png";
        document.getElementById("next").src = "./img/icons/Scroll-W.png";

        //Attribute
        document.getElementById("toggle").setAttribute("onclick", "LightMode()");
        
        const toggles = document.querySelectorAll("#toggle") 

        toggles.forEach(toggle => {
            toggle.setAttribute("onclick", "LightMode()");
        });
        
        //Style

        const texts = document.querySelectorAll("#text") 

        texts.forEach(text => {
            text.style.color = "#FFFFFF";
        });

        const certis = document.querySelectorAll("#certi") 

        certis.forEach(certi=> {
            certi.style.boxShadow = "none";
        });

        const songbutton = document.querySelectorAll("#buttonS")
        
        songbutton.forEach(buttonS=> {
            buttonS.style.color = "#FFFFFF";
        }); 
        
        document.getElementById("anchor").style.color = "#FFFFFF";
        document.getElementById("anchor1").style.color = "#FFFFFF";
        document.getElementById("anchor2").style.color = "#FFFFFF";
        document.getElementById("anchor3").style.color = "#FFFFFF";
        document.getElementById("anchor4").style.color = "#FFFFFF";
        document.getElementById("anchor5").style.color = "#FFFFFF";
        document.getElementById("anchor6").style.color = "#FFFFFF";
        document.getElementById("anchor7").style.color = "#FFFFFF";
        document.getElementById("anchor8").style.color = "#FFFFFF";
        document.getElementById("body").style.background = "#1A1A1E";
        document.getElementById("sidenav").style.background = "#1A1A1E";
        document.getElementById("sidenav").style.transition = "0s ease-in-out";
        document.getElementById("filter").style.background = " #F1F1F0";
        document.getElementById("filter").style.opacity = " 50%";
        document.getElementById("side-anchor").style.color = "#FFFFFF";
        document.getElementById("side-title").style.borderBottom = "1px solid #FFFFFF";
        document.getElementById("home").style.background = " #171717";
        document.getElementById("about").style.background = " #171717";
        document.getElementById("credentials").style.background = "#171717";
        document.getElementById("hobbies").style.background = " #171717";
        document.getElementById("contact").style.background = " #171717";
        document.getElementById("firstB").style.color = "#000000";
        document.getElementById("firstB").style.background = "#FFFFFF";     
        document.getElementById("secondB").style.color = "#000000";
        document.getElementById("secondB").style.background = "#FFFFFF";     
        document.getElementById("thirdB").style.color = "#000000";
        document.getElementById("thirdB").style.background = "#FFFFFF";     
        document.getElementById("fourthB").style.color = "#000000";
        document.getElementById("fourthB").style.background = "#FFFFFF";
        document.getElementById("fifthB").style.color = "#000000";
        document.getElementById("fifthB").style.background = "#FFFFFF";
        document.getElementById("sixthB").style.color = "#000000";
        document.getElementById("sixthB").style.background = "#FFFFFF"; 
        document.getElementById("sb1").style.color = "#FFFFFF";
        document.getElementById("sb2").style.color = "#FFFFFF";
        document.getElementById("sb3").style.color = "#FFFFFF";
        document.getElementById("sb4").style.color = "#FFFFFF";
        document.getElementById("sb5").style.color = "#FFFFFF";

        //Animation
        document.getElementById("home").style.transition = "0s ease-in-out";
        document.getElementById("about").style.transition = "0s ease-in-out";
        document.getElementById("credentials").style.transition = "0s ease-in-out";
        document.getElementById("hobbies").style.transition = "0s ease-in-out";
        document.getElementById("contact").style.transition = "0s ease-in-out";  
    }

    function LightMode() {
        //Source
        document.getElementById("background").src = "./img/background/Light Mode.png";

        const moonsuns = document.querySelectorAll("#moonsun") 

        moonsuns.forEach(moonsun => {
            moonsun.src = "./img/icons/Moon.png";
        });

        const emails = document.querySelectorAll("#email") 

        emails.forEach(email => {
            email.src = "./img/icons/1.png";
        });

        const fbs = document.querySelectorAll("#fb") 

        fbs.forEach(fb => {
            fb.src = "./img/icons/2.png";
        });

        const msgrs = document.querySelectorAll("#msgr") 

        msgrs.forEach(msgr => {
            msgr.src = "./img/icons/3.png";
        });

        const igs = document.querySelectorAll("#ig") 

        igs.forEach(ig => {
            ig.src = "./img/icons/4.png";
        });

        const smss = document.querySelectorAll("#sms") 

        smss.forEach(sms => {
            sms.src = "./img/icons/5.png";
        });

        const calls = document.querySelectorAll("#call") 

        calls.forEach(call => {
            call.src = "./img/icons/6.png";
        });

        document.getElementById("burger").src = "./img/icons/Burger.png";
        document.getElementById("x").src = "./img/icons/X.png";
        document.getElementById("scroll-up").src = "./img/icons/Scroll.png";
        document.getElementById("school1").src = "./img/about/1.png";
        document.getElementById("school2").src = "./img/about/3.png";
        document.getElementById("school3").src = "./img/about/5.png";
        document.getElementById("school4").src = "./img/about/7.png";
        document.getElementById("previous").src = "./img/icons/Scroll.png";
        document.getElementById("next").src = "./img/icons/Scroll.png";

        //Attribute
        const toggles = document.querySelectorAll("#toggle") 

        toggles.forEach(toggle => {
            toggle.setAttribute("onclick", "DarkMode()");
        });
        
        //Style

        const texts = document.querySelectorAll("#text") 

        texts.forEach(text => {
            text.style.color = "#000000";
        });

        const certis = document.querySelectorAll("#certi") 

        certis.forEach(certi=> {
            certi.style.boxShadow = "0px 0px 20px 0px rgba(0,0,0,0.75)";
        });
        
        document.getElementById("anchor").style.color = "#000000";
        document.getElementById("anchor1").style.color = "#000000";
        document.getElementById("anchor2").style.color = "#000000";
        document.getElementById("anchor3").style.color = "#000000";
        document.getElementById("anchor4").style.color = "#000000";
        document.getElementById("anchor5").style.color = "#000000";
        document.getElementById("anchor6").style.color = "#000000";
        document.getElementById("anchor7").style.color = "#000000";
        document.getElementById("anchor8").style.color = "#000000";
        document.getElementById("body").style.background = "#F1F1F0";
        document.getElementById("sidenav").style.background = " #F1F1F0";
        document.getElementById("sidenav").style.transition = "0s ease-in-out";
        document.getElementById("filter").style.background = " #1A1A1E";
        document.getElementById("filter").style.opacity = " 70%";
        document.getElementById("side-anchor").style.color = "#000000";
        document.getElementById("side-title").style.borderBottom = "1px solid #000000";
        document.getElementById("home").style.background = " #FFFFFF";
        document.getElementById("about").style.background = " #FFFFFF";
        document.getElementById("credentials").style.background = "#FFFFFF";
        document.getElementById("hobbies").style.background = " #FFFFFF";
        document.getElementById("contact").style.background = " #FFFFFF";
        document.getElementById("firstB").style.color = "#FFFFFF";
        document.getElementById("firstB").style.background = "#171717"; 
        document.getElementById("secondB").style.color = "#FFFFFF";
        document.getElementById("secondB").style.background = "#171717"; 
        document.getElementById("thirdB").style.color = "#FFFFFF";
        document.getElementById("thirdB").style.background = "#171717"; 
        document.getElementById("fourthB").style.color = "#FFFFFF";
        document.getElementById("fourthB").style.background = "#171717";
        document.getElementById("fifthB").style.color = "#FFFFFF";
        document.getElementById("fifthB").style.background = "#171717";
        document.getElementById("sixthB").style.color = "#FFFFFF";
        document.getElementById("sixthB").style.background = "#171717";
        document.getElementById("sb1").style.color = "#000000";
        document.getElementById("sb2").style.color = "#000000";
        document.getElementById("sb3").style.color = "#000000";
        document.getElementById("sb4").style.color = "#000000";
        document.getElementById("sb5").style.color = "#000000";

        //Animation
        document.getElementById("home").style.transition = "0s ease-in-out";
        document.getElementById("about").style.transition = "0s ease-in-out";
        document.getElementById("credentials").style.transition = "0s ease-in-out";
        document.getElementById("hobbies").style.transition = "0s ease-in-out";
        document.getElementById("contact").style.transition = "0s ease-in-out";        
    }

//Page Caller

    function home() {
        //Home
        document.getElementById("home").style.display = "block";
        document.getElementById("home").style.opacity = "1";
        document.getElementById("home").style.transition = "0.7s ease-in-out";

        //About
        document.getElementById("about").style.display = "none";
        document.getElementById("about").style.opacity = "0";
        document.getElementById("about").style.transition = "0s ease-in-out";

        //Credentials
        document.getElementById("credentials").style.display = "none";
        document.getElementById("credentials").style.opacity = "0";
        document.getElementById("credentials").style.transition = "0s ease-in-out";

        //Hobbies
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("hobbies").style.opacity = "0";
        document.getElementById("hobbies").style.transition = "0s ease-in-out";

        //Contact 
        document.getElementById("contact").style.display = "none";
        document.getElementById("contact").style.opacity = "0";
        document.getElementById("contact").style.transition = "0s ease-in-out";

        //Active 
        document.getElementById("anchor1").classList.remove("active");
        document.getElementById("anchor2").classList.remove("active");
        document.getElementById("anchor3").classList.remove("active");
        document.getElementById("anchor4").classList.remove("active");
        document.getElementById("anchor5").classList.remove("active");
        document.getElementById("anchor6").classList.remove("active");
        document.getElementById("anchor7").classList.remove("active");
        document.getElementById("anchor8").classList.remove("active");
    }

    function about() {
        //About
        document.getElementById("about").style.display = "block";
        document.getElementById("about").style.opacity = "1";
        document.getElementById("about").style.transition = "0.7s ease-in-out";

        //Home
        document.getElementById("home").style.display = "none";
        document.getElementById("home").style.opacity = "0";
        document.getElementById("home").style.transition = "0s ease-in-out";

        //Credentials
        document.getElementById("credentials").style.display = "none";
        document.getElementById("credentials").style.opacity = "0";
        document.getElementById("credentials").style.transition = "0s ease-in-out";

        //Hobbies
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("hobbies").style.opacity = "0";
        document.getElementById("hobbies").style.transition = "0s ease-in-out";

        //Contact 
        document.getElementById("contact").style.display = "none";
        document.getElementById("contact").style.opacity = "0";
        document.getElementById("contact").style.transition = "0s ease-in-out";

        //Active 
        document.getElementById("anchor1").classList.add("active");
        document.getElementById("anchor2").classList.remove("active");
        document.getElementById("anchor3").classList.remove("active");
        document.getElementById("anchor4").classList.remove("active");
        document.getElementById("anchor5").classList.add("active");
        document.getElementById("anchor6").classList.remove("active");
        document.getElementById("anchor7").classList.remove("active");
        document.getElementById("anchor8").classList.remove("active");
    }

    function credentials() {
        //Credentials
        document.getElementById("credentials").style.display = "block";
        document.getElementById("credentials").style.opacity = "1";
        document.getElementById("credentials").style.transition = "0.7s ease-in-out";

        //About
        document.getElementById("about").style.display = "none";
        document.getElementById("about").style.opacity = "0";
        document.getElementById("about").style.transition = "0s ease-in-out";
        //Home
        document.getElementById("home").style.display = "none";
        document.getElementById("home").style.opacity = "0";
        document.getElementById("home").style.transition = "0s ease-in-out";

        //Hobbies
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("hobbies").style.opacity = "0";
        document.getElementById("hobbies").style.transition = "0s ease-in-out";

        //Contact 
        document.getElementById("contact").style.display = "none";
        document.getElementById("contact").style.opacity = "0";
        document.getElementById("contact").style.transition = "0s ease-in-out";

        //Active 
        document.getElementById("anchor1").classList.remove("active");
        document.getElementById("anchor2").classList.add("active");
        document.getElementById("anchor3").classList.remove("active");
        document.getElementById("anchor4").classList.remove("active");
        document.getElementById("anchor5").classList.remove("active");
        document.getElementById("anchor6").classList.add("active");
        document.getElementById("anchor7").classList.remove("active");
        document.getElementById("anchor8").classList.remove("active");
    }

    function hobbies() {
        //Hobbies
        document.getElementById("hobbies").style.display = "block";
        document.getElementById("hobbies").style.opacity = "1";
        document.getElementById("hobbies").style.transition = "0.7s ease-in-out";

        //About
        document.getElementById("about").style.display = "none";
        document.getElementById("about").style.opacity = "0";
        document.getElementById("about").style.transition = "0s ease-in-out";

        //Credentials
        document.getElementById("credentials").style.display = "none";
        document.getElementById("credentials").style.opacity = "0";
        document.getElementById("credentials").style.transition = "0s ease-in-out";

        //Home
        document.getElementById("home").style.display = "none";
        document.getElementById("home").style.opacity = "0";
        document.getElementById("home").style.transition = "0s ease-in-out";

        //Contact 
        document.getElementById("contact").style.display = "none";
        document.getElementById("contact").style.opacity = "0";
        document.getElementById("contact").style.transition = "0s ease-in-out";

        //Active 
        document.getElementById("anchor1").classList.remove("active");
        document.getElementById("anchor2").classList.remove("active");
        document.getElementById("anchor3").classList.add("active");
        document.getElementById("anchor4").classList.remove("active");
        document.getElementById("anchor5").classList.remove("active");
        document.getElementById("anchor6").classList.remove("active");
        document.getElementById("anchor7").classList.add("active");
        document.getElementById("anchor8").classList.remove("active");
    }
    
    function contact() {
        //Contact
        document.getElementById("contact").style.display = "block";
        document.getElementById("contact").style.opacity = "1";
        document.getElementById("contact").style.transition = "0.7s ease-in-out";

        //About
        document.getElementById("about").style.display = "none";
        document.getElementById("about").style.opacity = "0";
        document.getElementById("about").style.transition = "0s ease-in-out";

        //Credentials
        document.getElementById("credentials").style.display = "none";
        document.getElementById("credentials").style.opacity = "0";
        document.getElementById("credentials").style.transition = "0s ease-in-out";

        //Hobbies
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("hobbies").style.opacity = "0";
        document.getElementById("hobbies").style.transition = "0s ease-in-out";

        //Home
        document.getElementById("home").style.display = "none";
        document.getElementById("home").style.opacity = "0";
        document.getElementById("home").style.transition = "0s ease-in-out";

        //Active
        document.getElementById("anchor1").classList.remove("active");
        document.getElementById("anchor2").classList.remove("active");
        document.getElementById("anchor3").classList.remove("active");
        document.getElementById("anchor4").classList.add("active");
        document.getElementById("anchor5").classList.remove("active");
        document.getElementById("anchor6").classList.remove("active");
        document.getElementById("anchor7").classList.remove("active");
        document.getElementById("anchor8").classList.add("active");
    }

//Scroll-Up {
    function ScrollUp() {
        window.scrollTo(0, 0);
    }