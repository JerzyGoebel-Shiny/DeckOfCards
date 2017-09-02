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

    Color(){
      return this.Color;
    }
    Suite(){
      return this.Suit;
    }
}
