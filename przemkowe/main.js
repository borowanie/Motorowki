function main () {
	shipLength=0;
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
	             		cellContent.setAttribute("id",j+'.'+i);
	             		cellContent.setAttribute("style","width: 24px;");
	             		cellContent.setAttribute("onclick","shipClick(this.id)");
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
	console.log(tmp);
	shipLength = tmp;
}

function shipClick(aa){
	//console.log("no klikło "+aa);
	if (shipLength>0) {
		shipLength--;
		var tmp  = document.getElementById(aa);
		tmp.setAttribute("style","background-Color:#556;width: 24px;");
		var bb = aa.charAt(0)-1+"."+aa.charAt(2);
		var means = document.getElementById(bb);
		means.setAttribute("style","background-Color:#357EC7;width: 24px;");

		bb = aa.charAt(0)-1+2+"."+aa.charAt(2); 
		means = document.getElementById(bb);

		means.setAttribute("style","background-Color:#357EC7;width: 24px;");

		bb = aa.charAt(0)+"."+aa.charAt(2)-1;
		means = document.getElementById(bb);
		console.log(bb);
		means.setAttribute("style","background-Color:#357EC7;width: 24px;");

		bb = aa.charAt(0)+"."+aa.charAt(2)-1+2;
		means = document.getElementById(bb);
		means.setAttribute("style","background-Color:#357EC7;width: 24px;");
	};
}