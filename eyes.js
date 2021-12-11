const balls = document.getElementsByClassName("ball");
    document.onmousemove = (point) => {
        var x = (point.clientX * 100) / window.innerWidth + "%";
        var y = (point.clientY * 100) / window.innerHeight + "%";

        for( i=0; i<=1; i++){
            balls[i].style.left = x;
            balls[i].style.top = y;
           // balls[i].style.transform = "translate(-"+x+",-"+y+")";

        }
    }