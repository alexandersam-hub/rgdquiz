const LogModel = require('../models/LogModel')
const LogDto = require('../dtos/LogDto')

class LogService{

    async addLog(from, description){
        try{
            const date = new Date()
            await LogModel.create({from, description, date})
            return true
        }catch (e) {
            console.log(e)
            return false
        }
    }

    async getLog(){
        try{
            const logsDB = await LogModel.find()
            const logs = []
            logsDB.forEach(log=>logs.push(new LogDto(log)))
            return {warning:false, logs}
        }catch (e) {
            console.log(e)
            return false
        }
    }

}

module.exports = new LogService()