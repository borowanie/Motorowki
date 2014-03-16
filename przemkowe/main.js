function main () {
	temparr = []; //zmienna tylko do usuwania śladów
	lasttemp = 0;//podobnie jak wyzej
	shipLength=0;
	shiptmp = 0;
	createArray();
	createTable();
	createShipButtons();
	left = document.getElementById("left");
}

function createArray(){
	sendarr = new Array(10);
	for (var i = 0; i < sendarr.length; i++) {
	    sendarr[i] = new Array(10);
	    for(var j = 0; j < sendarr[i].length; j++ ) {
	       sendarr[i][j] = "0";
	    }
	}
}


function createShipButtons(){
	settings = document.getElementById("playerSettings");
	var tmp = "X";
	for (var i = 1; i <= 5; i++) {
		var ship = document.createElement("input");
		ship.setAttribute("type","button");
		ship.setAttribute("id",i);
		ship.setAttribute("value",tmp);
		ship.setAttribute("onclick","setShip(this.id)");
		
		var p = document.createElement("p");
		settings.appendChild(p);
		settings.appendChild(ship);
		tmp = tmp+"X";
	};

		gen = document.createElement("input");
		gen.setAttribute("type","button");
		gen.setAttribute("id","bt-generuj");
		gen.setAttribute("value","Zatwierdź");
		gen.setAttribute("onclick","sendShip()");
		gen.disabled = true;

		var p = document.createElement("p");
		settings.appendChild(p);
		settings.appendChild(gen);
}

function sendShip(){
		//Tu ma byc wysyłanie tablicy sendarr, jak to można wywołać, to jakieś statki są już postawione (na razie przynajmniej jeden)
		GenOpponentBoard();
}

function createTable(){
	var playerTable = document.getElementById("playerTable");
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
	             		cellContent.setAttribute("id",a+'.'+b);
	             		cellContent.setAttribute("style","width: 24px;");
	             		cellContent.setAttribute("onclick","shipClick(this.id)");
	             		cellContent.disabled = true;
	             	}
	                cell.appendChild(cellContent);
	                row.appendChild(cell);
	            }
            tblBody.appendChild(row);
        	}
        }
        tbl.appendChild(tblBody);

        playerTable.appendChild(tbl);
        tbl.setAttribute("border", "2");
}

function setShip(tmp){
	//console.log(tmp);
	clearShadow();
	shipLength = tmp;
	for (var j = 0; j <= 9; j++) {
		for (var i = 0; i < 9; i++) {
			var bt = document.getElementById(j+"."+i);
			bt.disabled = false;
		}
	}
	
}

function shipClick(aa){

	shiptmp = aa;
	for (var j = 0; j <= 9; j++) {
		for (var i = 0; i < 9; i++) {
			var bt = document.getElementById(j+"."+i);
			bt.disabled = true;
		}
	}
	console.log(shipLength);
	if (shipLength>0) {
		shipLength--;
		var y = aa.charAt(0);
		var x = aa.charAt(2);

		var tmp  = document.getElementById(aa);
		tmp.setAttribute("style","background-Color:#556;width: 24px;");
		if (shipLength>0) {
			if (y>shipLength-1) {
				var bb = y-1+"."+x;
				var means = document.getElementById(bb);
				temparr.push(bb);
				means.disabled = false;
				means.setAttribute("style","background-Color:#357EC7;width: 24px;");
				means.setAttribute("onclick","drawShip(this.id)");
			};
			if (y<10-shipLength) {
				var b1 = y-1+2+"."+x; 
				means = document.getElementById(b1);
				temparr.push(b1);
				means.disabled = false;
				means.setAttribute("style","background-Color:#357EC7;width: 24px;");
				means.setAttribute("onclick","drawShip(this.id)");
			};
			console.log(x+"  "+shipLength);
			if (x>shipLength-1) {
				var kupa = x-1;
				var b2 = y+"."+kupa;
				means = document.getElementById(b2);
				temparr.push(b2);
				means.disabled = false;
				//console.log(aa +"  " + bb +"  "+ b1+"  "+ b2);
				means.setAttribute("style","background-Color:#357EC7;width: 24px;");
				means.setAttribute("onclick","drawShip(this.id)");
			};
			if (x<9-shipLength) {
				x++;
				var b3 = y+"."+x;
				means = document.getElementById(b3);
				temparr.push(b3);
				means.disabled = false;
				means.setAttribute("style","background-Color:#357EC7;width: 24px;");
				means.setAttribute("onclick","drawShip(this.id)");
			};
		};
		gen.disabled = false;
	};

	
}

function drawShip(temp){
gen.disabled = false;
	clearShadow();
	lasttemp = temp;
	var y = shiptmp.charAt(0);
	var x = shiptmp.charAt(2);

	var y1 = temp.charAt(0);
	var x1 = temp.charAt(2);

	if ((x-x1)!=0) {
		wektorx = x-x1;
		wektory = 0;
	}else if ((y-y1)!=0) {
		wektory = y-y1;
		wektorx = 0;
	};

	sendarr[y][x] = 1;

	for (var i = 1; i <= shipLength; i++) {
		if (wektorx==0) {
			y-= wektory;
			//console.log(x+"."+y);
			part = document.getElementById(y+"."+x);
			part.setAttribute("style","background-Color:#556;width: 24px;");
			sendarr[y][x] = 1;
		}else if (wektory==0) {
			x-= wektorx;
			//console.log(x+"."+y);
			part = document.getElementById(y+"."+x);
			part.setAttribute("style","background-Color:#556;width: 24px;");
			sendarr[y][x] = 1;
		};
	};
	console.log(sendarr);
	
}

function clearShadow(){
		for (var i = temparr.length - 1; i >= 0; i--) {
		if (temparr[i]!=lasttemp) {
			var mleko = document.getElementById(temparr[i]);
			mleko.setAttribute("style","width: 24px;");
			mleko.disabled = true;
		};
	};
	temparr = [];
}