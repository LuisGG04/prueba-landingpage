const moreIcon = document.querySelectorAll(".icon__slide");
const paragraph = document.querySelectorAll(".question__paragraph");

for (let i = 0; i < moreIcon.length; i++) {

    const icon = moreIcon[i];

    icon.addEventListener('click', () => {
        paragraph[i].classList.toggle("desactived")
        if (icon.innerHTML == '-') {
            icon.innerHTML = '+'
        } else {
            icon.innerHTML = '-'
        }
    })
    
}

// icon.addEventListener("click", () => {
//     if(icon.src.includes("min.svg")){
//         icon.src = "./css/images/plus.svg"
//     }else{
//         icon.src = "./css/images/min.svg"
//     }
// })

const img = document.getElementById("img");
const characterName = document.getElementById("characterName");
const gender = document.getElementById("gender");
const chapters = document.getElementById("chapters");

fetch("https://rickandmortyapi.com/api/character/2")
    .then(resp => resp.ok ? Promise.resolve(resp) : Promise.reject(resp))
    .then(resp => resp.json())
    .then(resp => {

        img.setAttribute("src", `${resp.image}`)
        characterName.innerHTML = `Nombre: ${resp.name}`
        gender.innerHTML = `Género: ${resp.gender}`

        for (let i = 0; i < 5; i++) {
            const episode = document.createElement('li');
            episode.setAttribute('class', 'episode');
            episode.textContent = resp.episode[i];
            chapters.append(episode);
        }
    })

    .catch(console.warn());