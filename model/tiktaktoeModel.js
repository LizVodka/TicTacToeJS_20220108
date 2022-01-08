class tictactoeModel{
    //leellenőrzi, hogy az X vagy az O nyert-e
    constructor(tomb){
        this.tomb = tomb;
    }

    getEll(){
        let txt = this.getVellenorzes()+this.getFellenorzes()+this.getAellenorzes();
        let allapot = "";
        if(txt.indexOf("XXX")>= 0) {
            allapot = "X";
        }
        if(txt.indexOf("OOO")>= 0) {
            allapot = "O";
        }
        return allapot;
    }

    getAellenorzes(){
        let ell = "";
        ell += this.tomb[0].ertek + this.tomb[4].ertek+ this.tomb[8].ertek + "|" + this.tomb[2].ertek + this.tomb[4].ertek+ this.tomb[6].ertek;
        return ell;
    }

    getFellenorzes(){
        let ell="";
        for (let index = 0; index < 3; index++) {
            ell += this.tomb[index].ertek + this.tomb[index+3].ertek+ this.tomb[index+6].ertek + "|";
            
        }
        return ell;
    }

    getVellenorzes(){
        //tömbből előszedi az Xés O értékeket, és előállítja belőle az ellenőrző stringet
        console.log(this.tomb);
        let ellString = "";
        this.tomb.forEach((element, index) => {
            ellString += element.ertek;
            if(index%3 == 2){
                ellString += "|";
            }
        })
        return ellString;
    }
}