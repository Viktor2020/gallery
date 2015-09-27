<!--

var mas = ["sochi01.jpg","sochi02.jpg","sochi03.jpg","sochi04.jpg","sochi05.jpg","sochi06.jpg","sochi07.jpg","sochi08.jpg","sochi09.jpg"] // массив картинок
var to = -1;  // Счетчик, указывающий на текущую картинки
first();// init
function first(){
var obj = document.getElementById("img");
var obj_L = document.getElementById("imgl");
var obj_R = document.getElementById("imgr");
 obj_L.src = mas[mas.length-1];
 obj.src = mas[0];
 obj_R.src = mas[1];
 }
 
function poz_arrow(imgs) {	//открыть картинку которую получили
	if(formOpenImg.check_thisWin.checked) {
		var obj = document.getElementById("img");
			obj.src = imgs.src;
		}
 }

 function right_arrow() // Открытие следующей картинки(движение вправо)
{ 
 var obj = document.getElementById("img");
 var obj_L = document.getElementById("imgl");
 var obj_R = document.getElementById("imgr");
 
  if (to < mas.length-1)  to++ 
   else
   {
		 to = 0;
   }
   if(to == 0)
	obj_L.src = mas[mas.length-1];
	if(to != 0)
	obj_L.src = mas[to-1];
	
     obj.src = mas[to];	 
	 if(to == mas.length-1)
	 obj_R.src = mas[0];
	 else
	 obj_R.src = mas[to+1];
}

function left_arrow() // Открытие предыдущей картинки(движение влево)
{     
 var obj = document.getElementById("img");
 var obj_L = document.getElementById("imgl");
 var obj_R = document.getElementById("imgr");
if (to > 0) to--;
  else
  {
	to = mas.length-1;
	
  }
   if(to == 0)
	obj_L.src = mas[mas.length-1];
	if(to != 0)
	obj_L.src = mas[to-1];
	
     obj.src = mas[to];	 
	 if(to == mas.length-1)
	 obj_R.src = mas[0];
	 else
	 obj_R.src = mas[to+1];
}

//-->