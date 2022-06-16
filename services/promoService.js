const PromoModel = require('../models/PromoModel')
const PromoDto = require('../dtos/PromoDto')
const logService = require('./logService')

// userData:{type:String},
// date:{type:Date},
// code:{type:String, required:true},
// description:{type:String},
// isActive:{type:Boolean},
// isActivate:{type:Boolean}

class PromoService {

    async addPromo(code, userData){
        try{
            const date = new Date()
            await PromoModel.create({userData, code, date, description:'',isActive:true,isActivate:false})
            return true
        }catch (e) {
            await logService.addLog('PromoService.addPromo', e)
            return false
        }
    }

    async getPromoByCode(code){
        try{
            const promoBD = await PromoModel.findOne({code})
            if(promoBD){
                return {warning:false, promo: new PromoDto(promoBD)}
            }else{
                return {warning:true, message:'Нет промокода'}
            }
        }catch (e) {
            await logService.addLog('PromoService.getPromoByCode', e)
            return {warning:true, message:"Ошибка при выгрузке промокодов"}
        }
    }
}

module.exports = new PromoService()