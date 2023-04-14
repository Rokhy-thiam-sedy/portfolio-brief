let darkmode = false;

function changedarkmode() {
    if (darkmode) {
        //light mode
        darkmode = false;
        document.documentElement.style.setProperty("--text-color","black");
        document.documentElement.style.setProperty("--background-color","white");
        document.getElementById("dark-light-mode"). innerHTML= "dark mode";
    } else {
        // dark mode
        darkmode= true; 
        document.documentElement.style.setProperty("--text-color","white");
        document.documentElement.style.setProperty("--background-color","black");
        document.getElementById("dark-light-mode"). innerHTML= "light mode";

    }
}