document.addEventListener('DOMContentLoaded', () => {
    let btnLogin = document.getElementById('btn-login');
    btnLogin.addEventListener('click', () => { window.location.href = '/administrator' })
})

// const regexSoCaracter = /\d/;
// const regexTelefone = /^\(\d{2}\)\d{5}-\d{4}$/;
// const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const regexCep = /^\d{5}-\d{3}$/;
// const regexNumero = /^\d{1,5}$/;
// var temNome = false;
// var temTelefone = false;
// var temEmail = false;
// var temCep = false;
// var temCidade = false;
// var temBairro = false;
// var temNumero = false;
// var temRua = false;
// var temEstado = false;
// var temProcedimento = false;
// var temExperiencia = false;

// function verificarNome() {
//     let nome = event.target.value;
//     let temdois = false;
//     let naotemnumero = false;
//     let avisoNome = document.getElementById('avisoNome')
//     avisoNome.style.display = 'block'
//     avisoNome.innerHTML = "Verifique novamente os campos. "
//     if (nome.length >= 2) {
//         temdois = true;
//         avisoNome.style.display = 'none'
//     }
//     else {
//         avisoNome.innerHTML = avisoNome.textContent + 'Precisa de pelo menos 2 caracteres. ';
//     }

//     if (regexSoCaracter.test(nome)) {
//         avisoNome.innerHTML = avisoNome.textContent + 'Não pode ter números.';

//     } else {
//         naotemnumero = true;
//     }
//     if (naotemnumero && temdois) {
//         avisoNome.style.display = 'none'
//         temCidade = true;
//     }
//     else {
//         avisoNome.style.display = 'block'
//     }
// }
// //feedback
// function verificarBairro() {
//     let bairro = event.target.value;
//     let temdois = false;
//     let naotemnumero = false;
//     let avisoBairro = document.getElementById('avisoBairro')
//     avisoBairro.style.display = 'block'
//     avisoBairro.innerHTML = "Verifique novamente os campos. "
//     if (bairro.length >= 2) {
//         temdois = true;
//         avisoBairro.style.display = 'none'
//     }
//     else {
//         avisoBairro.innerHTML = avisoBairro.textContent + 'Precisa de pelo menos 2 caracteres. ';
//     }

//     if (regexSoCaracter.test(bairro)) {
//         avisoBairro.innerHTML = avisoBairro.textContent + 'Não pode ter números.';

//     } else {
//         naotemnumero = true;
//     }
//     if (naotemnumero && temdois) {
//         avisoBairro.style.display = 'none'
//         temBairro = true;
//     }
//     else {
//         avisoBairro.style.display = 'block'
//     }
// }
// //feedback
// function verificarEmail() {
//     let email = event.target.value
//     let avisoEmail = document.getElementById('avisoEmail');
//     avisoEmail.innerHTML = "Verifique novamente os campos. "
//     if (regexEmail.test(email)) {
//         avisoEmail.style.display = 'none'
//         temEmail = true;
//     } else {
//         avisoEmail.style.display = 'block'
//         avisoEmail.innerHTML = avisoEmail.textContent + 'Email inválido.'
//     }
// }

// function verificarAssunto() {
//     let assunto = event.target.value;
//     let avisoAssunto = document.getElementById('avisoAssunto');
//     avisoAssunto.innerHTML = "Verifique novamente os campos. ";
//     if (assunto.split(' ').length < 2) {
//         avisoAssunto.style.display = "block";
//         avisoAssunto.innerHTML = avisoAssunto.textContent + "Precisa de duas palavras no minimo. "
//     }
//     else {
//         avisoAssunto.style.display = "none";
//     }
// }


// function verificarMensagem() {
//     let mensagem = event.target.value;
//     let avisoMensagem = document.getElementById("avisoMensagem");
//     avisoMensagem.innerHTML = 'Verifique novamente o campo. '
//     if (mensagem.split(' ').length < 3) {
//         avisoMensagem.innerHTML = `${avisoMensagem.textContent}Precisa de pelo menos 3 palavras.`;
//         avisoMensagem.style.display = "block";
//     }
//     else {
//         avisoMensagem.style.display = "none";
//     }


