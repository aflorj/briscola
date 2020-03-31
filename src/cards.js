// Every card as a sepparate object
// https://en.wikipedia.org/wiki/Briscola
// Italian 40-card deck: 10x of: denari (coins), spade (swords), coppe (cups), bastoni (batons)
// Face cards: fante (knave), cavallo (knight), re (king)

// coins

const twoOfCoins = {
    suit: 'coins',
    strength: 1,
    points: 0,
    image: 'image-path',
    alt: 'Two of Coins'
};

const fourOfCoins = {
    suit: 'coins',
    strength: 2,
    points: 0,
    image: 'image-path',
    alt: 'Four of Coins'
};

const fiveOfCoins = {
    suit: 'coins',
    strength: 3,
    points: 0,
    image: 'image-path',
    alt: 'Five of Coins'
};

const sixOfCoins = {
    suit: 'coins',
    strength: 4,
    points: 0,
    image: 'image-path',
    alt: 'Six of Coins'
};

const sevenOfCoins = {
    suit: 'coins',
    strength: 5,
    points: 0,
    image: 'image-path',
    alt: 'Seven of Coins'
};

const knaveOfCoins = {
    suit: 'coins',
    strength: 6,
    points: 2,
    image: 'image-path',
    alt: 'Knave of Coins'
};

const knightOfCoins = {
    suit: 'coins',
    strength: 7,
    points: 3,
    image: 'image-path',
    alt: 'Knight of Coins'
};

const kingOfCoins = {
    suit: 'coins',
    strength: 8,
    points: 4,
    image: 'image-path',
    alt: 'King of Coins'
};

const threeOfCoins = {
    suit: 'coins',
    strength: 9,
    points: 10,
    image: 'image-path',
    alt: 'Three of Coins'
};

const aceOfCoins = {
    suit: 'coins',
    strength: 10,
    points: 11,
    image: 'image-path',
    alt: 'Ace of Coins'
};

// swords

const twoOfSwords = {
    suit: 'swords',
    strength: 1,
    points: 0,
    image: 'image-path',
    alt: 'Two of Swords'
};

const fourOfSwords = {
    suit: 'swords',
    strength: 2,
    points: 0,
    image: 'image-path',
    alt: 'Four of Swords'
};

const fiveOfSwords = {
    suit: 'swords',
    strength: 3,
    points: 0,
    image: 'image-path',
    alt: 'Five of Swords'
};

const sixOfSwords = {
    suit: 'swords',
    strength: 4,
    points: 0,
    image: 'image-path',
    alt: 'Six of Swords'
};

const sevenOfSwords = {
    suit: 'swords',
    strength: 5,
    points: 0,
    image: 'image-path',
    alt: 'Seven of Swords'
};

const KnaveOfSwords = {
    suit: 'swords',
    strength: 6,
    points: 2,
    image: 'image-path',
    alt: 'Knave of Swords'
};

const knightOfSwords = {
    suit: 'swords',
    strength: 7,
    points: 3,
    image: 'image-path',
    alt: 'Knight of Swords'
};

const kingOfSwords = {
    suit: 'swords',
    strength: 8,
    points: 4,
    image: 'image-path',
    alt: 'King of Swords'
};

const threeOfSwords = {
    suit: 'swords',
    strength: 9,
    points: 10,
    image: 'image-path',
    alt: 'Three of Swords'
};

const aceOfSwords = {
    suit: 'swords',
    strength: 10,
    points: 11,
    image: 'image-path',
    alt: 'Ace of Swords'
};

// cups

const twoOfCups = {
    suit: 'cups',
    strength: 1,
    points: 0,
    image: 'image-path',
    alt: 'Two of Cups'
};

const fourOfCups = {
    suit: 'cups',
    strength: 2,
    points: 0,
    image: 'image-path',
    alt: 'Four of Cups'
};

const fiveOfCups = {
    suit: 'cups',
    strength: 3,
    points: 0,
    image: 'image-path',
    alt: 'Five of Cups'
};

const sixOfCups = {
    suit: 'cups',
    strength: 4,
    points: 0,
    image: 'image-path',
    alt: 'Six of Cups'
};

const sevenOfCups = {
    suit: 'cups',
    strength: 5,
    points: 0,
    image: 'image-path',
    alt: 'Seven of Cups'
};

const KnaveOfCups = {
    suit: 'cups',
    strength: 6,
    points: 2,
    image: 'image-path',
    alt: 'Knave of Cups'
};

const knightOfCups = {
    suit: 'cups',
    strength: 7,
    points: 3,
    image: 'image-path',
    alt: 'Knight of Cups'
};

const kingOfCups = {
    suit: 'swords',
    strength: 8,
    points: 4,
    image: 'image-path',
    alt: 'King of Cups'
};

const threeOfCups = {
    suit: 'cups',
    strength: 9,
    points: 10,
    image: 'image-path',
    alt: 'Three of Cups'
};

const aceOfCups = {
    suit: 'cups',
    strength: 10,
    points: 11,
    image: 'image-path',
    alt: 'Ace of Cups'
};

// batons

const twoOfBatons = {
    suit: 'batons',
    strength: 1,
    points: 0,
    image: 'image-path',
    alt: 'Two of Batons'
};

const fourOfBatons = {
    suit: 'batons',
    strength: 2,
    points: 0,
    image: 'image-path',
    alt: 'Four of Batons'
};

const fiveOfBatons = {
    suit: 'batons',
    strength: 3,
    points: 0,
    image: 'image-path',
    alt: 'Five of Batons'
};

const sixOfBatons = {
    suit: 'batons',
    strength: 4,
    points: 0,
    image: 'image-path',
    alt: 'Six of Batons'
};

const sevenOfBatons = {
    suit: 'batons',
    strength: 5,
    points: 0,
    image: 'image-path',
    alt: 'Seven of Batons'
};

const KnaveOfBatons = {
    suit: 'batons',
    strength: 6,
    points: 2,
    image: 'image-path',
    alt: 'Knave of Batons'
};

const knightOfBatons = {
    suit: 'swords',
    strength: 7,
    points: 3,
    image: 'image-path',
    alt: 'Knight of Batons'
};

const kingOfBatons = {
    suit: 'swords',
    strength: 8,
    points: 4,
    image: 'image-path',
    alt: 'King of Batons'
};

const threeOfBatons = {
    suit: 'swords',
    strength: 9,
    points: 10,
    image: 'image-path',
    alt: 'Three of Batons'
};

const aceOfBatons = {
    suit: 'batons',
    strength: 10,
    points: 11,
    image: 'image-path',
    alt: 'Ace of Batons'
};