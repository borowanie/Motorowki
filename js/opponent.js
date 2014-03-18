

function GenOpponentBoard(){
	right = document.getElementById("right");

	CreateBoard();
}

function CreateBoard(){
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    tmp = 0;
    var strInputstring = " ABCDEFGHIJ"
        for (var j = 0; j <= 10; j++) {

            var row = document.createElement("tr");
            if (j==0) {
            	for (var i = 0; i < 10; i++) {
            		var cell = document.createElement("td");    
	             	var cellContent = document.createTextNode(tmp++);
	                cell.appendChild(cellContent);
	                row.appendChild(cell);
            	};
            tblBody.appendChild(row);
            }else{
	            for (var i = 0; i < 10; i++) {
	             	var cell = document.createElement("td");    
	             	if (i==0) {
	             		var cellContent = document.createTextNode(strInputstring.charAt(j));
	             	}else{
	             		var cellContent = document.createElement("input");
	             		cellContent.setAttribute("type","button");
	             		a = j-1;
	             		b = i-1;
	             		cellContent.setAttribute("id","op:"+a+'.'+b);
	             		cellContent.setAttribute("style","width: 24px;");
	             		cellContent.setAttribute("onclick","SendFire(this.id)");
	             		
	             		if (currentPlayer==1) {
	             			cellContent.disabled = false;
	             		}else{
	             			cellContent.disabled = true;
	             		}
	             		
	             	}
	                cell.appendChild(cellContent);
	                row.appendChild(cell);
	            }
            tblBody.appendChild(row);
        	}
        }
        tbl.appendChild(tblBody);

       	right.appendChild(tbl);
        tbl.setAttribute("border", "2");
}

function SendFire(mleko){
	var hit = document.getElementById(mleko);
	if (IfHit(mleko[3],mleko[5])) {
		hit.setAttribute("value","X");
		
	}else{
		hit.setAttribute("value","•");
		//hit.setAttribute("style","background-image:url('gfx/mishit.png');width:24px;background-size:24px 24px;")
	};
}

function IfHit(y,x){
	$.ajax({
			url: 'ajax/checkShipHit.php', 
			type: 'POST',
			data: {x: tmp_x, y:tmp_y},
	}).completer(function(e){
		//funkcja przy okazjii zmienia aktualnie grajacego gracze w tabeli pole "current" czyli jesli gramy 1 graczem i klikniemy sobie w (d,4) to jesli w tablicy przeciwnika (4,4) jest statek funkcja zwraca nam true; i nie zmieniamy aktualnego gracza, ale gry nie trafimy, zmienia nam sie aktualny gracz.
		var tmp_isHitted = e.responseText;
		if(tmp_isHitted){ //sprawdzenie czy trafilismy czy nie
			return 1;
		}else{
			return 0;
			closeButtons();
		}
	});
}

function closeButtons(){
	for (var j = 0; j <= 9; j++) {
		for (var i = 0; i < 9; i++) {
			var bt = document.getElementById(j+"."+i);
			bt.disabled = true;
		}
	}
}