
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
    
    function Enviar() {

      let name = document.getElementById("nameid");
  
      if (name.value != "") {
          alert('Obrigado sr(a) ' + name.value + ' os seus dados foram encaminhados com sucesso');
      }
  
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
  

  
