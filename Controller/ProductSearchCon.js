import ProductsSche from "../Module/ProductsSche.js";

const ProductSearchCon = async (req, res) => {
    try {
        // const { filed, filedname } = req.params.key;
        // const obj = req.params.key;
        // console.log(obj.searchKey)
        // console.log(req.params.key)
        // console.log(filed, filedname);
        const data = await ProductsSche.find({
            $or: [
                { name: { $regex: req.params.key } }
            ],
        });
        if (data) {
            res.send({
                status: true,
                data
            })
        }
    } catch (error) {
        res.send({
            status: false,
            message: `Error From Product Search Controller : ${error}`
        })
    }
}

export default ProductSearchCon;