
// ŁĄCZNOŚĆ Z BAZĄ

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2101',
  'X-Auth-Token': 'a1091ddf12e2bd2467c06ac20ed9b5ec'
};
$.ajaxSetup({
	headers: myHeaders
});
$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});
// Tworzenie kolumn
function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
		board.createColumn(col);
		setupCards(col, column.cards);
	});
}
//TWORZENIE KART
function setupCards(col, cards) {
	cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(card);
  	})
}