// }
// //feedback
// function verificaNomeCompleto() {
//     let nome = event.target.value;
//     let avisoNomeCompleto = document.getElementById('avisoNomeCompleto');
//     avisoNomeCompleto.innerHTML = 'Verifique o campo novamente. ';
//     naoTemNumero = false
//     temDoisOuMais = false
//     if (regexSoCaracter.test(nome)) {
//         avisoNomeCompleto.innerHTML = avisoNomeCompleto.textContent + 'Não pode ter números.';
//     }
//     else {
//         naoTemNumero = true;
//     }
//     if (nome.split(' ').length < 2) {
//         avisoNomeCompleto.innerHTML = avisoNomeCompleto.textContent + 'Precisa pelo menos nome e sobrenome.';
//     }
//     else {
//         temDoisOuMais = true;
//     }
//     if (temDoisOuMais && naoTemNumero) {
//         temNome = true;
//         avisoNomeCompleto.style.display = "none";
//     }
//     else {
//         avisoNomeCompleto.style.display = 'block';
//     }

// }
// //feedback
// function verificarTelefone() {
//     let telefone = event.target.value;
//     let avisoTelefone = document.getElementById('avisoTelefone');
//     avisoTelefone.innerHTML = 'Verifique o campo novamente. ';
//     if (regexTelefone.test(telefone)) {
//         avisoTelefone.style.display = 'none';
//         temTelefone = true;
//     }
//     else {
//         avisoTelefone.innerHTML = avisoTelefone.textContent + 'Siga o formato padrão para telefone (99)99999-9999';
//         avisoTelefone.style.display = 'block';
//     }
// }

// //feedback
// function verificarCep() {
//     let cep = event.target.value;
//     let avisoCep = document.getElementById('avisoCep');
//     avisoCep.innerHTML = 'Verifique o campo novamente. ';
//     if (regexCep.test(cep)) {
//         avisoCep.style.display = 'none';
//         temCep = true;
//     }
//     else {
//         avisoCep.innerHTML = avisoCep.textContent + 'Use o formato padrão de CEP 10000-000';
//         avisoCep.style.display = 'block';
//     }
// }
// //feedback
// function verificarNumero() {
//     let numero = event.target.value;
//     let avisoNumero = document.getElementById('avisoNumero');
//     avisoNumero.innerHTML = 'Verifique o campo novamente. ';
//     if (regexNumero.test(numero)) {
//         avisoNumero.style.display = 'none';
//         temNumero = true;
//     }
//     else {
//         avisoNumero.innerHTML = avisoNumero.textContent + 'Digite pelo menos 1 número ou até 5. ';
//         avisoNumero.style.display = 'block';
//     }

// }
// //feedback
// function verificarRua() {
//     let rua = event.target.value;
//     let temdois = false;
//     let naotemnumero = false;
//     let avisoRua = document.getElementById('avisoRua')
//     avisoRua.style.display = 'block'
//     avisoRua.innerHTML = "Verifique novamente os campos. "
//     if (rua.length >= 2) {
//         temdois = true;
//         avisoRua.style.display = 'none'
//     }
//     else {
//         avisoRua.innerHTML = avisoRua.textContent + 'Precisa de pelo menos 2 caracteres. ';
//     }

//     if (regexSoCaracter.test(rua)) {
//         avisoRua.innerHTML = avisoRua.textContent + 'Não pode ter números.';

//     } else {
//         naotemnumero = true;
//     }
//     if (naotemnumero && temdois) {
//         avisoRua.style.display = 'none'
//         temRua = true;
//     }
//     else {
//         avisoRua.style.display = 'block'
//     }
// }
// //feedback
// function verificarEstado() {
//     let estado = document.getElementById('estado').value;
//     let avisoEstado = document.getElementById('avisoEstado');
//     avisoEstado.style.display = 'block'
//     avisoEstado.innerHTML = "Verifique novamente os campos. "
//     if (estado) {
//         avisoEstado.style.display = 'none';
//         temEstado = true;
//     } else {
//         avisoEstado.style.display = 'block';
//         avisoEstado.innerHTML = 'Selecione um estado válido.';
//     }
// }

