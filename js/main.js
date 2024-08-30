const white = document.getElementsByClassName("menu")

white[0].addEventListener("click", function() {
        document.body.classList.toggle("black")

        const   theme = localStorage.getItem("theme")

        if (theme === "black") {
            localStorage.setItem("theme", "")
        } else {
            localStorage.setItem("theme", "black")
        }
})