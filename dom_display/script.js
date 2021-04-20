const getAndDisplayFilms = () => {
    const url = "https://ghibliapi.herokuapp.com/films"
    console.log("Working")
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            displayFilms(json)

        })
}

const displayFilms = (films) => {
    const wrapper = document.getElementById("results") //This is grabbing the wrapper
    //This will do the code block for each film item
    for (let film of films) {
        //Creates three new tages
        let card = document.createElement("div")
        let card_header = document.createElement("div")
        let card_body = document.createElement("div")
        //gives each tag a class / inner text
        card.className = "card"
        card_header.className = "card-header"
        card_body.className = "card-body"
        card_header.innerText = `${film.title} ${film.release_date}`
        card_body.innerText = film.description
        //Adding the inner divs to the card
        card.appendChild(card_header)
        card.appendChild(card_body)
        wrapper.appendChild(card) //Adding a card to the container/wrapper
    }
}

let onClickButton = document.getElementById("testing-onclick")
onClickButton.onclick = getAndDisplayFilms








