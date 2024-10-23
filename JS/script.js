let image = document.getElementsByTagName("img")[0]
let next = document.querySelector(".next")
let back = document.querySelector(".back")
let name_ch = document.querySelector("#name")
let photo_gallary = ["luffy.jpg", "zoro.jpg", "sanji.jpg", "Nami.jpg", "Robin.jpg", "Usopp.jpg", "Tony.jpg", "frank.jpg", "jim.jpg", "brook.jpg", "end1.jpg"]
let names = ["Monkey D. Luffy", "Roronoa Zoro", "Vinsmoke Sanji", "Nami", "Nico Robin", "Usopp", "Tony Tony Chopper", "franky", "jinbei", "Brook", "THE END"]
let img = photo_gallary
let value = -1 //3
function photonext() {
    next.addEventListener("click", (eobj) => {
        value++
        if (value < photo_gallary.length) {//0<3 1<3,2<3
            let string = img[value]
            if (img[value].includes(".com")) {
                let add = string
                image.src = add
            }
            else {
                let add = `../photos/${string}`
                image.src = add
            }
            name_ch.textContent = names[value]
            console.log(value);
        } else {
            value = (photo_gallary.length - 1) //2
            console.log(value);

        }
    })
}
function photoback() {
    back.addEventListener("click", (eobj) => {
        value--//1,0
        if (value >= 0 && value < photo_gallary.length) {

            if (img[value].includes(".com")) {
                let add = `${img[value]}`
                image.src = add
            }
            else {
                let add = `../photos/${img[value]}`
                image.src = add
            }
            name_ch.textContent = names[value]
        }
        else {
            alert("nd")
            value = 0
        }
    })
}
function userinput() {
    let user = document.querySelector("#url")
    let title = document.getElementById("us")
    let uplode = document.querySelector(".user-input")
    uplode.addEventListener("click", () => {
        photo_gallary.unshift(user.value)
        names.unshift(us.value)
        alert("Uplod")

    })
}

let Refresh = (event)=> {
    event.preventDefault();
    return event.returnValue = "Are you sure you want to leave the page?";
  }
  window.addEventListener("beforeunload", Refresh, { capture: true });
let run=()=>{
    photonext()
   photoback()
   userinput()
   displayphoto()
}
run()








