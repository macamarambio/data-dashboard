/*MENU DROPDOWN*/
var submenu = document.getElementsByClassName('submenu');
for (var i = 0; i< submenu.length; i++) {
	submenu[i].addEventListener('click',showMenu);
}

function showMenu() {
	var listMenu = this.getElementsByClassName('itemList')[0];
	if (listMenu.classList.contains('hide')){
		listMenu.classList.remove('hide');
		listMenu.classList.add('show');
	} else {
		listMenu.classList.remove('show');
		listMenu.classList.add('hide');
	}
}

/*CHECKBOX FUNCIONALIDAD GRAFICO*/
/*Variables*/
var checkStudent = document.getElementById('checkbox1');
var checkTeach = document.getElementById('checkbox2');
var checkJedi = document.getElementById('checkbox3');
var imgGraphic = document.getElementById('imgGrap');

/*Solo opción 1 seleccionada*/
checkStudent.addEventListener('change', function(){
	if (checkStudent.checked == true) {
		imgGraphic.src = "assets/images/studentS4.png";
	}else{
		imgGraphic.src = "assets/images/studentS.png";
	}
});

/*Solo opción 2 seleccionada*/
checkTeach.addEventListener('change', function(){
	if (checkTeach.checked == true) {
		imgGraphic.src = "assets/images/studentS5.png";
	}else{
		imgGraphic.src = "assets/images/studentS.png";
	}
});

/*Solo opción 3 seleccionada*/
checkJedi.addEventListener('change', function(){
	if (checkJedi.checked == true) {
		imgGraphic.src = "assets/images/studentS6.png";
	}else{
		imgGraphic.src = "assets/images/studentS.png";
	}
});

/* combinaciones checkbox
	1-2-3  -> studentS
	1-2 --> studentS1
	1-3 --> studentS2
	2-3 --> studentS3
	1 --> studentS4
	2 --> studentS5
	3 --> studentS6
*/
console.log(data);

