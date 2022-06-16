
class LogDto{
    id
    from
    date
    description
    constructor(model) {
        this.id = model.id?model.id.toString():''
        this.from = model.from?model.from:''
        this.date = model.date?model.date:''
        this.description = model.description?model.description:''
    }
}

module.exports = LogDto