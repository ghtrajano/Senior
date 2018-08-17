//function para enviar os dados ao clicar no botão de submit
function enviarDados(){
	//variaveis que carregarão os campos para preenchimento de tabela e verificações necessarias
	var nome = document.getElementById("nome").value;
	var quantidade = document.getElementById("quantidade").value;
	var preco = document.getElementById("preco").value;
	var validade = document.getElementById('validade').value;
	var intValidade = parseInt(validade.split("-")[0].toString() + validade.split("-")[1].toString() + validade.split("-")[2].toString()); 
	var fabricacao = document.getElementById("fabricacao").value;
	now = new Date;
	var dia = now.getDate();
	var mes = now.getMonth() + 1;
	var ano = now.getFullYear();
			//verificacao de tamanho de nome
	        if(nome.length > 50)
	                alert('Tamanho do nome invalido');
	        else {
	        	//caso o tamanho esteja dentro da norma, setar o campo usuario para tabela
	            window.localStorage.setItem('usuario', nome); 
	        //acrescentar 0 ao começo do mês
	        if (mes.toString().length == 1) {
	            mes = '0'+mes;
	        }

	        var str_data = ano + mes + dia;  
	        //verificar se o produto não está vencido
	        } if(intValidade < str_data) {
	                alert('Produto Vencido');
	        }
	        //campos para tabela
	        window.localStorage.setItem('quantidade', quantidade);
	        window.localStorage.setItem('preco', preco);
	        window.localStorage.setItem('validade', validade);
	        window.localStorage.setItem('fabricacao', fabricacao);

}
//Função para verificar se o checkbox está checked
function verificaCheck() {
    var check = document.getElementsByName("perecivel"); 
    	//for para verificar se o checkbox está marcado, caso sim, seta para disable, caso contrário retorna a habilitar o campo
        for (var i=0;i<check.length;i++){ 
            if (check[i].checked == true){ 
                document.getElementById('validade').removeAttribute('disabled',true);
            } else if (check[i].checked == false) {
                document.getElementById('validade').setAttribute('disabled',true);
            }
        }

}
//function para criação de tabela
function criarTabela() {
	//variaveis para setar o corpo da tabela desejada e a criação da linha
	var corpoTabela = document.querySelector('tbody');
	var linha = document.createElement('tr');
	//variaveis para criação de campos na linha
	var campoNome = document.createElement('td');
	var campoQuantidade = document.createElement('td');
	var campoPreco = document.createElement('td');
	var campoValidade = document.createElement('td');
	var campoFabricacao = document.createElement('td');
	//variaveis que carregam o conteúdo de cada campo
	var textoNome = document.createTextNode(window.localStorage.getItem('usuario'));
	var textoQuantidade = document.createTextNode(window.localStorage.getItem('quantidade'));
	var textoPreco = document.createTextNode(window.localStorage.getItem('preco'));
	var textoValidade = document.createTextNode(window.localStorage.getItem('validade'));
	var textofabricacao = document.createTextNode(window.localStorage.getItem('fabricacao'));

	//append para adicionar conteudo aos campos
	campoNome.appendChild(textoNome);
	campoQuantidade.appendChild(textoQuantidade);
	campoPreco.appendChild(textoPreco);
	campoValidade.appendChild(textoValidade);
	campoFabricacao.appendChild(textofabricacao);
	//append para criação da linha
	linha.appendChild(campoNome);
	linha.appendChild(campoQuantidade);
	linha.appendChild(campoPreco);
	linha.appendChild(campoValidade);
	linha.appendChild(campoFabricacao);
	//append cara inserir a linha criada ao corpo da tabela
	corpoTabela.appendChild(linha);

}