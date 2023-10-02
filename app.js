function valida() {
	if(document.getElementById("login").value == "" || document.getElementById("password").value == "") {
		document.getElementById("logerror").innerHTML = "Favor preencher os campos corretamente";
	} else {
		if(document.getElementById("login").value == "daniel" && document.getElementById("password").value == "daniel") {
			document.getElementById("logar").type = "submit";
		} else if(document.getElementById("login").value == "brigith" && document.getElementById("password").value == "brigith") { 
			document.getElementById("logar").type = "submit";
		} else {
		document.getElementById("logerror").innerHTML = "Dados incorretos, favor verificar e tentar novamente";
		}
	}
	
}

$(document).ready(function() {
	$(".informationPanel").animate({
				width: 'toggle'
			});
	var apareceu = 0;
	$(".informacao").click(function() {
		if(apareceu == 0){
			$(".informationPanel").animate({
				width: 'toggle'
			});
			apareceu = 1;
		} else {
			$(".informationPanel").animate({
				width: 'toggle'
			});
			apareceu = 0;
		}
	})
})
$(document).ready(function() {
	var video;
	var conteudo = "";
	$("#seletor").fadeOut();
	$("#fisicaForense").click(function() {
		conteudo = "forense";
	})
	$("#fisicaCulinaria").click(function() {
		conteudo = "culinaria";
	})
	$("#fisicaMedica").click(function() {
		conteudo = "medica";
	})
	$("#fisicaAmbiental").click(function() {
		conteudo = "ambiental";
	})
	$("#fisicaComputacional").click(function() {
		conteudo = "computacional";
	})
	$("#oceanografiaFisica").click(function() {
		conteudo = "oceanografia";
	})
	$("#fisicaIndustrial").click(function() {
		conteudo = "industrial";
	})
	$("#avaliacaoFinal").click(function() {
		conteudo = "avaliacao";
	})
	$(".opcaoCurso").click(function() {
		if (conteudo == "avaliacao") {

		} else {
			$("#seletor").fadeIn();
		}
	});
	$("#audioOnly").click(function() {
		video = false;
		if(conteudo == "forense") {
			window.location.href ="FisicaForense.html";
		} else if(conteudo == "culinaria"){
			window.location.href ="FisicaCulinaria.html";
		} else if(conteudo == "medica"){
			window.location.href ="FisicaMedica.html";
		} else if(conteudo == "ambiental"){
			window.location.href ="FisicaAmbiental.html";
		} else if(conteudo == "computacional"){
			window.location.href ="FisicaComputacional.html";
		} else if(conteudo == "oceanografia"){
			window.location.href ="OceanografiaFisica.html";
		} else if(conteudo == "industrial"){
			window.location.href ="FisicaIndustrial.html";
		}
	})
	$("#video").click(function() {
		video = true;
		if(conteudo == "forense") {
			window.location.href ="FisicaForenseVideo.html";
		} else if(conteudo == "culinaria"){
			window.location.href ="FisicaCulinariaVideo.html";
		} else if(conteudo == "medica"){
			window.location.href ="FisicaMedicaVideo.html";
		} else if(conteudo == "ambiental"){
			window.location.href ="FisicaAmbientalVideo.html";
		} else if(conteudo == "computacional"){
			window.location.href ="FisicaComputacionalVideo.html";
		} else if(conteudo == "oceanografia"){
			window.location.href ="OceanografiaFisicaVideo.html";
		} else if(conteudo == "industrial"){
			window.location.href ="FisicaIndustrialVideo.html";
		}
	})
})