import {Funcionario} from"./Funcionario";

export class STA extends Funcionario{
	private nivel: number;

	
	public constructor(nome: string, nivel: number, diaria: number = 0, bonus: number = 0){
		super(nome, diaria, bonus);
		this.nivel = nivel;
	}
	public getNivel(): number{
		return this.nivel;
	}
	public setNivel(nivel : number) : void{
		this.nivel = nivel;
	}

    public calcularSalario() : number{
    	let salario: number = 3000 + (300 * this.nivel) + (this.getDiaria()*100);
    	return salario;
    }

	public addDiaria() : boolean{
  		if(this.getDiaria() < 1){
  			this.setDiaria(this.getDiaria() + 1);
  			return true;
  		}else{
  			return false;
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
		res += "Sta \n";
		res += super.getNome() + "\n";
		res += this.nivel + "\n";
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