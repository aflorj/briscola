// Every card as a separate object
// https://en.wikipedia.org/wiki/Briscola
// Italian 40-card deck: 10x of: denari (coins), spade (swords), coppe (cups), bastoni (batons)
// Face cards: fante (knave), cavallo (knight), re (king)

// COINS

const twoOfCoins = {
    suit: 'coins',
    strength: 1,
    points: 0,
    imagePath: '/images/twoOfCoins.jpg',
    alt: 'Two of Coins'
  };
  
  const fourOfCoins = {
    suit: 'coins',
    strength: 2,
    points: 0,
    imagePath: '/images/fourOfCoins.jpg',
    alt: 'Four of Coins'
  };
  
  const fiveOfCoins = {
    suit: 'coins',
    strength: 3,
    points: 0,
    imagePath: '/images/fiveOfCoins.jpg',
    alt: 'Five of Coins'
  };
  
  const sixOfCoins = {
    suit: 'coins',
    strength: 4,
    points: 0,
    imagePath: '/images/sixOfCoins.jpg',
    alt: 'Six of Coins'
  };
  
  const sevenOfCoins = {
    suit: 'coins',
    strength: 5,
    points: 0,
    imagePath: '/images/sevenOfCoins.jpg',
    alt: 'Seven of Coins'
  };
  
  const knaveOfCoins = {
    suit: 'coins',
    strength: 6,
    points: 2,
    imagePath: '/images/knaveOfCoins.jpg',
    alt: 'Knave of Coins'
  };
  
  const knightOfCoins = {
    suit: 'coins',
    strength: 7,
    points: 3,
    imagePath: '/images/knightOfCoins.jpg',
    alt: 'Knight of Coins'
  };
  
  const kingOfCoins = {
    suit: 'coins',
    strength: 8,
    points: 4,
    imagePath: '/images/kingOfCoins.jpg',
    alt: 'King of Coins'
  };
  
  const threeOfCoins = {
    suit: 'coins',
    strength: 9,
    points: 10,
    imagePath: '/images/threeOfCoins.jpg',
    alt: 'Three of Coins'
  };
  
  const aceOfCoins = {
    suit: 'coins',
    strength: 10,
    points: 11,
    imagePath: '/images/aceOfCoins.jpg',
    alt: 'Ace of Coins'
  };
  
  // SWORDS
  
  const twoOfSwords = {
    suit: 'swords',
    strength: 1,
    points: 0,
    imagePath: '/images/twoOfSwords.jpg',
    alt: 'Two of Swords'
  };
  
  const fourOfSwords = {
    suit: 'swords',
    strength: 2,
    points: 0,
    imagePath: '/images/fourOfSwords.jpg',
    alt: 'Four of Swords'
  };
  
  const fiveOfSwords = {
    suit: 'swords',
    strength: 3,
    points: 0,
    imagePath: '/images/fiveOfSwords.jpg',
    alt: 'Five of Swords'
  };
  
  const sixOfSwords = {
    suit: 'swords',
    strength: 4,
    points: 0,
    imagePath: '/images/sixOfSwords.jpg',
    alt: 'Six of Swords'
  };
  
  const sevenOfSwords = {
    suit: 'swords',
    strength: 5,
    points: 0,
    imagePath: '/images/sevenOfSwords.jpg',
    alt: 'Seven of Swords'
  };
  
  const knaveOfSwords = {
    suit: 'swords',
    strength: 6,
    points: 2,
    imagePath: '/images/knaveOfSwords.jpg',
    alt: 'Knave of Swords'
  };
  
  const knightOfSwords = {
    suit: 'swords',
    strength: 7,
    points: 3,
    imagePath: '/images/knightOfSwords.jpg',
    alt: 'Knight of Swords'
  };
  
  const kingOfSwords = {
    suit: 'swords',
    strength: 8,
    points: 4,
    imagePath: '/images/kingOfSwords.jpg',
    alt: 'King of Swords'
  };
  
  const threeOfSwords = {
    suit: 'swords',
    strength: 9,
    points: 10,
    imagePath: '/images/threeOfSwords.jpg',
    alt: 'Three of Swords'
  };
  
  const aceOfSwords = {
    suit: 'swords',
    strength: 10,
    points: 11,
    imagePath: '/images/aceOfSwords.jpg',
    alt: 'Ace of Swords'
  };
  
  // CUPS
  
  const twoOfCups = {
    suit: 'cups',
    strength: 1,
    points: 0,
    imagePath: '/images/twoOfCups.jpg',
    alt: 'Two of Cups'
  };
  
  const fourOfCups = {
    suit: 'cups',
    strength: 2,
    points: 0,
    imagePath: '/images/fourOfCups.jpg',
    alt: 'Four of Cups'
  };
  
  const fiveOfCups = {
    suit: 'cups',
    strength: 3,
    points: 0,
    imagePath: '/images/fiveOfCups.jpg',
    alt: 'Five of Cups'
  };
  
  const sixOfCups = {
    suit: 'cups',
    strength: 4,
    points: 0,
    imagePath: '/images/sixOfCups.jpg',
    alt: 'Six of Cups'
  };
  
  const sevenOfCups = {
    suit: 'cups',
    strength: 5,
    points: 0,
    imagePath: '/images/sevenOfCups.jpg',
    alt: 'Seven of Cups'
  };
  
  const knaveOfCups = {
    suit: 'cups',
    strength: 6,
    points: 2,
    imagePath: '/images/knaveOfCups.jpg',
    alt: 'Knave of Cups'
  };
  
  const knightOfCups = {
    suit: 'cups',
    strength: 7,
    points: 3,
    imagePath: '/images/knightOfCups.jpg',
    alt: 'Knight of Cups'
  };
  
  const kingOfCups = {
    suit: 'swords',
    strength: 8,
    points: 4,
    imagePath: '/images/kingOfCups.jpg',
    alt: 'King of Cups'
  };
  
  const threeOfCups = {
    suit: 'cups',
    strength: 9,
    points: 10,
    imagePath: '/images/threeOfCups.jpg',
    alt: 'Three of Cups'
  };
  
  const aceOfCups = {
    suit: 'cups',
    strength: 10,
    points: 11,
    imagePath: '/images/aceOfCups.jpg',
    alt: 'Ace of Cups'
  };
  
  // BATONS
  
  const twoOfBatons = {
    suit: 'batons',
    strength: 1,
    points: 0,
    imagePath: '/images/twoOfBatons.jpg',
    alt: 'Two of Batons'
  };
  
  const fourOfBatons = {
    suit: 'batons',
    strength: 2,
    points: 0,
    imagePath: '/images/fourOfBatons.jpg',
    alt: 'Four of Batons'
  };
  
  const fiveOfBatons = {
    suit: 'batons',
    strength: 3,
    points: 0,
    imagePath: '/images/fiveOfBatons.jpg',
    alt: 'Five of Batons'
  };
  
  const sixOfBatons = {
    suit: 'batons',
    strength: 4,
    points: 0,
    imagePath: '/images/sixOfBatons.jpg',
    alt: 'Six of Batons'
  };
  
  const sevenOfBatons = {
    suit: 'batons',
    strength: 5,
    points: 0,
    imagePath: '/images/sevenOfBatons.jpg',
    alt: 'Seven of Batons'
  };
  
  const knaveOfBatons = {
    suit: 'batons',
    strength: 6,
    points: 2,
    imagePath: '/images/knaveOfBatons.jpg',
    alt: 'Knave of Batons'
  };
  
  const knightOfBatons = {
    suit: 'swords',
    strength: 7,
    points: 3,
    imagePath: '/images/knightOfBatons.jpg',
    alt: 'Knight of Batons'
  };
  
  const kingOfBatons = {
    suit: 'swords',
    strength: 8,
    points: 4,
    imagePath: '/images/kingOfBatons.jpg',
    alt: 'King of Batons'
  };
  
  const threeOfBatons = {
    suit: 'swords',
    strength: 9,
    points: 10,
    imagePath: '/images/threeOfBatons.jpg',
    alt: 'Three of Batons'
  };
  
  const aceOfBatons = {
    suit: 'batons',
    strength: 10,
    points: 11,
    imagePath: "/images/aceOfBatons.jpg",
    alt: 'Ace of Batons'
  };
  
  // A full deck array
  
  const deck = [
    twoOfCoins, fourOfCoins, fiveOfCoins, sixOfCoins, sevenOfCoins, knaveOfCoins, knightOfCoins, kingOfCoins, threeOfCoins, aceOfCoins,
    twoOfSwords, fourOfSwords, fiveOfSwords, sixOfSwords, sevenOfSwords, knaveOfSwords, knightOfSwords, kingOfSwords, threeOfSwords, aceOfSwords,
    twoOfCups, fourOfCups, fiveOfCups, sixOfCups, sevenOfCups, knaveOfCups, knightOfCups, kingOfCups, threeOfCups, aceOfCups,
    twoOfBatons, fourOfBatons, fiveOfBatons, sixOfBatons, sevenOfBatons, knaveOfBatons, knightOfBatons, kingOfBatons, threeOfBatons, aceOfBatons
  ];

  function shuffleDeck(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}

let shuffledDeck = shuffleDeck(deck);

export { shuffledDeck };