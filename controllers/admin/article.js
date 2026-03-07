const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3000/joga_sequelize')

const models = require('../../models')

const createArticle = (req, res) =>{
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    const newArticle = models.Article.create({
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0, 19).replace('T',' ')
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({ msg:'New article is added'})
    })
    .catch (error =>{
        return res.status(500).send(error.message)
    })
}

const updateArticle = (req,res)=>{
    if(req.method === 'GET'){
        models.Article.findByPk(req.params.id)
        .then(article =>{

            modles.Author.findAll()
            .then(authors =>{
                return res.status(200).json({ article, authors })
            })
        }) .catch(error =>{
            return res.status(500).send(error.message)
        })
    }

    if (req.method === 'POST') {

        models.Article.update({
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: req.body.published,
            author_id: req.body.author_id
        },{
            where: { id: req.params.id }
        })
        .then(()=>{
            return res.status(200).json({msg: 'Article updated '})
        })
        .catch (error =>{
            return res.status(500).send(error.message)
        })
    }
}

module.exports = { createArticle, updateArticle }