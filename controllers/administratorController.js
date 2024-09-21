const TipoModel = require("../models/tipoModel");
class AdministratorController {
    administratorView(req, res) {
        res.render('administrator.ejs');
    }

    menuView(req, res) {
        res.render('usuarios/menu.ejs');
    }

    tipoView(req, res) {
        res.render('usuarios/tipoView.ejs');
    }

    async tipo(req,res) {
        let nomeTipo = req.body.nomeTipo;
        let tipo = new TipoModel(nomeTipo);
        let ok;
        let msg;
        let resposta = await tipo.cadastrar();
        if(resposta){
            ok = true;
            msg = "Sucesso";
        }
        else{
            ok = false;
            msg = "Inválido";
        }
        res.send({ok:ok, msg:msg});
           
    }

}

module.exports = AdministratorController;