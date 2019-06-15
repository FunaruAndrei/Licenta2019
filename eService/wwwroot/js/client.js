window.addEventListener("load", function () {
    if (window.location.hash === "#/") {
        console.log("Here Client");
        window.location.hash = "#/client";
    }
});