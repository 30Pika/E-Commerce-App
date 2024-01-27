import ProductsSche from "../Module/ProductsSche.js";

const ProductsCon = async (req, res) => {
    try {
        const data = new ProductsSche(req.body);
        const result = await data.save();
        if (result) {
            res.send({
                status: true,
                message: "Product Data Store Successfully..."
            });
        }
    } catch (error) {
        res.send({
            status: false,
            message: "Error from Products Controller",
            error
        })
    }
}

export default ProductsCon;