var rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suit = ["clubs", "diamonds", "hearts", "spades"];
var taken_cards = new Array(52);
class DeckOfCards {
    //  Summary:
    //      This class represents a deck of cards.
    //  Constructor:
    //      DeckOfCards(int n, bool shuffle) - constructs a deck of cards combined from n decks, shuffled or not
    //  Public API:
    //      Shuffle() - shuffles the remaining cards in the deck
    //      Take(int n) - get n cards from the deck
    //      IsEmpty - are there any cards in the deck?

    constructor(n, shuffle){
      this.cards = new Array(n);

      //tbd -- rand / enum?

      for(var i = 0, i < n, i++){
        this.cards[i] = new Card(color, suit);
      }

    }

    Shuffle(){
      let temp_cards = new Array[this.cards.length]
      //tbd -- shuffle type
    }


    Take(n){
      let num = this.cards.length;
      if (n > num){
        return "You want to take too many cards. " + num + " cards left in the " + this.name + " deck.";
      }else{
        for(var i = 0, i < n, i++){
        taken_cards.push(this.cards.pop)
        }
      }
    }


    IsEmpty(v){
      let num = this.cards.length;
      if (typeof (v) == "undefined"){
        if (num != 0){
          return false;
        }else{
          return true;
        }
      }else{
        if(num == 1){
          return "There is still one card in the " + this.name + " deck.";
        }else if(num > 1){
          return "There are still " + num + " cards in the " + this.name + " deck.";
        }
      }
    }


}
