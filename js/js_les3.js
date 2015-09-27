

var mas = ["images/sochi01.jpg","images/sochi02.jpg","images/sochi03.jpg","images/sochi04.jpg"
    ,"images/sochi05.jpg","images/sochi06.jpg","images/sochi07.jpg","images/sochi08.jpg","images/sochi09.jpg"]; // массив картинок
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


 function right_arrow() // Открытие следующей картинки(движение вправо)
{ 
 var obj = document.getElementById("img");
 var obj_L = document.getElementById("imgl");
 var obj_R = document.getElementById("imgr");
 
  if (to < mas.length-1)  to++;
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

