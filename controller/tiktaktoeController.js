class tictactoeController{
    constructor(){
        const TTTtomb = [];

        new JatekterView(TTTtomb);
        const infoView = new InfoView();
        const tttModel = new tictactoeModel(TTTtomb);
        let lepes = 0;

        $(window).on("kattintas",(event)=>{
            if(lepes%2 == 0){
                event.detail.setElem("X");
                let nev = infoView.getOjatekos()
                infoView.setKovJatekos(nev +" következik");
            }
            else{
                event.detail.setElem("O");
                let nev = infoView.getXjatekos()
                infoView.setKovJatekos(nev + " következik");
            }
            lepes++;
            //kiírjuk, ha nyert valaki (kezeljük az állapotot [győzelem, döntetlen, folytatás])
            let allapot = tttModel.getEll();
            if ( allapot == "X") {
                let nev = infoView.getXjatekos()
                jatekVege(nev + " nyert");
            }
            else if(allapot == "O") {
                let nev = infoView.getOjatekos()
                jatekVege(nev + " nyert");
            }
            else if (lepes == 9){
                jatekVege("Döntetlen")
            }
        })

        function jatekVege(szoveg){
            TTTtomb.forEach(elem => {
                elem.setAktivFalse();
            })
            
            infoView.setJatekVege(szoveg);
        }
    }
}