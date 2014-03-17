

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
	             		cellContent.disabled = false;
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
	//console.log("x: "+x+" y: "+y);
	//wysyłasz koordynaty x i y zwracasz czy trafiony (true) czy nie (false), koordynaty są zgodne z tablicą, x: 0 do 9, y tak samo
	return Math.random() < 0.5;
}