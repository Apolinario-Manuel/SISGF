const connection = require("../database/connection");

module.exports = {
    async index(req, res) {
        const funcionario = await connection('funcionario').select('*')

        return res.json(funcionario)
    },

    async create(req, res){
        const { nome, sobrenome, cargo_id, data_nascimento, salario } = req.body

        const [id] = await connection('funcionario').insert({
            nome,
            sobrenome,
            cargo_id,
            data_nascimento,
            salario
        })

        return res.json({ id })

    },

    async delete(req, res){
        const { id } = req.params

        await connection('funcionario').where('id', id).delete()

        return res.status(204).send()

    }

}