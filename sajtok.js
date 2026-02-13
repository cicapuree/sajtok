const sajtok = [
    {
        id: 1,
        nev: "Mozzarella",
        kepUrl: "mozzarella.png",
        leiras: "Absolute number one! Bármikor bármilyen formában falnám. Kedvencem."
    },
    {
        id: 2, 
        nev: "Cottage",
        kepUrl: "cottage.png",
        leiras: "Először nem is tudtam, hogy ez tényleg sajtnak számít. Ez is fini."
    },
    {
        id: 3,
        nev: "Cheddar",
        kepUrl: "cheddar.png",
        leiras: "Magában kicsit erős az íze, de mindenféle ételben nagyon finom."
    },
    {
        id: 4,
        nev: "Camembert",
        kepUrl: "camembert.png",
        leiras: "Omnomnom. Finom, imádom a puha sajtokat!"
    },
    {
        id: 5,
        nev: "Brie",
        kepUrl: "brie.png",
        leiras: "GIVE IT TO ME RACHEL!! GIVE ME 14 OF THEM RN!!!"
    },
    {
        id: 6,
        nev: "Feta",
        kepUrl: "feta.png",
        leiras: "Underrrated! Oliva bogyóval a legjobb."
    },
    {
        id: 7,
        nev: "Roquefort",
        kepUrl: "blue.png",
        leiras: "Amúgy finom, addig, amíg az agyad nem realizálja, hogy penészt eszel. Olvasztva és szószokban a legjobb."
    },
    {
        id: 8,
        nev: "Edami",
        kepUrl: "emental.png",
        leiras: "Szeri ezt is :3."
    }
];


const container = document.getElementById('sajt-container');


sajtok.forEach(sajt => {

    const kartya = document.createElement('div');
    kartya.className = 'sajt-kartya';
    kartya.innerHTML = `
        <img src="${sajt.kepUrl}" alt="${sajt.nev}" class="sajt-kep">
        <h3>${sajt.nev}</h3>
    `;
    

    kartya.addEventListener('click', () => {
        megjelenitSajtReszletek(sajt);
    });
    
  
    container.appendChild(kartya);
});

function megjelenitSajtReszletek(kivalasztottSajt) {
  
    const osszesKartya = document.querySelectorAll('.sajt-kartya');
    osszesKartya.forEach(kartya => {
        const kep = kartya.querySelector('.sajt-kep');
        const nev = kartya.querySelector('h3');
        if (kep) kep.style.display = 'none';
        if (nev) nev.style.display = 'none';
    });
    
    document.getElementById('modal-cim').textContent = kivalasztottSajt.nev;
    document.getElementById('modal-kep').src = kivalasztottSajt.kepUrl;
    document.getElementById('modal-leiras').textContent = kivalasztottSajt.leiras;
    
    document.getElementById('sajt-modal').style.display = 'flex';
}


function bezarModal() {
    document.getElementById('sajt-modal').style.display = 'none';
    

    const osszesKartya = document.querySelectorAll('.sajt-kartya');
    osszesKartya.forEach(kartya => {
        const kep = kartya.querySelector('.sajt-kep');
        const nev = kartya.querySelector('h3');
        if (kep) kep.style.display = 'block';
        if (nev) nev.style.display = 'block';
    });
}


document.querySelector('.close').addEventListener('click', bezarModal);


document.getElementById('sajt-modal').addEventListener('click', (esemeny) => {
    if (esemeny.target === document.getElementById('sajt-modal')) {
        bezarModal();
    }

});
