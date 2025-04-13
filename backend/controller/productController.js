const productServices =  require("../services/productServices")

const createProduct = async (req, res) =>{
    try {
        const product  =  await productServices.createProduct(req.body)
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
} 

const deleteProduct = async (req,res) =>{
    const productId =  req.params.id
    try {
        const product  =  await productServices.deleteProduct(productId)
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
} 

const  updateProduct = async (req,res) =>{
    const productId =  req.params.id
    try {
        const product  =  await productServices.updateProduct(productId , req.body)
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
} 


const  findProductById = async (req,res) =>{
    const productId =  req.params.id
    try {
        const product  =  await productServices.findProductById(productId)
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
} 

const  getAllProducts = async (req,res) =>{
    const productId =  req.params.id
    try {
        const products  =  await productServices.getAllProducts(req.query)
        return res.status(201).send(products);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
} 

const  createMultipleProduct = async (req,res) =>{
    const productId =  req.params.id
    try {
        const products  =  await productServices.createMultipleProduct(req.body)
        return res.status(201).send({message:"Products created successfully"});
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
} 

module.exports = {createProduct , deleteProduct , updateProduct ,getAllProducts ,findProductById , createMultipleProduct}






