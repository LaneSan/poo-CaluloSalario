import {Funcionario} from"./Funcionario";
import { truncate } from "fs";

export class Terceirizado extends Funcionario{
	private horas : number;
	private insalubre : boolean;
	

	public constructor (nome : string, horas : number, insalubre : boolean, diaria: number = 0, bonus: number = 0){
		super (nome,diaria, bonus);
		this.horas = horas;
		this.insalubre = insalubre;
	}

	public getHoras():number{
		return this.horas;
	}
	public setHoras(horas:number):void{
		this.horas = horas;
	}	
    public isInsalubre():boolean{
    	return this.insalubre;
    }
    public setInsalubre(insalubre:boolean):void{
    	this.insalubre = insalubre;

	}
	
    public calcularSalario(): number{
    	let salario: number = (this.getHoras() *4) ;
    	if (this.insalubre == true){
			salario = salario + 500;
			return salario;
    	}
    	return salario;
	}
	
	public addDiaria(): boolean{
		return false;
	}

	public setBonus(bonus: number): void{
		if(bonus > 0){
			super.setBonus(bonus);
		}else{
			super.setBonus(0);
		}
  	}

	public toString() : string{
		let res : string = "";
		res += "Ter \n";
		res += super.getNome() + "\n";
		res += this.horas + "\n";
		if(this.insalubre == true){
			res += "Insalubre \n";
		}
		let sal : number = this.calcularSalario();
		if(super.getBonus() > 0){
			sal += super.getBonus();
			res += sal;
		}else{
			res += sal;
		}
		return res;
	}


}