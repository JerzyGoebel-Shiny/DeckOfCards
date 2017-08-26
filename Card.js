class Card {
    //  Summary:
    //      Represents a single card
    //  Constructor:
    //      Card(Color c, Suite s) - constructs a new Card instance
    //  Public API:
    //      Color - returns the color of the card
    //      Suit - returns the suid of the card

    constructor(Color, Suit){
      this.Color = Color;
      this.Suit = Suit;
    }

    get Color(){
      return this.Color;
    }
    get Suite(){
      return this.Suit;
    }
}
