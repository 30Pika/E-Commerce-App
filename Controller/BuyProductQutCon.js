import BuyProductSche from "../Module/BuyProductSche.js";

const BuyProductQutCon = async (req, res) => {
    try {
        const result = await BuyProductSche.updateOne(
            { _id: req.params.id },
            {
                $set: req.body,
            }
        );
        res.send(result);
    } catch (error) {
        res.send({
            status: false,
            message: `Error From Buy Proudct Quntity Update Controller : ${error}`
        })
    }
}

export default BuyProductQutCon;