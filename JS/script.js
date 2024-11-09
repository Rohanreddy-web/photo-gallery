let image = document.getElementsByTagName("img")[0];
let name_ch = document.querySelector("#name");
let photo_gallary = ["luffy.jpg", "zoro.jpg", "sanji.jpg", "Nami.jpg", "Robin.jpg", "Usopp.jpg", "Tony.jpg", "frank.jpg", "jim.jpg", "brook.jpg", "end1.jpg"];
let names = ["Monkey D. Luffy", "Roronoa Zoro", "Vinsmoke Sanji", "Nami", "Nico Robin", "Usopp", "Tony Tony Chopper", "franky", "jinbei", "Brook", "THE END"];
//TODO:storing the data in the Local Storage
if (!localStorage.getItem('photo_gallary') || !localStorage.getItem('names')) {
    localStorage.setItem('photo_gallary', JSON.stringify(photo_gallary));
    localStorage.setItem('names', JSON.stringify(names));
} else {
    let sGallary = localStorage.getItem('photo_gallary');
    let sNames = localStorage.getItem('names');
//TODO: Updating the data from the  Local Storage
    photo_gallary = JSON.parse(sGallary);
    names = JSON.parse(sNames);
}
let value = -1;
function photonext() {
    let next = document.querySelector(".next");
    next.addEventListener("click", (eobj) => {
        value++;
        if (value < photo_gallary.length) {
            let string = photo_gallary[value];
            let add = string.includes(".com") ? string : `../photos/${string}`;
            image.src = add;
            name_ch.textContent = names[value];
            console.log(value);
        } else {
            value = photo_gallary.length - 1;
            console.log(value);
        }
    });
}
function photoback() {
    let back = document.querySelector(".back");
    back.addEventListener("click", (eobj) => {
        value--;
        if (value >= 0 && value < photo_gallary.length) {
            let string = photo_gallary[value];
            let add = string.includes(".com") ? string : `../photos/${string}`;
            image.src = add;
            name_ch.textContent = names[value];
        } else {
            alert("nd");
            value = 0;
        }
    });
}
function userinput() {
    let user = document.querySelector("#url");
    let title = document.getElementById("us");
    let upload = document.querySelector(".user-input");
    upload.addEventListener("click", () => {
        photo_gallary.unshift(user.value);  
        names.unshift(title.value);
        //TODO: TAKING USER IMAGES AND NAMES AND UPDATING  Local Storage
        localStorage.setItem('photo_gallary', JSON.stringify(photo_gallary));
        localStorage.setItem('names', JSON.stringify(names));
        alert("Uploaded");
    });
}
let run = () => {
    photonext();
    photoback();
    userinput();
};
run();
