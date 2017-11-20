/*MENU DROPDOWN*/
var submenu = document.getElementsByClassName('submenu');
for (var i = 0; i< submenu.length; i++) {
	submenu[i].addEventListener("click",showMenu);
}

function showMenu() {
	var listMenu = this.getElementsByClassName("itemList")[0];
	if (listMenu.classList.contains("hide")){
		listMenu.classList.remove("hide");
		listMenu.classList.add("show");
	} else {
		listMenu.classList.remove("show");
		listMenu.classList.add("hide");
	}
}

/*CHECKBOX FUNCIONALIDAD GRAFICO*/
/*Variables*/
var checkStudent = document.getElementById('checkbox1');
var checkTeach = document.getElementById('checkbox2');
var checkJedi = document.getElementById('checkbox3');
var container = document.getElementById('containerimg');
var imgGraphic = document.getElementById('imgGrap');
/*Solo opción 1 seleccionada*/
checkStudent.addEventListener('click', function(){
	if (checkStudent.checked == true) {
		imgGraphic.classList.add(hide);
	}
});

/*Solo opción 2 seleccionada*/
checkTeach.addEventListener('click', function(){
	if (checkTeach.checked == true) {
		alert('estoy seleccionado');
	}
});

/*Solo opción 3 seleccionada*/
checkJedi.addEventListener('click', function(){
	if (checkJedi.checked == true) {
		alert('estoy seleccionado');
	}
});

console.log(data);

