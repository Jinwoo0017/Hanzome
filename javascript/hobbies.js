function next1() {
    document.getElementById("iframe").src = "https://open.spotify.com/embed/track/7Ca8EuTCyU3pjJR4TNOXqs?utm_source=generator";
    document.getElementById("sb1").classList.remove("active");
    document.getElementById("sb2").classList.add("active");
    document.getElementById("sb3").classList.remove("active");
    document.getElementById("sb4").classList.remove("active");
    document.getElementById("sb5").classList.remove("active");

    document.getElementById("nex").setAttribute("onclick", "next2()");
    document.getElementById("pre").setAttribute("onclick", "next5()");
}

function next2() {
    document.getElementById("iframe").src = "https://open.spotify.com/embed/track/62pgjUGV2H7ocevs3RIKFr?utm_source=generator";
    document.getElementById("sb1").classList.remove("active");
    document.getElementById("sb2").classList.remove("active");
    document.getElementById("sb3").classList.add("active");
    document.getElementById("sb4").classList.remove("active");
    document.getElementById("sb5").classList.remove("active");

    document.getElementById("nex").setAttribute("onclick", "next3()");
    document.getElementById("pre").setAttribute("onclick", "next1()");
}

function next3() {
    document.getElementById("iframe").src = "https://open.spotify.com/embed/track/6D9eDctjANmeKFWzac1XF8?utm_source=generator";
    document.getElementById("sb1").classList.remove("active");
    document.getElementById("sb2").classList.remove("active");
    document.getElementById("sb3").classList.remove("active");
    document.getElementById("sb4").classList.add("active");
    document.getElementById("sb5").classList.remove("active");

    document.getElementById("nex").setAttribute("onclick", "next4()");
    document.getElementById("pre").setAttribute("onclick", "next2()");
}

function next4() {
    document.getElementById("iframe").src = "https://open.spotify.com/embed/track/0Pn1J7xuwYfIS9CNtHHmKG?utm_source=generator";
    document.getElementById("sb1").classList.remove("active");
    document.getElementById("sb2").classList.remove("active");
    document.getElementById("sb3").classList.remove("active");
    document.getElementById("sb4").classList.remove("active");
    document.getElementById("sb5").classList.add("active");

    document.getElementById("nex").setAttribute("onclick", "next5()");
    document.getElementById("pre").setAttribute("onclick", "next3()");
}

function next5() {
    document.getElementById("iframe").src = "https://open.spotify.com/embed/track/6MbYvQMHFhsN2CFJm8HJJC?utm_source=generator";
    document.getElementById("sb1").classList.add("active");
    document.getElementById("sb2").classList.remove("active");
    document.getElementById("sb3").classList.remove("active");
    document.getElementById("sb4").classList.remove("active");
    document.getElementById("sb5").classList.remove("active");

    document.getElementById("nex").setAttribute("onclick", "next1()");
    document.getElementById("pre").setAttribute("onclick", "next4()");
}

function song1() {
    document.getElementById("iframe").src = "https://open.spotify.com/embed/track/6MbYvQMHFhsN2CFJm8HJJC?utm_source=generator";
    document.getElementById("sb1").classList.add("active");
    document.getElementById("sb2").classList.remove("active");
    document.getElementById("sb3").classList.remove("active");
    document.getElementById("sb4").classList.remove("active");
    document.getElementById("sb5").classList.remove("active");

    document.getElementById("nex").setAttribute("onclick", "next1()");
    document.getElementById("pre").setAttribute("onclick", "next4()");
}

function song2() {
    document.getElementById("iframe").src = "https://open.spotify.com/embed/track/7Ca8EuTCyU3pjJR4TNOXqs?utm_source=generator";
    document.getElementById("sb1").classList.remove("active");
    document.getElementById("sb2").classList.add("active");
    document.getElementById("sb3").classList.remove("active");
    document.getElementById("sb4").classList.remove("active");
    document.getElementById("sb5").classList.remove("active");

    document.getElementById("nex").setAttribute("onclick", "next2()");
    document.getElementById("pre").setAttribute("onclick", "next5()");
}

function song3() {
    document.getElementById("iframe").src = "https://open.spotify.com/embed/track/62pgjUGV2H7ocevs3RIKFr?utm_source=generator";
    document.getElementById("sb1").classList.remove("active");
    document.getElementById("sb2").classList.remove("active");
    document.getElementById("sb3").classList.add("active");
    document.getElementById("sb4").classList.remove("active");
    document.getElementById("sb5").classList.remove("active");

    document.getElementById("nex").setAttribute("onclick", "next3()");
    document.getElementById("pre").setAttribute("onclick", "next1()");
}

function song4() {
    document.getElementById("iframe").src = "https://open.spotify.com/embed/track/6D9eDctjANmeKFWzac1XF8?utm_source=generator";
    document.getElementById("sb1").classList.remove("active");
    document.getElementById("sb2").classList.remove("active");
    document.getElementById("sb3").classList.remove("active");
    document.getElementById("sb4").classList.add("active");
    document.getElementById("sb5").classList.remove("active");

    document.getElementById("nex").setAttribute("onclick", "next4()");
    document.getElementById("pre").setAttribute("onclick", "next2()");
}

function song5() {
    document.getElementById("iframe").src = "https://open.spotify.com/embed/track/0Pn1J7xuwYfIS9CNtHHmKG?utm_source=generator";
    document.getElementById("sb1").classList.remove("active");
    document.getElementById("sb2").classList.remove("active");
    document.getElementById("sb3").classList.remove("active");
    document.getElementById("sb4").classList.remove("active");
    document.getElementById("sb5").classList.add("active");

    document.getElementById("nex").setAttribute("onclick", "next5()");
    document.getElementById("pre").setAttribute("onclick", "next3()");
}


