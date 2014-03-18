var	temparr = []; //zmienna tylko do usuwania śladów
var	lasttemp = 0;//podobnie jak wyzej
var	shipLength=0;
var	shiptmp = 0;
var whitestain ; //tablica na miejsca, gdzie nie można postawić statków


var ships =new Array(4,3,2,1);

function main () {
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

	whitestain = new Array(12);
	for (var i = 0; i < whitestain.length; i++) {
	    whitestain[i] = new Array(12);
	    for(var j = 0; j < whitestain[i].length; j++ ) {
	       whitestain[i][j] = "1";
	    }
	}
}

function getOpponentHit(){//tej funkcji nigdzie nie wywołuje, do niej mają trafić koordynaty strzału przeciwnika, czy robisz jakieś zdażenie nasłuchujące czy cos innego, sam wybierz xD
	var hitid = x+"."+y;
	var kupa = document.getElementById(hitid);
	if(hitIsTrue){
		kupa.setAttribute("value","X");
	}else{
		kupa.setAttribute("value","•");
	}
}

function createShipButtons(){
	settings = document.getElementById("playerSettings");
	var tmp = "X";
	for (var i = 1; i <= ships.length; i++) {
		var ship = document.createElement("input");
		ship.setAttribute("type","button");
		ship.setAttribute("id",i);
		ship.setAttribute("value",ships[i-1]);
		ship.setAttribute("style","width:"+24*i+"px;");
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

		reset = document.createElement("input");
		reset.setAttribute("type","button");
		reset.setAttribute("id","bt-zeruj");
		reset.setAttribute("value","Resetuj");
		reset.setAttribute("onclick","resetShips()");

		var p = document.createElement("p");
		settings.appendChild(p);
		settings.appendChild(reset);
}

function resetShips(){
	ships =new Array(4,3,2,1);
	createArray();
	for (var i = 1; i <= ships.length; i++) {
		$("#"+i).val( ships[i-1] );
	}

	for (var j = 0; j <= 9; j++) {
		for (var i = 0; i < 9; i++) {
			var bt = document.getElementById(j+"."+i);
			bt.disabled = true;
			bt.setAttribute("style","width: 24px;");
		}
	}
}


function sendShip(){

	GenOpponentBoard();
	gen.disabled = true;
	reset.disabled = true;
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
	//clearShadow();
	shipLength = tmp;
	if (ships[tmp-1]!=0) {
		for (var j = 1; j <= 10; j++) {
			for (var i = 0; i < 9; i++) {
				if (whitestain[j][i]==1) {
					var bt = document.getElementById(j-1+"."+i);
					bt.disabled = false;
				};
			}
		}
	}else{
		alert("Postawiłeś już wszystkie statki tego rodzaju!!");
	}
}

function shipClick(aa){
	var w1 = true;
	var w2 = true;
	var w3 = true;
	var w4 = true;
	shiptmp = aa;
	for (var j = 0; j <= 9; j++) {
		for (var i = 0; i < 9; i++) {
			var bt = document.getElementById(j+"."+i);
			bt.disabled = true;
		}
	}
	//console.log(shipLength);
	if (shipLength>0) {
		shipLength--;
		var y = aa.charAt(0);
		var x = aa.charAt(2);

		var tmp  = document.getElementById(aa);
		tmp.setAttribute("style","background-Color:#556;width: 24px;");
		if (shipLength>0) {
			/*
			for (var i = 0; i <= shipLength; i++) {
				if (sendarr[y-1+1+i][x]){w1 = false};
				if (sendarr[y-i][x]){w2 = false};
				if (sendarr[y][x-1+1+i]){w3 = false};
				if (sendarr[y][x-i]){w4 = false};
			};
*/
			if (y>shipLength-1) {
				for (var i = 0; i <= shipLength+1; i++) {
					if (y>shipLength+1) {
						if (sendarr[y-i][x]==1){w1 = false};
					}
				}
				if (w1) {			
					var bb = y-1+"."+x;
					var means = document.getElementById(bb);
					temparr.push(bb);
					means.disabled = false;
					means.setAttribute("style","background-Color:#357EC7;width: 24px;");
					means.setAttribute("onclick","drawShip(this.id)");
				}
				
			};
			if (y<10-shipLength) {
				for (var i = 0; i <= shipLength+1; i++) {
					if (sendarr[y-1+1+i][x]==1){w2 = false};
				}
				if (w2) {
					var b1 = y-1+2+"."+x; 
					means = document.getElementById(b1);
					temparr.push(b1);
					means.disabled = false;
					means.setAttribute("style","background-Color:#357EC7;width: 24px;");
					means.setAttribute("onclick","drawShip(this.id)");
				};

			};
			//console.log(x+"  "+shipLength);
			if (x>shipLength-1) {
				for (var i = 0; i <= shipLength+1; i++) {
					if (sendarr[y][x-i]==1){w3 = false};
				}
				if (w3) {
					var kupa = x-1;
					var b2 = y+"."+kupa;
					means = document.getElementById(b2);
					temparr.push(b2);
					means.disabled = false;
					//console.log(aa +"  " + bb +"  "+ b1+"  "+ b2);
					means.setAttribute("style","background-Color:#357EC7;width: 24px;");
					means.setAttribute("onclick","drawShip(this.id)");
				}
			};
			if (x<9-shipLength) {
				for (var i = 0; i <= shipLength+1; i++) {
					if (sendarr[y][x-1+1+i]==1){w4 = false};
				}
				if (w4) {
					x++;
					var b3 = y+"."+x;
					means = document.getElementById(b3);
					temparr.push(b3);
					means.disabled = false;
					means.setAttribute("style","background-Color:#357EC7;width: 24px;");
					means.setAttribute("onclick","drawShip(this.id)");
				}
			};
		}else{
		ships[shipLength]--;
		spadaj = shipLength+1;
		$("#"+spadaj).val( ships[shipLength] );
		whitestain[y][x] = 0;
		for (var i = 0; i <= 8; i++) {
			if (i<=shipLength+2){
				wy = (y-1+1)+i;
				wx = x-1;
				whitestain[wy][wx] = 0;
				wy = (y-1+1)+i;
				wx = x;
				whitestain[wy][wx] = 0;
				wx = x-1+2;
				console.log(wx);
				whitestain[wy][wx] = 0;
			}
		};
	}
		var statki = 0;
		for (var i = ships.length - 1; i >= 0; i--) {
			if(ships[i])statki++;
		};
		if (statki==0) {gen.disabled = false;};
		
	}

	
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
	
	for (var i = 0; i <= shipLength+2; i++) {
		
			if (wektorx==0) {
				if (wektory>0){wy = y-wektory*i+2;}else{wy = y-wektory*i;}
				wx = x-1;
				whitestain[wy][wx] = 0;
				wx = x;
				whitestain[wy][wx] = 0;
				wx = x-1+2;
				whitestain[wy][wx] = 0;
			}else if (wektory==0) {
				if (wektorx>0){wx = x-wektorx*i+1;}else{wx = x-wektorx*i-1;}
				wy = y;
				whitestain[wy][wx] = 0;
				wy = y-1+2;
				whitestain[wy][wx] = 0;
				wy = y-1+3;
				whitestain[wy][wx] = 0;
			}
	};

	for (var i = 1; i <= shipLength; i++) {
		if (wektorx==0) {
			y-= wektory;
			//console.log(x+"."+y);
			part = document.getElementById(y+"."+x);
			whitestain[y][x] = 0;
			part.setAttribute("style","background-Color:#556;width: 24px;");
			sendarr[y][x] = 1;
		}else if (wektory==0) {
			x-= wektorx;
			//console.log(x+"."+y);
			part = document.getElementById(y+"."+x);
			whitestain[y][x] = 0;
			part.setAttribute("style","background-Color:#556;width: 24px;");
			sendarr[y][x] = 1;
		};
	};
	//console.log(shipLength);
	ships[shipLength]--;
	spadaj = shipLength+1;
	$("#"+spadaj).val( ships[shipLength] );
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