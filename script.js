let button = document.getElementById("btn")


button.onclick = function(){
    let search = document.querySelector(".search-bar").value

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid=5dfedb503bed1b2bb03e99bc32eaa10d")
    .then((res) => res.json())
    .then((res) => {
        document.querySelector(".city").innerText = res.name
        document.querySelector(".temp").innerText = (res.main.temp - 273).toFixed(2) + "°C"
        document.querySelector(".description").innerText = res.weather[0].description
        document.getElementById("loading").innerText = ""

    })


}
function name (){
this
}

const bob = ()=>{
this.onlcick
}

name()
bob()