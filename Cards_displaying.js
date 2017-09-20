var cards_C = document.getElementById('cards');
var card_id = 0;
function add_card(rank, color){
  if (rank === "K" || rank === "Q" || rank === "J" || rank === "Joker" || rank === "A" || rank > 2 || rank < 10){
  if (color === "spades" || color === "clubs" || color === "hearts" || color === "diamonds"){
  cards_C.innerHTML += "<div class=\"card\">" +
                        "<div class=\"rank\"><div id=\"card_rank_" + card_id + "\"></div></div>" +
                        "<div class=\"color\"><div id=\"card_color_" + card_id + "\"></div></div></div>";
  card_rank = document.getElementById("card_rank_" + card_id);
  card_rank.innerHTML += rank;
                          card_color = document.getElementById("card_color_" + card_id)
                          switch (color){
                            case 'spades':
                              card_color.innerHTML += "&#9824";
                              break;
                            case 'clubs':
                              card_color.innerHTML += "&#9827";
                              break;
                            case 'hearts':
                              card_color.style.color = "red";
                              card_color.innerHTML += "&#9829";
                              break;
                            case 'diamonds':
                              card_color.style.color = "red";
                              card_color.innerHTML += "&#9830";
                              break;
                          }
cards_C.innerHTML += "</div>";
card_id += 1;
return "Card successfully displayed. HTML card id: " + (card_id - 1);

}else{console.log("no such color as " + color);return 0;}
}else{console.log("no such rank as " + rank);return 0;}
}
