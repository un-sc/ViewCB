let date = (new Date()).getHours();
let hoursTip = "";
let get = document.body
if (date >= 7 && date < 18) {
    get.setAttribute("data-bs-theme", "light")
    console.log("day")
} else if (date >= 18) {
    get.setAttribute("data-bs-theme", "dark")
    console.log("night")
} else {
    get.setAttribute("data-bs-theme", "dark")
    console.log("night")
}

let getImg = document.getElementById("bgimg")

if (getImg && date >= 7 && date < 18) {
    getImg.src = "https://unsc.oss-accelerate.aliyuncs.com/ViewCB/Images/logo.PNG"
}