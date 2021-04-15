'use strict';

const getChars = () => {
    const charBox = document.querySelector('.char-box--wrapper');
    const charNumbers = 20;

    const getPokemon = async id => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const char = await res.json();
        console.log(char);
    }

    getPokemon(1);
}

export default getChars;