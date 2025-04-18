const Category = require("../models/CategoryModel");
const Product = require("../models/ProductModel");


async  function createProduct(reqData){
    let topLevel = await Category.findOne({
        name:reqData.topLevelCategory
    });

    if(!topLevel){
         topLevel =  new Category({
            name:reqData.topLevelCategory,
            level:1
         })

         await topLevel.save()
    }

    let secondLevel = await Category.findOne({
        name:reqData.secondLevelCategory,
        parentCategory:topLevel._id,

    })

    if(!secondLevel){
        secondLevel = new  Category({
            name:reqData.secondLevelCategory,
            parentCategory:topLevel._id,
            level:2,
        })
        await secondLevel.save()

    }
    let thirdLevel = await Category.findOne({
        name:reqData.thirdLevelCategory,
        parentCategory:secondLevel._id,
    })

    if(!thirdLevel){
        thirdLevel = new  Category({
            name:reqData.thirdLevelCategory,
            parentCategory:secondLevel._id,
            level:3
        })
        await thirdLevel.save()
    }

    const product = new Product ({
        title:reqData.color,
        color:reqData.color,
        description:reqData.description,
        discountedPrice:reqData.discountedPrice,
        discountPresent:reqData.discountPresent,
        imageUrl:reqData.imageUrl,
        brand:reqData.brand,
        price:reqData.price,
        sizes:reqData.size,
        quantity:reqData.quantity,
        category:thirdLevel._id
    })

    return await product.save()
    
}

async function deleteProduct(productId) {
    const product = await findProductById(productId)
    await Product.findByIdAndDelete(productId)
    return "Product deleted Successfully"
}

async function updateProduct(productId, reqData){
    return  await Product.findByIdAndDelete(productId, reqData)
}


async function  findProductById (id){
    
   const product =  await Product.findById(id).populate("category").exec()
   if(!product){
    throw new Error("Product not Found with Id" + id);
   }

   return product;
}

async function getAllProducts(reqQuery){
    let {category, color, sizes,minPrice,maxPrice,miniDiscount,sort,stock,pageNumber,pageSize} =  reqQuery
    pageSize= pageSize || 10;
    let query = Product.find().populate("category");

    if(category){
        const existCategory =  await Category.findOne({name:category})
        if(existCategory){
            query= query.where("category").equals(existCategory._id);
        }

        else{
            return {content:[],currentPage:1,totalPage:0}
        }
    }

    if(color){
        const colorSet =  new Set(color.split(",").map(color => color.trim().toLowerCase()))

        const colorRegex =  colorSet.size > 0?  new RegExp([...colorSet].join("|"),"i") :null;
        query =  query.where("color").regex(colorRegex);

    }

    if(sizes){
        const sizesSet =  new (sizes);
        query.query.where("sizes.name").in([...sizesSet])
    }

    if(minPrice && maxPrice){
        query = (await query.where('discountedPrice').gte(minPrice)).filter(maxPrice);
    }
    if(miniDiscount){
        query=  await query.where("discountPersent").gt(miniDiscount);
    }

    if(stock){
        if(stock ==  "in_stock"){
            query = query.where("quantity").gt(0)
        }
        else if(stock ==  "Out_of_stock"){
            query = query.where("quantity").gt(1)
        }
    }
    if(sort){
         const sortDirection =  sort === "price_hight"?-1:1;
         query =  query.sort({discountedPrice:sortDirection})
    }
    const totalProduct = await Product.countDocuments(query)
    const skip = (pageNumber-1)*pageSize;
    query = query.skip(skip).limit(pageSize)
    const products = await query.exec()
    const totalPages= Math.ceil(totalProduct/pageSize)

    return {content:products, currentPage:pageNumber,totalPages}
}

async function createMultipleProduct(products){
    for(let product of products){
        await createProduct(product)
    }
}

module.exports ={createProduct , deleteProduct ,updateProduct,findProductById,getAllProducts,createMultipleProduct}