// function verificarSimNao() {
//     let simSelecionado = document.getElementById('sim').checked;
//     let areaResposta = document.getElementById('areaResposta');
//     let respostaTextArea = document.getElementById('resposta1');
//     let avisoResposta = document.getElementById('avisoResposta');

//     if (simSelecionado) {
//         areaResposta.style.display = 'block';
//         verificarResposta();
//     } else {
//         avisoResposta.style.display = 'none';
//         temProcedimento = true;
//     }
// }

// function verificarResposta() {
//     let simSelecionado = document.getElementById('sim').checked;
//     let respostaTextArea = document.getElementById('resposta1');
//     let avisoResposta = document.getElementById('avisoResposta');
//     let palavras = respostaTextArea.value.trim().split(' ');
//     if (simSelecionado && palavras.length < 3) {
//         avisoResposta.innerHTML = 'Informe pelo menos 3 palavras.';
//         avisoResposta.style.display = 'block';
//     } else {
//         avisoResposta.style.display = 'none';
//         temProcedimento = true;
//     }
// }
// //feedback
// function verificarDoenca() {
//     let opcoesDoenca = document.querySelectorAll('input[name="doenca"]');
//     let textoArea = document.getElementById('resposta2');
//     let avisoDoenca = document.getElementById('avisoDoenca');

//     let selecionada = false;
//     for (let i = 0; i < opcoesDoenca.length; i++) {
//         if (opcoesDoenca[i].checked && opcoesDoenca[i].id !== 'nenhuma') {
//             selecionada = true;
//         }
//     }

//     let palavras = textoArea.value.trim().split(' ');

//     if (selecionada && palavras.length < 3) {
//         avisoDoenca.style.display = 'block';
//         avisoDoenca.textContent = 'Informe a sua experiência com pelo menos 3 palavras.';
//     } else {
//         avisoDoenca.style.display = 'none';
//     }
// }

// function verificarSenha() {
//     let senha = event.target.value;
//     let avisoSenha = document.getElementById('avisoSenha');
//     avisoSenha.innerHTML = 'Verifique o campo novamente. ';
//     let regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//     if (regexSenha.test(senha)) {
//         avisoSenha.style.display = 'none';
//     }
//     else {
//         avisoSenha.innerHTML = avisoSenha.textContent + 'Digite uma senha com 8 caracteres no minímo, 1 caracter maiuscúlo e minuscúlo e 1 caracter especial. ';
//         avisoSenha.style.display = 'block';
//     }
// }

// function verificarSenhaIgual() {
//     let senha = document.getElementById('senha').value;
//     let senhaRepetida = document.getElementById('senhaRepetida').value;
//     let avisoSenhaRepetida = document.getElementById('avisoSenhaRepetida');

//     if (senha === senhaRepetida) {
//         avisoSenhaRepetida.style.display = 'none';
//     } else {
//         avisoSenhaRepetida.innerHTML = 'As senhas não correspondem.';
//         avisoSenhaRepetida.style.display = 'block';
//     }
// }




// var lista = [
//     { nome: 'João', telefone: '123456789', email: 'joao@hotmail.com', avaliacao: 'Medio' },
//     { nome: 'Caio', telefone: '987654321', email: 'Caio@hotmail.com', avaliacao: 'Muito Bom' },
//     { nome: 'Paulo', telefone: '998745612', email: 'Paulo@hotmail.com', avaliacao: 'Bom'},
//     { nome: 'Gustavo', telefone: '112345678', email: 'Gustavo@hotmail.com', avaliacao: 'Bom'},
//     { nome: 'Gabriel', telefone: '221345678', email: 'Gabriel@hotmail.com', avaliacao: 'Medio'},
//     { nome: 'Marcos', telefone: '998123456', email: 'Marcos@hotmail.com', avaliacao: 'Muito Bom'}
// ];

// function enviarDados() {
//     var vnome = document.getElementById('nomecompleto').value;
//     var vtelefone = document.getElementById('telefone').value;
//     var vemail = document.getElementById('email').value;
//     var radios = document.getElementsByName('exampleForm');
//     var avisoDados = document.getElementById('avisoDados');
//     avisoDados.innerHTML = 'Verifique o campo novamente. ';
//     var valorSelecionado = false;

