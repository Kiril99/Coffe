var sum = Number(prompt("Веддите сумму денег от 0 до 20 грн."));


var Cola = 10;
var Sandora = 15;
var Coffe = 5;

var cocteil = prompt("Выиберите напиток: Cola = 10грн. Coffe = 5грн, Sandora = 15грн.");

	switch(cocteil) {
	case 'Cola' : 
		if (Cola===sum ) {
			alert("Вы заказали Cola!");
			break;
		
		}else if(Cola<sum){
			var sum = sum - Cola;
			alert("Вы заказали Cola, заберите вашу сдачу " + sum + "грн");
			
			break;

		}else if(Cola>sum){
			alert("Внесите большуюю суму!");

			break;
		}
		case 'Coffe' : 
		if (Coffe===sum ) {
			alert("Вы заказали Coffe!");
			break;
		
		}else if(Coffe<sum){
			var sum = sum - Coffe;
			alert("Вы заказали Coffe, заберите вашу сдачу " + sum + "грн");
			break;

		}else if(Coffe>sum){
			alert("Внесите большуюю суму!");
			
		}
		case 'Sandora' : 
		if (Sandora===sum ) {
			alert("Вы заказали Sandora!");
			break;
		
		}else if(Sandora<sum){
			var sum = sum - Sandora;
			alert("Вы заказали Sandora, заберите вашу сдачу " + sum + "грн");
			break;

		}else if(Sandora>sum){
			alert("Внесите большуюю суму!");
			
		}
}



