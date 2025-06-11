const pets = [
    {
        "name": "Buddy",
        "type": "Dog",
        "age": 3,
        "img": "image/dogs/dog02.jpg"
    },
    {
        "name": "Whiskers",
        "type": "Cat",
        "age": 2,
        "img": "image/cats/cat02.jpg"
    },
    {
        "name": "Charlie",
        "type": "Bird",
        "age": 1,
        "img": "image/birds/bird02.jpg"
    },
    {
        "name": "Coco",
        "type": "Capybara",
        "age": 4,
        "img": "image/capybaras/capybara02.jpg"
    }
]

for(let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    const petDiv = document.getElementById('pet-list')
                    .appendChild(document.createElement('div'));
    petDiv.className = 'pet';
    petDiv.innerHTML = `
        <img src="${pet.img}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
    `;
}