// un diaporama

var slide = new Array("myslide","saib","dadi","superhero");
var numero = 0;
var sousNum;
function ChangeSlide(sens) {
    numero = numero + sens;
    sousNum = numero - sens;
    document.getElementById(slide[sousNum]).style.display = "none";
    if (numero < 0){
        numero = slide.length - 1;
    }
    if (numero > slide.length - 1){
        numero = 0;
    }
    // document.getElementById("slide").src = slide[numero];
    slider()
}

function slider() {
    document.getElementById(slide[numero]).style.display = "unset";
}
function partDefaut() {
    document.getElementById(slide[0]).style.display = "unset";
}











// // un diaporama ou slider


// const diapo = document.querySelector(".slider");
//  elements = document.querySelector(".contents");
//  slides = array.from(contents.children);
// let next = document.querySelector("next");
// let previous = document.querySelector("previous");

// // variable globales

// let compteur = 0;  let timer, elements, sildes, slides, slideWidth

// //calcul de la valeur visible du diaporama
// slideWidth = diapo.getBoundingClientRect().width;

// //ajout des evenements sur les fleches

// next.addEventListener("click", slideNext)
// previous.addEventListener("click", slidePrev)

// //ecrivons la fonction de defilement du diaporama

// function slideNext(){
//     compteur++

//     if(compteur == slides.length){
//         compteur = 0
//     }
//     let decal = -slideWidth * compteur;
//     elements.style.transform = 'translateX(${decal}px)';
// }

// function slidePrev(){
//     compteur--

//     if(compteur < 0){
//         compteur = slides.length - 1
//     }
//     let decal = -slideWidth * compteur;
//     elements.style.transform = 'translateX(${decal}px)';
// }


