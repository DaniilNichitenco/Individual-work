function ul(index) {
	console.log('click!' + index)
	
	var underlines = document.querySelectorAll(".underline");

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = 'translate3d(' + index * 220 + 'px,0,0)';
	}
}

function correctFields()
{

	var textC, er, textEmail, textFirstName, textSecondName;
	var erMail = false, erFirstName = false, erSecondName = false;
	textEmail = document.getElementById("email").value;
	textFirstName = document.getElementById("firstName").value;
	textSecondName = document.getElementById("secondName").value;
	textC = document.getElementById("comment").value;
	er=0;
	var reg_exp = /(цензура)|(уродливая)|(грубая)|(тупая)|(глупая)/gi;
	if (reg_exp.test(textC)) {
		document.getElementById("comment").value = textC.replace(reg_exp, '***');
		er=er+1;
	}
	if (er!=0) {
		document.getElementById("comment").style.cssText = `border: 1px solid red;`;
		document.getElementById("textErr").innerHTML = "Вы использовали нецензурные слова!"
	}
	else
	{
		document.getElementById("comment").style.cssText = `border: 1px solid grey;`;
		document.getElementById("textErr").innerHTML = ""
	}

	reg_exp = /[a-zA-Z0-9](@gmail.com)$|[a-zA-Z0-9](@mail.ru)$|[a-zA-Z0-9](yahoo.com)$|[a-zA-Z0-9](rambler.ru)$|[a-zA-Z0-9](yandex.ru)$/;
	if(!reg_exp.test(textEmail))
	{
		er = er + 1;
		erMail = true;
	}
	if(erMail)
	{
		document.getElementById("email").style.cssText = `border: 1px solid red;`;
		document.getElementById("f3Err").innerHTML = "Неверный формат почты!";
	}
	else
	{
		document.getElementById("email").style.cssText = `border: 1px solid grey;`;
		document.getElementById("f3Err").innerHTML = "";
	}

	reg_exp = /^[а-яА-ЯёЁa-zA-Z]{2,12}$/;
	if(!reg_exp.test(textFirstName))
	{
		er = er + 1;
		erFirstName = true;
	}
	if(erFirstName)
	{
		document.getElementById("firstName").style.cssText = `border: 1px solid red;`;
		document.getElementById("f1Err").innerHTML = "Введите правильно имя(только латиница и кирилица;2-12 символов)!";
	}
	else
	{
		document.getElementById("firstName").style.cssText = `border: 1px solid grey;`;
		document.getElementById("f1Err").innerHTML = "";
	}

	reg_exp = /^[а-яА-ЯёЁa-zA-Z]{2,12}$/;
	if(!reg_exp.test(textSecondName))
	{
		er = er + 1;
		erSecondName = true;
	}
	if(erSecondName)
	{
		document.getElementById("secondName").style.cssText = `border: 1px solid red;`;
		document.getElementById("f2Err").innerHTML = "Введите правильно имя(только латиница и кирилица;2-12 символов)!";
	}
	else
	{
		document.getElementById("secondName").style.cssText = `border: 1px solid grey;`;
		document.getElementById("f2Err").innerHTML = "";
	}

	return (er==0);
}