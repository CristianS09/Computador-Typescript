class Pc {
    nome: string;
    ram: number;
    cpu: number;
    ligado: boolean;

    constructor(nome: string, ram: number, cpu: number) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }

    info(): void {
        console.log(`Pc: ${this.nome}`);
        console.log(`Ram: ${this.ram} GB`);
        console.log(`Cpu: ${this.cpu} GHZ`);
        console.log(this.ligado ? 'Ligado' : 'Desligado');
        console.log('-------------------------')
    }

    status(value: boolean): boolean {
        return this.ligado = value;
    }

}

const computador = new Pc('Gamer', 24, 3.90);
computador.status(false);
computador.info();


const computador2 = new Pc('Escritório', 8, 2.50)
computador2.status(true);
computador2.info();