const connection = require("../database/connection");

module.exports = {
    async index(req, res) {
        const cargo = await connection('cargo').select('*')

        return res.json(cargo)
    },

    async create(req, res){
        const { descricao } = req.body

        const [id] = await connection('cargo').insert({
            descricao
        })

        return res.json({ id })

    },

    async delete(req, res){
        const { id } = req.params

        await connection('cargo').where('id', id).delete()

        return res.status(204).send()

    }

}