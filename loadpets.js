const pets = [
    {
        "name": "Buddy",
        "type": "Dog",
        "age": 3,
        "img": "image/dogs/dog02.jpg"
    },
    {
        "name": "cheese",
        "type": "Dog",
        "age": 5,
        "img": "image/dogs/dog01.jpg"
    },
    {
        "name": "Whiskers",
        "type": "Cat",
        "age": 2,
        "img": "image/cats/cat02.jpg"
    },
    {
        "name": "Mittens",
        "type": "Cat",
        "age": 4,
        "img": "image/cats/cat01.jpg"
    },
    {
        "name": "Goldie",
        "type": "Bird",
        "age": 2,
        "img": "image/birds/bird01.jpg"
    },
    {
        "name": "Charlie",
        "type": "Bird",
        "age": 1,
        "img": "image/birds/bird02.jpg"
    },
    {
        "name": "Poffy",
        "type": "Capybara",
        "age": 3,
        "img": "image/capybaras/capybara01.jpg"
    },
    {
        "name": "Coco",
        "type": "Capybara",
        "age": 4,
        "img": "image/capybaras/capybara02.jpg"
    }
]

function loadPets() {
  console.log("Loading pets...");
  const petList = $("#pet-list");
  pets.forEach((pet) => {
    const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn">Adopt Now</button>
    `);
    petList.append(petItem);
  });

  // Attach click handler using event delegation
  petList.on("click", ".adopt-btn", adoptPet);

  // install event handler for pet type
  $('input[name="pet-type"]').on("change", function () {
    const selectedType = $(this).val();
    filterPets();

  });
}

function filterPets() {

  console.log("Selected pet type:", $('input[name="pet-type"]:checked'));
  const types = $('input[name="pet-type"]:checked')
    .map(function () {
      return $(this).val();
    })
    .get();

  console.log(types);

  const filteredPets = pets.filter((pet) => types.includes(pet.type));
  console.log(filteredPets);

  const petList = $("#pet-list");
  petList.empty(); // Clear the existing pets
  filteredPets.forEach((pet) => {
    const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn">Adopt Now</button>
    `);
    petList.append(petItem);
  });
}

$(document).ready(loadPets);