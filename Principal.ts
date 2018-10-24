declare function require(msg : string) : any;
var readline = require('readline-sync');

import {Funcionario} from "./Funcionario";
import {Professor} from "./Professor";
import {STA} from "./STA";
import {Terceirizado} from "./Terceirizado";

let funcionarios : Array<Funcionario> = [];

function addBonus(funcionarios : Funcionario[], bonus: number): void{
	let v = (bonus/funcionarios.length);
	for(let f of funcionarios){
		f.setBonus(v);
	}
}

let comando : string = readline.question("Digite um comando: ");

do{
	if (comando == "addProf"){
		let n:string = readline.question("Digite um nome: ");
		let c:string = readline.question("Digite a classe: ");
		let prof: Professor = new Professor(n,c);// Objeto
		funcionarios.push(prof);
	
	}
	
	else if (comando == "addSta"){
		let n:string = readline.question("Digite um nome: ");
		let nv:number = readline.question("Digite o nivel: ");
		let sta: STA = new STA(n, 0, nv);//Objeto
		funcionarios.push (sta);
	
	}
	
	else if(comando == "addTer"){
		let n:string = readline.question("Digite um nome: ");
		let horas:number = readline.question("Digite as horas: ");
		let insalubre: string = readline.question("Digite se for insalubre:");
		let ter: Terceirizado = new Terceirizado(n,horas,true);
		if (insalubre == "nao"){
			ter.setInsalubre(false);
		}
		funcionarios.push (ter);
	
	}
	
	else if(comando == "show"){
		let nome: string = readline.question("Digite o nome do funcionario: ");
		for(let i of funcionarios){
			if(i.getNome() == nome){
				i.toString();
			
			}else{
				console.log("Não existe");
			}
		}
	}

	else if(comando == "remover"){
		let nome: string = readline.question("Digite o nome do funcionario: ");
		for(let i of funcionarios){
			if(i.getNome() == nome){
				let posicao = funcionarios.indexOf(i);
				funcionarios.splice(posicao, 1);
			}else{
				console.log("Não existe");
			}
		}
	}

	else if(comando == "add diaria"){
		let nome: string = readline.question("Digite o nome do funcionario: ");
		for(let i of funcionarios){
			if(i.getNome() == nome){
				i.addDiaria();
			}
		}

	}

	else if(comando == "add bonus"){
		let b: number = readline.question("Digite valor do bônus: ");
		addBonus(funcionarios, b);
	}

}while(comando == "Sair");