var rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suit = ["clubs", "diamonds", "hearts", "spades"];
var taken_cards = new Array();
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
      for(var i = 0; i < n; i++){
        for(var j = 0; j < 4; j++){
          for(var k = 0; k < rank.length ; k++){
            if(typeof(this.cards[0]) == "undefined"){
          this.cards[0] = new Card(rank[k], suit[j]);
        }else{
          this.cards.push(new Card(rank[k], suit[j]));
        }
          }
        }
      }
      if(shuffle){
        //2 might do just fine
        this.Shuffle(1);
      }
    }

    Shuffle(power){
      //we need to go deeper
      for (var i = 0; i < power; i++){
        for (var j = 0; j<this.cards.length; j++){
          let rnd = Randomize();
          let tmp;
          tmp = this.cards[j];
          this.cards[j] = this.cards[rnd];
          this.cards[rnd] = tmp;
        }
      }
    }


    Take(n){
      let num = this.cards.length;
      if (n > num){
        return "You want to take too many cards. " + num + " cards left in this deck.";
      }else{
        for(var i = 0; i < n; i++){
        taken_cards.push(this.cards.pop())
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
          return "There is still one card in this deck.";
        }else if(num > 1){
          return "There are still " + num + " cards in this deck.";
        }else if(num == 0){
          return "This deck is empty.";
        }
      }
    }

}

function Randomize(){
  return (Math.random() * (50) + 1).toFixed(0);
}
