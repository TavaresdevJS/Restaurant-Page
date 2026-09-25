// menu.js
export function createMenuPage() {
  const container = document.createElement('div');
  container.classList.add('menu-page');

  const heading = document.createElement('h1');
  heading.id = 'title';
  heading.textContent = 'Our Menu';
  container.appendChild(heading);

  return container;

  const menu = {
    Antipasti: [
      {
        name: 'Bruschetta',
        description:
          'Grilled country bread rubbed with garlic, topped with ripe tomatoes, basil, and a drizzle of olive oil.',
        price: '€9',
      },
      {
        name: 'Burrata',
        description:
          'Fresh, creamy burrata served with a touch of olive oil and cracked black pepper.',
        price: '€13',
      },
      {
        name: 'Carpaccio',
        description:
          'Thinly sliced raw beef dressed with lemon, olive oil, arugula, and shaved Parmesan.',
        price: '€15',
      },
    ],
    Primi: [
      {
        name: 'Linguine allo Scoglio',
        description:
          'Linguine tossed with a medley of fresh seafood in a light tomato and white wine sauce.',
        price: '€17',
      },
      {
        name: 'Spaghetti Carbonara',
        description:
          'The classic Roman pasta — guanciale, egg, Pecorino Romano, and cracked black pepper.',
        price: '€15',
      },
      {
        name: 'Tagliatelle al Ragù',
        description:
          'Hand-cut egg pasta with a slow-simmered beef and tomato ragù.',
        price: '€16',
      },
    ],
    Secondi: [
      {
        name: 'Bistecca alla Fiorentina',
        description:
          'Our signature dish and the heart of The Bisteca Restaurant — a generous bone-in T-bone, grilled rare over an open flame in the old Florentine way, seasoned with nothing more than coarse salt, cracked pepper, and a finish of Tuscan olive oil. Sliced tableside, meant to be shared.',
        price: '€62',
      },
      {
        name: 'Filetto alla parmigiana',
        description:
          'A tender breaded filet layered with tomato sauce and melted mozzarella until golden. Despite the Italian name, this one is 100% Brazilian — a beloved classic from home that earned a permanent spot on our menu.',
        price: '€20',
      },
      {
        name: 'Ossobuco alla Milanese',
        description:
          'Braised veal shank, slow-cooked until tender, finished with a bright gremolata of lemon zest, garlic, and parsley.',
        price: '€26',
      },
    ],
    Dolci: [
      {
        name: 'Budino di latte',
        description:
          'A silky milk pudding topped with a delicate caramel layer.',
        price: '€7',
      },
      {
        name: 'Cassata',
        description:
          'A traditional Sicilian sponge cake layered with sweet ricotta and candied fruit.',
        price: '€7',
      },
      {
        name: 'Tiramisù',
        description:
          'Espresso-soaked ladyfingers layered with mascarpone cream and a dusting of cocoa.',
        price: '€8',
      },
    ],
  };
}
