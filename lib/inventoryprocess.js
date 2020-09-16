const CLI = require('clui');

const Spinner = CLI.Spinner;

const inv = require('./inventory');
const invQuantity = require('./inventoryquantity');

let invCost;

module.exports = {
    getInstance: () => {
        return invCost;
    },

    getInvCst: async () => {

        const invInfo = await inv.inputOfInv();

        const status = new Spinner('please wait for a while...');

        status.start();

        try {
            
            var uRegex = new RegExp("^[B][0-9]{3}[A-Z]{2}[0-9]{7}$");

            var gRegex = new RegExp("^[A][A-Z]{2}[0-9]{9}$");
            
            let finalPrice 

            if (uRegex.test(invInfo.p_no)) {
                
                const uMaskInfo = invQuantity.ukInvM()
                const uGloveInfo = invQuantity.ukInvG()

                if(invInfo.m_pd_qt > uMaskInfo.qt){
                    return "product quantity is greater so please reduce it"
                }

                if(invInfo.g_pd_qt > uGloveInfo.qt){
                    return "product quantity is greater so please reduce it"
                }

                let totalQuantity = invInfo.m_pd_qt + invInfo.g_pd_qt
                let quantityShippingValue = (totalQuantity / 10) * 400;

                finalPrice = (invInfo.m_pd_qt *  uMaskInfo.ct) + (invInfo.m_pd_qt *  uMaskInfo.ct) + quantityShippingValue
                
            }else if (gRegex.test(invInfo.p_no)){

                const grMaskInfo = invQuantity.grInvM()
                const grGloveInfo = invQuantity.grInvG()

                if(invInfo.m_pd_qt > grMaskInfo.qt){
                    return "product quantity is greater so please reduce it"
                }

                if(invInfo.g_pd_qt > grGloveInfo.qt){
                    return "product quantity is greater so please reduce it"
                }

                let totalQuantity = invInfo.m_pd_qt + invInfo.g_pd_qt
                let quantityShippingValue = (totalQuantity / 10) * 400;

                finalPrice = (invInfo.m_pd_qt *  uMaskInfo.ct) + (invInfo.m_pd_qt *  uMaskInfo.ct) + quantityShippingValue
            
            }else{
                return "Country don't have stock"
            }

            if (finalPrice !== undefined) {

                return {
                    "pur_contr": invInfo.pur_contr,
                    "p_no": invInfo.p_no,
                    "m_pd_qt": invInfo.m_pd_qt,
                    "g_pd_qt": invInfo.g_pd_qt,
                    "finalPrice" : finalPrice
                };

            } else {

                throw new Error("");

            }
        } finally {
            status.stop();
        }
    },
};