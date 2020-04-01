// Every card as a separate object
// https://en.wikipedia.org/wiki/Briscola
// Italian 40-card deck: 10x of: denari (coins), spade (swords), coppe (cups), bastoni (batons)
// Face cards: fante (knave), cavallo (knight), re (king)

// COINS

const twoOfCoins = {
    suit: 'coins',
    strength: 1,
    points: 0,
    imagePath: 'image-url',
    alt: 'Two of Coins'
  };
  
  const fourOfCoins = {
    suit: 'coins',
    strength: 2,
    points: 0,
    imagePath: 'image-url',
    alt: 'Four of Coins'
  };
  
  const fiveOfCoins = {
    suit: 'coins',
    strength: 3,
    points: 0,
    imagePath: 'image-url',
    alt: 'Five of Coins'
  };
  
  const sixOfCoins = {
    suit: 'coins',
    strength: 4,
    points: 0,
    imagePath: 'image-url',
    alt: 'Six of Coins'
  };
  
  const sevenOfCoins = {
    suit: 'coins',
    strength: 5,
    points: 0,
    imagePath: 'image-url',
    alt: 'Seven of Coins'
  };
  
  const knaveOfCoins = {
    suit: 'coins',
    strength: 6,
    points: 2,
    imagePath: 'image-url',
    alt: 'Knave of Coins'
  };
  
  const knightOfCoins = {
    suit: 'coins',
    strength: 7,
    points: 3,
    imagePath: 'image-url',
    alt: 'Knight of Coins'
  };
  
  const kingOfCoins = {
    suit: 'coins',
    strength: 8,
    points: 4,
    imagePath: 'image-url',
    alt: 'King of Coins'
  };
  
  const threeOfCoins = {
    suit: 'coins',
    strength: 9,
    points: 10,
    imagePath: 'image-url',
    alt: 'Three of Coins'
  };
  
  const aceOfCoins = {
    suit: 'coins',
    strength: 10,
    points: 11,
    imagePath: 'image-url',
    alt: 'Ace of Coins'
  };
  
  // SWORDS
  
  const twoOfSwords = {
    suit: 'swords',
    strength: 1,
    points: 0,
    imagePath: 'image-url',
    alt: 'Two of Swords'
  };
  
  const fourOfSwords = {
    suit: 'swords',
    strength: 2,
    points: 0,
    imagePath: 'image-url',
    alt: 'Four of Swords'
  };
  
  const fiveOfSwords = {
    suit: 'swords',
    strength: 3,
    points: 0,
    imagePath: 'image-url',
    alt: 'Five of Swords'
  };
  
  const sixOfSwords = {
    suit: 'swords',
    strength: 4,
    points: 0,
    imagePath: 'image-url',
    alt: 'Six of Swords'
  };
  
  const sevenOfSwords = {
    suit: 'swords',
    strength: 5,
    points: 0,
    imagePath: 'image-url',
    alt: 'Seven of Swords'
  };
  
  const knaveOfSwords = {
    suit: 'swords',
    strength: 6,
    points: 2,
    imagePath: 'image-url',
    alt: 'Knave of Swords'
  };
  
  const knightOfSwords = {
    suit: 'swords',
    strength: 7,
    points: 3,
    imagePath: 'image-url',
    alt: 'Knight of Swords'
  };
  
  const kingOfSwords = {
    suit: 'swords',
    strength: 8,
    points: 4,
    imagePath: 'image-url',
    alt: 'King of Swords'
  };
  
  const threeOfSwords = {
    suit: 'swords',
    strength: 9,
    points: 10,
    imagePath: 'image-url',
    alt: 'Three of Swords'
  };
  
  const aceOfSwords = {
    suit: 'swords',
    strength: 10,
    points: 11,
    imagePath: 'image-url',
    alt: 'Ace of Swords'
  };
  
  // CUPS
  
  const twoOfCups = {
    suit: 'cups',
    strength: 1,
    points: 0,
    imagePath: 'image-url',
    alt: 'Two of Cups'
  };
  
  const fourOfCups = {
    suit: 'cups',
    strength: 2,
    points: 0,
    imagePath: 'image-url',
    alt: 'Four of Cups'
  };
  
  const fiveOfCups = {
    suit: 'cups',
    strength: 3,
    points: 0,
    imagePath: 'image-url',
    alt: 'Five of Cups'
  };
  
  const sixOfCups = {
    suit: 'cups',
    strength: 4,
    points: 0,
    imagePath: 'image-url',
    alt: 'Six of Cups'
  };
  
  const sevenOfCups = {
    suit: 'cups',
    strength: 5,
    points: 0,
    imagePath: 'image-url',
    alt: 'Seven of Cups'
  };
  
  const knaveOfCups = {
    suit: 'cups',
    strength: 6,
    points: 2,
    imagePath: 'image-url',
    alt: 'Knave of Cups'
  };
  
  const knightOfCups = {
    suit: 'cups',
    strength: 7,
    points: 3,
    imagePath: 'image-url',
    alt: 'Knight of Cups'
  };
  
  const kingOfCups = {
    suit: 'swords',
    strength: 8,
    points: 4,
    imagePath: 'image-url',
    alt: 'King of Cups'
  };
  
  const threeOfCups = {
    suit: 'cups',
    strength: 9,
    points: 10,
    imagePath: 'image-url',
    alt: 'Three of Cups'
  };
  
  const aceOfCups = {
    suit: 'cups',
    strength: 10,
    points: 11,
    imagePath: 'image-url',
    alt: 'Ace of Cups'
  };
  
  // BATONS
  
  const twoOfBatons = {
    suit: 'batons',
    strength: 1,
    points: 0,
    imagePath: 'image-url',
    alt: 'Two of Batons'
  };
  
  const fourOfBatons = {
    suit: 'batons',
    strength: 2,
    points: 0,
    imagePath: 'image-url',
    alt: 'Four of Batons'
  };
  
  const fiveOfBatons = {
    suit: 'batons',
    strength: 3,
    points: 0,
    imagePath: 'image-url',
    alt: 'Five of Batons'
  };
  
  const sixOfBatons = {
    suit: 'batons',
    strength: 4,
    points: 0,
    imagePath: 'image-url',
    alt: 'Six of Batons'
  };
  
  const sevenOfBatons = {
    suit: 'batons',
    strength: 5,
    points: 0,
    imagePath: 'image-url',
    alt: 'Seven of Batons'
  };
  
  const knaveOfBatons = {
    suit: 'batons',
    strength: 6,
    points: 2,
    imagePath: 'image-url',
    alt: 'Knave of Batons'
  };
  
  const knightOfBatons = {
    suit: 'swords',
    strength: 7,
    points: 3,
    imagePath: 'image-url',
    alt: 'Knight of Batons'
  };
  
  const kingOfBatons = {
    suit: 'swords',
    strength: 8,
    points: 4,
    imagePath: 'image-url',
    alt: 'King of Batons'
  };
  
  const threeOfBatons = {
    suit: 'swords',
    strength: 9,
    points: 10,
    imagePath: 'image-url',
    alt: 'Three of Batons'
  };
  
  const aceOfBatons = {
    suit: 'batons',
    strength: 10,
    points: 11,
    imagePath: 'image-url',
    alt: 'Ace of Batons'
  };
  
  // A full deck array
  
  const deck = [
    twoOfCoins, fourOfCoins, fiveOfCoins, sixOfCoins, sevenOfCoins, knaveOfCoins, knightOfCoins, kingOfCoins, threeOfCoins, aceOfCoins,
    twoOfSwords, fourOfSwords, fiveOfSwords, sixOfSwords, sevenOfSwords, knaveOfSwords, knightOfSwords, kingOfSwords, threeOfSwords, aceOfSwords,
    twoOfCups, fourOfCups, fiveOfCups, sixOfCups, sevenOfCups, knaveOfCups, knightOfCups, kingOfCups, threeOfCups, aceOfCups,
    twoOfBatons, fourOfBatons, fiveOfBatons, sixOfBatons, sevenOfBatons, knaveOfBatons, knightOfBatons, kingOfBatons, threeOfBatons, aceOfBatons
  ];

  function deckBuilder(arrayOfCards) {
      return arrayOfCards.forEach(e => e.suit);
  }