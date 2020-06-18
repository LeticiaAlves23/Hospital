class Hospital {
    constructor(Nome, Leitos, tipo, paciente) {
        this.Nome = Nome;
        this.Leitos = Leitos;
        this.tipo = tipo;
        this.paciente = paciente
    }

    adicionarPaciente(p){
        console.log("Cadastrando" + p.nome)
        this.paciente.push(p)
    }
}

class Paciente {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}
var h1;
var h2;

function Salvar() {
    let HospitalNormal = parseInt(document.getElementById("HospitalNormal").value)
    let HospitalCampanha = parseInt(document.getElementById("HospitalCampanha").value)

     h1 = new Hospital(HospitalNormal, 0, "N", [])
     h2 = new Hospital(HospitalCampanha, 0, "C", [])

    console.log(H1)
    console.log(h2)

}

function adicionarPaciente(){

    let nome =  document.getElementById("nome").value
    let idade =  document.getElementById("idade").value
  
    let sexo = document.querySelector("input[type=radio]:checked").value
    
    let p =  new Paciente (nome, idade, sexo)

    let htmlPaciente =  `<div>${p.nome} | ${p.idade} | ${p.sexo}</div>`;

    let Hosp1 = "Hospital Normal"
    let Hosp2 = "Hospital Campanha"
 
}

