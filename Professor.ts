import {Funcionario} from"./Funcionario";

export class Professor extends Funcionario{
	private classe: string;

	public constructor (nome: string, classe:string, diaria: number = 0,bonus: number = 0){
		super(nome, diaria, bonus);
		this.classe = classe;

	}

	public getClasse():string{
		return this.classe;
	}
	public setClasse(classe:string):void{
		this.classe = classe;
	}

	public addDiaria() : boolean{
		if(super.getDiaria() >= 0 && super.getDiaria() < 2){
			super.setDiaria(super.getDiaria() + 1);
			return true;
		}else{
			return false;
		}
	}

  	public calcularSalario() : number{

  		if (this.classe == "A"){
  			return 3000 + (this.getDiaria() * 100);
  		}else if (this.classe == "B"){
  			return 5000 + (this.getDiaria() * 100);
  		}else if (this.classe == "C"){
  			return 7000 + (this.getDiaria() * 100);
  		}else if (this.classe == "D"){
  			return 9000 + (this.getDiaria() * 100);
  		}else if (this.classe == "E"){
			return 11000 + (this.getDiaria() * 100);
		}
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
		res += "Professor \n";
		res += super.getNome() + "\n";
		res += this.classe + "\n";
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