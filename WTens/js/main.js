
  /* Pagina Sobre */

function umClique(){
    document.getElementById("img-fluid").src="../images/sobre-img.png";
    document.getElementById("img-fluid1").src="../images/piano6.png";
  }
  
  function doisCliques(){
    document.getElementById("img-fluid").src="../images/mti1.png";
    document.getElementById("img-fluid1").src="../images/mti2.png";
  
  }
  

  /* Newsletter */

  function verificaForm(){
    if(document.getElementById("email").value == ""){
      alert("Preencha o email");
      document.getElementById("email").focus();
      return false;
    }
    return true;
  }

    /* Contato */
    /*
    function Enviar() {

      let name = document.getElementById("nameid");
  
      if (name.value != "") {
          alert('Obrigado sr(a) ' + name.value + ' os seus dados foram encaminhados com sucesso');
      }
  }*/

// Validação de formulário  
const formulario = document.forms['menu_form'];

formulario.addEventListener("submit", function(event){
  let errosArray = []
  let inputName = document.querySelector("input.nameid");

  if (inputName.value == "") {
    errosArray.push('O campo deve estar completo')
  }else if(inputName.value.length < 3){
    errosArray.push('o campo nome deve ter pelo menos 3 caracteres')
  }
  if (errosArray.length > 0) {
    event.preventDefault();
  }
  let ulErros = document.querySelector('div.erros ul');
  for(let i = 0; i < errosArray.length; i++){
    ulErros.innerHTML += '<li>' + errosArray[i] + '</li>'
  }
});

console.log(formulario)

  /*enviar formulario*/
  document.querySelector("#menu_form").onsubmit = function(event){
    event.preventDefault();
    console.log('quero enviar o formulario')
}


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
  

  
