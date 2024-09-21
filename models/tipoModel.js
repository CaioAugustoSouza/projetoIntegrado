const Database = require("../utils/database");

class TipoModel{
        #tipoNome;

        constructor(tipoNome)
        {
            this.#tipoNome = tipoNome;
        }

        get tipoNome() {
            return this.#tipoNome
        }

        set tipoNome(novo_tipoNome){
            this.#tipoNome = novo_tipoNome;
        }

        async cadastrar(){
            let sql = "insert into Tb_TipoPessoa (Tipo_Nome) values (?)"
            let valores = [this.#tipoNome];
            let db = new Database();
            let result = await db.ExecutaComandoNonQuery(sql, valores);
            return result;
        }

}

module.exports = TipoModel;