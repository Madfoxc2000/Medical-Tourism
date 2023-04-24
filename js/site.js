function myFunction() {
	// Get the checkbox
	var checkBox = document.getElementById("myCheck");
	// Get the output text
	var text = document.getElementById("text");

	// If the checkbox is checked, display the output text
	if (checkBox.checked == true) {
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}
function myFunction2() {
	// Get the checkbox
	var checkBox = document.getElementById("myCheck2");
	// Get the output text
	var text = document.getElementById("text2");

	// If the checkbox is checked, display the output text
	if (checkBox.checked == true) {
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}
function myFunction3() {
	// Get the checkbox
	var checkBox = document.getElementById("myCheck3");
	// Get the output text
	var text = document.getElementById("text3");

	// If the checkbox is checked, display the output text
	if (checkBox.checked == true) {
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}
function myFunction4() {
	// Get the checkbox
	var checkBox = document.getElementById("myCheck4");
	// Get the output text
	var text = document.getElementById("text4");

	// If the checkbox is checked, display the output text
	if (checkBox.checked == true) {
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}
var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) { slideIndex = 1 }
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 6000); // Change image every 2 seconds
}
function inicijalizuj() {

	var imeprezime = document.getElementById("imeprezime");
	imeprezime.oninvalid = invalidImePrezime;
	imeprezime.oninput = invalidImePrezime;

	var datum = document.getElementById("datum");
	datum.oninvalid = invalidDatum;
	datum.oninput = invalidDatum;

	var email = document.getElementById("email");
	email.oninvalid = invalidEmail;
	email.oninput = invalidEmail;

	var telefon = document.getElementById("telefon");
	telefon.oninvalid = invalidTel;
	telefon.oninput = invalidTel;
}

function invalidImePrezime() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti ime !");
	}
}

function invalidDatum() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate postaviti datum !");
	}
}

function invalidEmail() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti e-mail.");
	}
}

function invalidTel() {
	this.setCustomValidity("");
	if (this.validity.valueMissing) {
		this.setCustomValidity("Morate uneti broj telefona.");
	}
}







function provera() {
	if (!odabranPol()) {
		alert("Odaberite pol!");
		return false;
	} else if (!duzinaImePrezime()) {
		alert("Ime i prezime moraju zajedno da imaju 6+ karaktera!");
		return false;
	} else if (!samoSlova()) {
		alert("Ime i prezime sadrzi samo slova i \'-\'!");
		return false;
	} else if (!pocinjeVelikimSlovomIme()) {
		alert("Početno slovo imena mora biti veliko!");
		return false;
	} else if (!imaPrezime()) {
		alert("Mora sadržati prezime!");
		return false;
	} else if (!pocinjeVelikimSlovomPrezime()) {
		alert("Početno slovo prezimena mora biti veliko!");
		return false;
	} if (!proveriZnakove()) {
		alert("E-mail mora biti sačinjen od odgovarajućih znakova.");
		return false;
	} if (!postojiEt()) {
		alert("E-mail mora da imati znak @.");
		return false;
	} if (!proveriDaLiSuCifre()) {
		alert("Broj telefona mora sadžati samo cifre od 0 do 9 !");
		return false;
	} if (!duzinaBroja()) {
		alert("Broj mora biti duzine od 8 do 12 karaktera !");
		return false;
	} if (!proveriPrve2cifre()) {
		alert("Prve dve cifre broja moraju biti 06 !");
		return false;
	}


}
function odabranPol() {
	var pol = document.getElementsByName("pol");
	for (var i = 0; i < pol.length; i++) {
		if (pol[i].checked) {
			return true;
		}
	}
	return false;
}

function duzinaImePrezime() {
	return document.getElementById("imeprezime").value.length > 6;
}

function samoSlova() {
	var unos = document.getElementById("imeprezime").value;

	for (var i = 0; i < unos.length; i++) {
		var znak = unos[i];
		if (!(('a' <= znak && znak <= 'z') || ('A' <= znak && znak <= 'Z') || znak == ' '))
			return false;
	}
	return true;
}

function pocinjeVelikimSlovomIme() {
	var ime = document.getElementById("imeprezime").value;
	return 'A' <= ime[0] && ime[0] <= 'Z';
}

function imaPrezime() {
	var imep = document.getElementById("imeprezime").value.trim();
	return imep.indexOf(' ') != -1; // Vraca false ako je -1, ako vrati true znaci ima razmaka
}

function pocinjeVelikimSlovomPrezime() {
	var prezime = document.getElementById("imeprezime").value.trim();
	var razmak = prezime.indexOf(' ');
	if (!('A' <= prezime[razmak + 1] && prezime[razmak + 1] <= 'Z')) // Ako prvo slovo prezimena nije izmedju A i Z vraca false
		return false;
	var razmak2 = prezime.indexOf(" ", razmak + 1);
	if (razmak2 != -1 && (!('A' <= prezime[razmak2 + 1] && prezime[razmak2 + 1] <= 'Z')))
		return false;
	return true;
}
function postojiEt() {
	var mail = document.getElementById("email").value.trim();
	return mail.indexOf('@') != -1;
}

function proveriZnakove() {
	var mail = document.getElementById("email").value.trim();
	var sviKarakteri = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	if (mail.match(sviKarakteri)) {
		return true;
	}
	return false;
}

function proveriDaLiSuCifre() {
	var mobilni = document.getElementById("telefon").value;
	for (var i = 0; i < mobilni.length; i++) {
		if (!(mobilni[i] >= '0' && mobilni[i] <= '9'))
			return false;
	}
	return true;
}

function duzinaBroja() {
	var mobilni = document.getElementById("telefon").value;
	if (mobilni.length < 8 || mobilni.length > 12)
		return false;
	return true;
}

function proveriPrve2cifre() {
	var mobilni = document.getElementById("telefon").value;
	if (mobilni[0] == '0' && mobilni[1] == '6')
		return true;
	return false;
}