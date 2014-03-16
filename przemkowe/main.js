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
	arr = [];
	for (var j = 1; j <= 10; j++) {
		for (var i = 1; i <= 10; i++) {
			arr.push(0);
		};
	};
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

	if (shipLength>0) {
		shipLength--;
		var x = aa.charAt(0);
		var y = aa.charAt(2);

		var tmp  = document.getElementById(aa);
		tmp.setAttribute("style","background-Color:#556;width: 24px;");
		if (shipLength>0) {
			var bb = x-1+"."+y;
			var means = document.getElementById(bb);
			temparr.push(bb);
			means.disabled = false;
			means.setAttribute("style","background-Color:#357EC7;width: 24px;");
			means.setAttribute("onclick","drawShip(this.id)");

			var b1 = x-1+2+"."+y; 
			means = document.getElementById(b1);
			temparr.push(b1);
			means.disabled = false;
			means.setAttribute("style","background-Color:#357EC7;width: 24px;");
			means.setAttribute("onclick","drawShip(this.id)");

			y--
			var b2 = x+"."+y;
			means = document.getElementById(b2);
			temparr.push(b2);
			means.disabled = false;
			//console.log(aa +"  " + bb +"  "+ b1+"  "+ b2);
			means.setAttribute("style","background-Color:#357EC7;width: 24px;");
			means.setAttribute("onclick","drawShip(this.id)");
			y+=2;
			var b3 = x+"."+y;
			means = document.getElementById(b3);
			temparr.push(b3);
			means.disabled = false;
			means.setAttribute("style","background-Color:#357EC7;width: 24px;");
			means.setAttribute("onclick","drawShip(this.id)");
		};
	};
}

function drawShip(temp){

	for (var i = temparr.length - 1; i >= 0; i--) {
		if (temparr[i]!=lasttemp) {
			var mleko = document.getElementById(temparr[i]);
			mleko.setAttribute("style","width: 24px;");
			mleko.disabled = true;
		};
	};
	temparr = [];
	lasttemp = temp;
	var x = shiptmp.charAt(0);
	var y = shiptmp.charAt(2);

	var x1 = temp.charAt(0);
	var y1 = temp.charAt(2);

	if ((x-x1)!=0) {
		wektorx = x-x1;
		wektory = 0;
	}else if ((y-y1)!=0) {
		wektory = y-y1;
		wektorx = 0;
	};


	for (var i = 1; i <= shipLength; i++) {
		if (wektorx==0) {
			y-= wektory;

			console.log(x+"."+y);
			part = document.getElementById(x+"."+y);
			part.setAttribute("style","background-Color:#556;width: 24px;");
		}else if (wektory==0) {
			x-= wektorx;
			console.log(x+"."+y);
			part = document.getElementById(x+"."+y);
			part.setAttribute("style","background-Color:#556;width: 24px;");

		};
	};
}