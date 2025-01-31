// Array of Temple Objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Additional temples
    {
      templeName: "San Diego California",
      location: "San Diego, California, United States",
      dedicated: "1993, April, 25",
      area: 72000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-48991.jpg"
    },
    {
      templeName: "Salt Lake City Utah",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-5365.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 40000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3509.jpg"
    }
  ];
  
  // Function to create a temple card
  function createTempleCard(temple) {
      const card = document.createElement('figure');
      card.className = 'gallery-item';
  
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = 'lazy';
  
      const caption = document.createElement('figcaption');
      caption.innerHTML = `<strong>${temple.templeName}</strong><br>${temple.location}<br>Dedicated: ${temple.dedicated}<br>Area: ${temple.area} sq ft`;
  
      card.appendChild(img);
      card.appendChild(caption);
  
      return card;
  }
  
  // Function to display temples based on filter
  function displayTemples(filter) {
      const gallery = document.getElementById('gallery');
      gallery.innerHTML = ''; // Clear the gallery
  
      const filteredTemples = temples.filter(temple => {
          const year = new Date(temple.dedicated).getFullYear();
          if (filter === 'old') return year < 1900;
          if (filter === 'new') return year > 2000;
          if (filter === 'large') return temple.area > 90000;
          if (filter === 'small') return temple.area < 10000;
          return true; // 'all' or no filter
      });
  
      filteredTemples.forEach(temple => {
          gallery.appendChild(createTempleCard(temple));
      });
  }
  
  // Initial display of all temples
  displayTemples('all');
  
  // Exibir o ano atual e a última modificação
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
  
  function toggleMenu() {
      const menu = document.querySelector(".menu");
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }
  
  // Garante que o menu é exibido corretamente ao redimensionar
  window.addEventListener("resize", () => {
      const menu = document.querySelector(".menu");
      const hamburger = document.querySelector(".hamburger");
  
      if (window.innerWidth >= 600) {
          menu.style.display = "flex"; // Mostra o menu em telas maiores
          hamburger.style.display = "none"; // Esconde o botão hambúrguer
      } else {
          menu.style.display = "none"; // Oculta o menu em telas menores
          hamburger.style.display = "block"; // Exibe o botão hambúrguer
      }
  });