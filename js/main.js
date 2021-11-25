const questions = () => {
    const titleQuestions = [...document.querySelectorAll(".questions__title")];

    titleQuestions.forEach(question => {
        question.addEventListener("click", () => {
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle("questions__padding--add");
            question.children[0].classList.toggle("question__arrow--rotate");

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`
        });
    });
};

questions()

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