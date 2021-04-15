window.addEventListener('DOMContentLoaded', () => {
    console.log('GODNESS!!!');
    const charBox = document.querySelector('.char-box--wrapper');
    const charNumbers = 20;

    const COLORS = {
        fire: '#FF5300',
        grass: '#FF5300',
        electric: '#5ED1BA',
        water: '#1240AB',
        ground: '#A64B00',
        rock: '#6A8D8D',
        fairy: '#6AFF00',
        poison: '#00FF00',
        bug: '#BC00FF',
        dragon: '#FFE340',
        physic: '#FF40FF',
        flying: '#69C9BC',
        fighting: '#A60004',
        normal: '#FFFFFF'
    };

    const COLORS_KEYS = Object.keys(COLORS);
    const COLORS_VALUES = Object.values(COLORS);


    const fetchPokemon = async () => {
        for (let i = 1; i <= charNumbers; i++) {
            await getPokemon(i);
        }
    }

    const getPokemon = async id => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const char = await res.json();
        createCharCard(char, id);
    }

    function createCharCard(char, id) {
        const charContainer = document.createElement('div');
        charContainer.classList.add(`char-box__item`);

        const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

        const types = char.types.map(type => type.type.name);

        const ul = document.createElement('ul');
        ul.classList.add('menu-types');

        types.forEach(item => {
            const li = document.createElement('li');
            li.classList.add(`${item}`);

            if (Object.keys(COLORS).includes(item)) {
                let bgColor = COLORS[item];
                li.style.backgroundColor = `${bgColor}`
            } else {
                return false;
            }

            li.textContent = `${item}`;
            ul.append(li);
        });
        // console.log(MAIN_COLORS.keys);

        // console.log(ul);

        charContainer.innerHTML = `
            <div class="img--wrapper">
                <img src=${imgURL}>
            </div>
            <h3>${char.name[0].toUpperCase() + char.name.slice(1)}</h3>
        `;

        charContainer.append(ul);

        charBox.append(charContainer);
    }

    fetchPokemon();

});