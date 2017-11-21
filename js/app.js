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
/*FUNCIONALIDAD MENU TECH / HSE*/
var hse = document.getElementById('hse');
var tech = document.getElementById('tech');
var imgSkill = document.getElementById('imgTechHse');
var skillInf1 = document.getElementById('skillinfo1');
var skillInf2 = document.getElementById('skillinfo2');

hse.addEventListener('click', function(){
	imgSkill.src = "assets/images/hseSkills.png";
	skillInf1.src = "assets/images/hseinfo1.png";
	skillInf2.src = "assets/images/hseinfo2.png";
});

/*tech.addEventListener('click', function(){
	imgSkill.src = "assets/images/techSkills.png";
	skillInf1.src = "assets/images/techinfo1.png";
	skillInf2.src = "assets/images/techinfo2.png";
}); */

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

/*Add Student*/

var addStudent = document.getElementById('addStudent');

addStudent.addEventListener('click', function(){
	prompt('Add Student', 'Name Student');
});

var removeStudent = document.getElementById('removeStudent');
removeStudent.addEventListener('click',function(){
	prompt('Remove Student', 'Name Student');
});

var addSprint = document.getElementById('addSprint');
addSprint.addEventListener('click', function(){
	prompt('Add Sprint', 'Sprint');
})
console.log(data);

