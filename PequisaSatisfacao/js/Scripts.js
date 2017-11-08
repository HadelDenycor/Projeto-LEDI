//Inicializando as variáveis que irão armazenar os votos
otimo = 0;
bom = 0;
reg = 0;
ruim = 0;
pess = 0;
//Variável que irá conter o texto a ser salvo no arquivo .txt
arqDown = "";
//Variável que irá armazenar a hora e data atual do dispositivo
var data = new Date();

//*******Adiciona +1 a cada clique (botões de votação)*******
function addOtimo(){
	otimo++;
}
function addBom(){
	bom++;
}
function addReg(){
	reg++;
}
function addRuim(){
	ruim++;
}
function addPess(){
	pess++;
}
//*************************************************************

//Mostra os resultados em um gráfico de barras horizontal
function showRes(){
	//soma todas as votações para se obter o total de votos
	total = otimo + bom + reg + ruim + pess;
	//atribui o texto a ser salvo no arquivo .txt na variável arqDown
	arqDown = "Resultados da pesquisa de satisfação:\r\n\r\nÓtimo: "+otimo.toString()+"\r\nBom: "+bom.toString()+"\r\nRegular: "+reg.toString()+"\r\nRuim: "+ruim.toString()+"\r\n\r\nPesquisa realizada dia "+data.toLocaleString();
	//****Irá criar um pequeno gráfico de acordo com o número de votos. A barra tem valor mínimo de 0 e valor máximo igual ao total de votos.****
	document.getElementById('otimoDis').innerHTML = 'Ótimo:&ensp;&ensp;<meter min=0 max="'+total+'" low=1 high=1 optimum=2 value="'+otimo+'"></meter>&ensp;'+otimo+' votos.';
	document.getElementById('bomDis').innerHTML = 'Bom:&ensp;&ensp;&ensp;<meter min=0 max="'+total+'" low=1 high=1 optimum=2 value="'+bom+'"></meter>&ensp;'+bom+' votos.';
	document.getElementById('regDis').innerHTML = 'Regular: <meter min=0 max="'+total+'" low=1 high=1 optimum=2 value="'+reg+'"></meter>&ensp;'+reg+' votos.';
	document.getElementById('ruimDis').innerHTML = 'Ruim: &ensp;&ensp;<meter min=0 max="'+total+'" low=1 high=1 optimum=2 value="'+ruim+'"></meter>&ensp;'+ruim+' votos.';
	//*******************************************************************************************************************************************
}


//******Controla a abertura das abas de Pesquisa/Resultados******
function openTab(evt, tabName) {
	var i, tabContent, tabLinks;
	tabContent = document.getElementsByClassName("tabContent");
	for (i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}
	tabLinks = document.getElementsByClassName("tabLinks");
	for (i = 0; i < tabLinks.length; i++) {
		tabLinks[i].className = tabLinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}
//****************************************************************

//Função atribuída ao botão "Salvar". Cria um arquivo .txt com o conteúdo da variável "arqDown", que previamente (ao clicar em "Exibir resultados") recebeu o texto contendo os votos
function download(){
	var a = document.createElement('a');
	var blob = new Blob([arqDown], {type:'text/plain'});
	a.href = window.URL.createObjectURL(blob);
	// Nomeia o arquivo
	a.download = "ResultadosPesquisa";
	a.click();
}
//*************************************************************