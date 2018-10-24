export class Funcionario{
	private nome: string;
	private diaria: number;
	private bonus: number;

	public constructor(nome: string, diaria: number, bonus: number){
		this.nome = nome;
		this.diaria = diaria;
		this.bonus = bonus;
	}
	public getNome(): string{
		return this.nome;
	}
	public setNome(nome: string): void{
		this.nome = nome;
	}
	public getDiaria(): number{
		return this.diaria ;
	}
	public setDiaria(diaria: number): void{
		this.diaria = diaria;
	}
	public getBonus(): number{
		return this.bonus;
	}
	public setBonus(bonus: number): void{
		this.bonus = bonus;
	}

    public calcularSalario():number{
    	return 0;
    }
    public addDiaria():boolean{
    	return false;
    }

}