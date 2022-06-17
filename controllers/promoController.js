
const logService = require('../services/logService')

class PromoController{

    async addPromo(req,res){
        try{

            return res.json({hello:'qwe'})

        }catch (e) {
            logService.addLog('PromoController.addPromo', e)
            return  res.json({warning:true})
        }
    }
    // async listenPort(port){
    //     client.send('promoQuest', async (message, data)=>{
    //        if(!data.code) {
    //            await logService.addLog('addPromoController, portListener', `Нет данных: code:${data.code} userData:${data.user_data}`)
    //            message.reply({warning:true, message:'Не заполнено code'})
    //        }else{
    //            const resPromo = await promoService.addPromo(data.code, data.userData)
    //            if(resPromo){
    //                message.reply({warning:false})
    //            }else{
    //                message.reply({warning:true})
    //            }
    //        }
    //
    //    })
    //
    // }
}

module.exports = new PromoController()