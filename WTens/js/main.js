
  /* Pagina Sobre */

function umClique(){
    document.getElementById("img-fluid").src="../images/sobre-img.png";
    document.getElementById("img-fluid1").src="../images/piano6.png";
  }
  
  function doisCliques(){
    document.getElementById("img-fluid").src="../images/mti1.png";
    document.getElementById("img-fluid1").src="../images/mti2.png";
  
  }
  

  /* Validação Newsletter */

  const newsletter = document.querySelector("#form_news");

  newsletter.addEventListener("submit", function(event){
    

    let inputEmailNews = document.getElementById("email_news");

    if (inputEmailNews.value == "") {
      event.preventDefault();
      alert("Preencha o email");
    }else if (inputEmailNews.value.length < 4) {
      event.preventDefault();
      alert("O campo e-mail deve estar completo");
    }else {
      alert ("O e-mail: " + inputEmailNews.value + " foi cadastrado com sucesso!")
    } 
  
    localStorage.setItem('Email newsletter: ', inputEmailNews.value)
  });  



// Validação de formulário  
const formulario = document.forms['menu_form'];

formulario.addEventListener("submit", function(event){
  
  let erros = []
  let inputName = document.getElementById("nameid");
  let inputEmail = document.getElementById("email");
  let inputEndereco = document.getElementById("address");
  let inputNumero = document.getElementById("number");
  let inputMensagem = document.getElementById("mensagem");


  if (inputName.value == "") {
    erros.push("O campo deve estar completo")
  }else if(inputName.value.length < 3){
    erros.push("o campo nome deve ter pelo menos 3 caracteres")
  }
  if (erros.length > 0) {
    event.preventDefault();
    //imprimir erro na div 'erros' criada no html
    let ulErros = document.querySelector("div.erros ul");
  for(let i = 0; i < erros.length; i++){
    ulErros.innerHTML += '<li>' + erros[i] + '</li>'}  
  }else if(erros.length <= 0){
    alert('Obrigado Sr(a) ' + inputName.value + ' os seus dados foram encaminhados com sucesso!');
  }

  localStorage.setItem('Nome', inputName.value)
  localStorage.setItem('Email', inputEmail.value)
  localStorage.setItem('Endereço', inputEndereco.value)
  localStorage.setItem('Número', inputNumero.value)
  localStorage.setItem('Mensagem', inputMensagem.value)
});

  /*enviar formulario*/
  document.querySelector("#menu_form").onsubmit = function(event){
    event.preventDefault();
    console.log('quero enviar o formulario')
};




  /* Aulas */

  const aulas = [
    {
      name: "bateria",
      professor: "Monica",
      horario: "Segunda as 10hs",
    }, 
    {
      nome: "canto",
      professor: "Morgana",
      horario: "Terça as 18hs",
    },
    {
      name: "guitarra",
      professor: "Shirley",
      horario: "Quarta as 10hs",
    },
    {
      name: "violino",
      professor: "Pedro",
      horario: "Quinta as 18hs",
    },
  ];

aulas.push({
    name: "incluir",
    professor: "incluir",
    horario: "incluir",
})
console.log(aulas)

// Fizemos de duas formas, com o metodo acima e com o construtor abaixo: 
/*function Aula(curso, professor, horario) {
  this.curso = curso;
  this.professor = professor;
  this.horario = horario;
}

const novaAula = new Aula("violino", "maria", 19 );
aulas.push(novaAula)
console.log(aulas)*/
  

  
