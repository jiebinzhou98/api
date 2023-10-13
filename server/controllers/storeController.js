require('../models/db');
const Store = require('../models/store');


// /api/stores/
// get all stores

exports.listStores = async(req,res) =>{

    try {
        const name = req.query.name;
        let query = {};
        if(name){
            query = {name:{$regex: new RegExp(name, 'i')}};
        }

        const stores = await Store.find(query);
        res.json(stores);

    } catch (error) {
        res.status(400).json({message:err})
    }
}


// post single store
exports.insertSingleStore = async(req,res)=>{

    const newStore = new Store({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        quantity:req.body.quantity,
        category:req.body.category,
        categories:req.body.categories
    });

    try {
        await newStore.save();
        res.json(newStore)
    } catch (err) {
        res.status(400).json({message:err})
    }
}

//update single store
exports.updateSingleStore = async(req, res) =>{
    let paramID = req.params.id;
    let name = req.body.name;

    try {
        const updateStore = await Store.updateOne({_id:paramID}, {name:name});
        res.json(updateStore);
    } catch (error) {
        res.status(400).json({message:err})
    }
}

//delete single store
exports.deleteSingleStore = async(req, res) =>{
    let paramID = req.params.id;
    try {
        const data = await Store.deleteOne({_id:paramID});
        res.json(data);
    } catch (error) {
        res.status(400).json({message:err})
    }
}

exports.deleteSingleStore = async(req, res) =>{
    try {
        const deleteStore = await Store.deleteMany({});
        res.json(deleteStore);
    } catch (error) {
        res.status(400).json({message:err})
    }
}


// async function insertStores(){
//     try {
//         await Store.insertMany([
//             {
//                 "name":"Product 1",
//                 "description": "Description of product 1",
//                 "price": 4.99,
//                 "quantity": 3,
//                 "category":"food",
//                 "categories.name":"Men"
//             },
//         ]);
//     } catch (error) {
//         console.log(error);
//     }
// }

// insertStores();