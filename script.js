var con = document.getElementById("container");
var colorBtn = document.getElementById("color-change");
var shapeBtn = document.getElementById("shape-change");

var square = document.getElementById("square");
var circle = document.getElementById("circle");
var triangle = document.getElementById("triangle");
var rectangle = document.getElementById("rectangle");


//Change Color
function random_bg_color(){

	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);

	con.style.backgroundColor="rgb(" + x + "," + y + "," + z + ")";
}

colorBtn.addEventListener("click", function(){

	random_bg_color();
});



//Change Shape
shapeBtn.addEventListener("click", function(){

	var shapeChanger = Math.floor(Math.random() * 10);

//square
	if (shapeChanger <= 2)

	{	square.style.backgroundColor = "#ded2d2";
		circle.style.backgroundColor = "transparent";
		triangle.style.borderBottomColor = "transparent";
		rectangle.style.backgroundColor = "transparent";
	}

//circle
	else if (shapeChanger >= 3 && shapeChanger <=5)

	{	square.style.backgroundColor = "transparent";
		circle.style.backgroundColor = "#ded2d2";
		triangle.style.borderBottomColor = "transparent";
		rectangle.style.backgroundColor = "transparent";
	}


//triangle
	else if (shapeChanger >= 6 && shapeChanger <= 7)

	{	square.style.backgroundColor = "transparent";
		circle.style.backgroundColor = "transparent";
		triangle.style.borderBottomColor = "#ded2d2";
		rectangle.style.backgroundColor = "transparent";
	}

//rectangle
	else if (shapeChanger >= 8 && shapeChanger <= 9)

	{	square.style.backgroundColor = "transparent";
		circle.style.backgroundColor = "transparent";
		triangle.style.borderBottomColor = "transparent";
		rectangle.style.backgroundColor = "#ded2d2";
	}
	});