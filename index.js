// import templateCard from './cards.hbs'


fetch('https://pokeapi.co/api/v2/pokemon/2')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(pokemon => {
        console.log(pokemon);
        // const markup = templateCard(pokemon)
        // return markup
        // console.log(markup);
    })
    .catch(error => {
        console.log(error);
    });