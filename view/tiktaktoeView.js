class ElemView {
    constructor(szuloElem) {
        szuloElem.append(`<div><p></p></div>`);
        this.aktiv = true;
        this.ertek = "-";
        this.Elem = szuloElem.children('div:last');
        this.pElem = this.Elem.children('p');
        this.Elem.on('click',()=>{
            if(this.aktiv){
                this.kattintasTrigger();
                this.aktiv = false;
            }
        })
    }

    setAktivFalse(){
        this.aktiv = false;
    }

    setElem(ertek){
        this.pElem.text(ertek);
        this.ertek = ertek;
    }

    kattintasTrigger(){
        let esemeny = new CustomEvent("kattintas",{detail:this})
        window.dispatchEvent(esemeny);
    }
}

class JatekterView {
    constructor(tomb){
        const szuloelem = $('article');
        for (let index = 0; index < 9; index++) {
            tomb.push(new ElemView(szuloelem));
        }
    }
}

class InfoView {
    constructor(){
        this.kovetkezoJatekosElem = $(".kovetkezoJatekos")
        this.jatekvegeElem = $(".jatekvege")
        this.XjatekosElem= $("#Xman");
        this.OjatekosElem= $("#Oman");
        this.setKovJatekos(this.getXjatekos());
    }

    getOjatekos(){
        return this.OjatekosElem.val();
    }
    
    getXjatekos(){
        return this.XjatekosElem.val();
    }

    setJatekVege(szoveg){
        this.jatekvegeElem.text(szoveg)
    }

    setKovJatekos(szoveg){
        this.kovetkezoJatekosElem.text(szoveg)
    }
}