//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             valorSelecionado = radios[i].value;
//         }
//     }

//     var camposPreenchidos = true;

//     if (!vnome || !vtelefone || !vemail) {
//         avisoDados.innerHTML += 'Por favor, preencha todos os campos obrigatórios. ';
//         avisoDados.style.display = 'block';
//         camposPreenchidos = false;
//     } else {
//         avisoDados.style.display = 'none';
//     }

//     if (valorSelecionado === false) {
//         avisoDados.innerHTML += 'Por favor, selecione uma avaliação para o nosso produto. ';
//         avisoDados.style.display = 'block';
//         camposPreenchidos = false;
//     }

//     if (camposPreenchidos) {
//         lista.push({ nome: vnome, telefone: vtelefone, email: vemail, avaliacao: valorSelecionado });
//         criarTabela();
//         document.getElementById('formFeedback').reset();
//         avisoDados.style.display = 'none';
//     }
// }

// function criarTabela() {
//     var tableBody = '';
//     for (var i = 0; i < lista.length; i++) {
//         var fb = lista[i];
//         tableBody += `
//             <tr>
//                 <td><input type="checkbox" data-email="${fb.email}"/></td>
//                 <td>${fb.nome}</td>
//                 <td>${fb.telefone}</td>
//                 <td>${fb.email}</td>
//                 <td>${fb.avaliacao}</td>
//                 <td><input type="button" value="Excluir" 
//                 style="color: white; 
//                 border-radius: 10px; 
//                 padding: 5px;
//                 background-color: rgb(250, 59, 59);
//                 border-color: rgb(250, 59, 59);
//                 font-weight: bold;" 
//                 class="btnExcluir" onClick="excluirItem('${fb.email}')"></a></td>
//             </tr>`;
//     }
//     var tabelaFeedback = document.getElementById('tabelaFeedback').getElementsByTagName('tbody')[0];
//     tabelaFeedback.innerHTML = tableBody;
// }

// function adicionarFeedback(nome, telefone, email, avaliacao) {
//     lista.push({ nome: nome, telefone: telefone, email: email, avaliacao: avaliacao });
//     criarTabela();
// }

// function excluirItem(emailDel) {
//     console.log('Email para excluir:', emailDel);
//     lista = lista.filter(function(item) {
//         return item.email !== emailDel;
//     });
//     criarTabela();
// }

// function excluirSelecionados() {
//     let listaCheckbox = document.querySelectorAll('[data-email]');
//     let emailsParaExcluir = [];

//     let algumSelecionado = false;

//     listaCheckbox.forEach(ch => {
//         if (ch.checked) {
//             algumSelecionado = true;
//             let email = ch.dataset.email;
//             console.log('Email para excluir:', email);
//             emailsParaExcluir.push(email);
//         }
//     });

//     if (algumSelecionado) {
//         emailsParaExcluir.forEach(email => {
//             excluirItem(email);
//         });
//     } else {
//         alert('Nenhum item selecionado');
//     }
// }

// function selecionaTodos() {
//     let listaCheckbox = document.querySelectorAll('[data-email]');
//     let ckPai = document.querySelector('#ckTodos');
//     for (let ch of listaCheckbox) {
//         ch.checked = ckPai.checked;
//     }
// }

// /*document.getElementById('formFeedback').addEventListener('submit', function (event) {
//     criarTabela();
//     event.preventDefault();
//     var vnome = document.getElementById('nomecompleto').value;
//     var vtelefone = document.getElementById('telefone').value;
//     var vemail = document.getElementById('email').value;
//     var radios = document.getElementsByName('exampleForm');
//     var valorSelecionado = '';
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             valorSelecionado = radios[i].value;
//         }
//     }
//     adicionarFeedback(vnome, vtelefone, vemail, valorSelecionado);
//     document.getElementById('formFeedback').reset();
// });*/

// document.addEventListener('DOMContentLoaded', function () {
//     criarTabela();
//     let btnSelec = document.querySelector('#btnExcluirSelecionados');
//     btnSelec.addEventListener('click', excluirSelecionados, false);
//     let ckPai = document.querySelector('#ckTodos');
//     ckPai.addEventListener('click', selecionaTodos, false);
// }, false);