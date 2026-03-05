
const models = require('../models')

const getAuthorById = (req, res) => {
    models.Author.findByPk(req.params.id,{
        include: [{
            model: models.Article
        }]
    })
    .then(author =>{
        console.log(author)
        return res.status(200).json({ author })
    })
    .catch (error => {
        return res.status(500).send(error.message)
    })
    
}

module.exports = { getAuthorById }