class PromoDto{
    id
    userData
    date
    code
    description
    isActive
    isActivate

    constructor(model) {
        this.id = model.id?model.id.toString():''
        this.userData = model.userData?model.userData:''
        this.date = model.date?model.date:''
        this.code = model.code?model.code:''
        this.description = model.description?model.description:''
        this.isActive =  model.isActive?model.isActive:false
        this.isActivate =  model.isActivate?model.isActivate:false
    }
}

module.exports = PromoDto