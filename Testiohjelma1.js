class Nisakkaat { 
    constructor(p,v){
        this.paino=p;
        this.vari=v;
    }

    getVari() { return this.vari; }
    getPaino() { return this.paino; }
    Puhu() { throw new Error ("VIRHE"); }
    OnkoIso() { 
        if (this.paino > 9) { return true;}
        else { return false;}
    }
}

class Kettu extends Nisakkaat{
    constructor(p,v) {
        super(p,v); 
    }

    Puhu() { return "Mur Mur"; }
}

let repo = new Kettu(12, "punainen"); 
let foxy = new Kettu(11, "ruskea"); 

class Kissa extends Nisakkaat {
    constructor(p,v) {
        super(p,v);
    }

    Puhu() { return "Miu Miu"; }
}

let misse = new Kissa(5, "valkoinen");
let kalle = new Kissa(9, "harmaa"); 
let viiru = new Kissa(4, "mustavalkoinen");

console.log(repo.Puhu());
console.log(repo.OnkoIso());
console.log(foxy.Puhu());
console.log(foxy.OnkoIso());
console.log(misse.Puhu());
console.log(misse.OnkoIso());
console.log(kalle.Puhu());
console.log(kalle.OnkoIso());
console.log(viiru.Puhu());
console.log(viiru.OnkoIso());


