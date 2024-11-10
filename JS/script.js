let image = document.getElementsByTagName("img")[0];
let name_ch = document.querySelector("#name");
let user_del=document.querySelector(".user-del")
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
//TODO:NEXT PHOTO BUTTON
function photonext() {
    let next = document.querySelector(".next");
    next.addEventListener("click", (eobj) => {
        value++;
        if (value < photo_gallary.length) {
            let string = photo_gallary[value];
            let add = string.includes(".com") ? string : `../photos/${string}`;
            image.src = add;
            name_ch.textContent = names[value];
        } else {
            value = photo_gallary.length - 1;
            console.log(value);
        }
    });
}
//TODO:BACK PHOTO BUTTON
function photoback() {
    let back = document.querySelector(".back");
    back.addEventListener("click", (eobj) => {
        value--;
        if (value >= 0 && value < photo_gallary.length) {
            let string = photo_gallary[value];
            let add = string.includes(".com") ? string : `../photos/${string}`;
            image.src = add;
        } else {
            alert("nd");
            value = 0;
        }
    });
}
//TODO:Taking user images using URL
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
//TODO:deleting the LocalStorage
function delet() {
   photo_gallary.splice(value,1)
   names.splice(value,1)
   //TODO: UPDATING  Local Storage
   localStorage.setItem('photo_gallary', JSON.stringify(photo_gallary));
   localStorage.setItem('names', JSON.stringify(names));
    
}
user_del.addEventListener("click",delet)
let run = () => {
    photonext();
    photoback();
    userinput();

};
run();
