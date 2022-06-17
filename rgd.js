const express = require('express')
const authRouter = require('./routers/authRouters')
const constructorRouter = require('./routers/constructorRouter')
const quizRouter = require('./routers/quizRouter')
const questionRouter = require('./routers/questionRouter')
const completedRouter = require('./routers/completedRouter')
const imageRouter = require('./routers/imagesRouters')
const supportRouter = require('./routers/supportRouter')
const categoryRouter = require('./routers/categoryRouter')
const promoRouter = require('./routers/promoRouter')
const authServices = require('./services/authServices')


const mongoose = require('mongoose')
const fs = require('fs');


const https = require('https');
const cors = require('cors')

const options = {
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
};

require('dotenv').config()


const PORT = process.env.PORT || 8010
const app = express()

// app.use('/',(req,res)=>{
//     return res.send('Этот сервер работает только в режиме API')
// })

app.use(express.json({ limit: "50mb" }))
app.use(express.static(__dirname+'/public'));
app.use(
    cors({
        // credentials: true,
        // origin: [process.env.URL_CLIENT],
        // optionsSuccessStatus: 200
    })
);
// app.use(require('helmet')());
app.use('/api/auth',authRouter)
app.use('/api/constructor',constructorRouter)
app.use('/api/quiz',quizRouter)
app.use('/api/questions', questionRouter)
app.use('/api/completed', completedRouter)
app.use('/api/image/', imageRouter)
app.use('/api/support/', supportRouter)
app.use('/api/category/', categoryRouter)
app.use('/api/promo/', promoRouter)

const insertAdmin = ()=>{
    if(authServices.adminUser())
        console.log(`admin is ready`)
}

const start = async ()=>{
    try {
        insertAdmin()
        await mongoose.connect(process.env.DB_URL)
        https.createServer(options, app).listen(8449);
        app.listen(PORT,()=>{
            console.log(`start on port ${PORT}`)
        })
        // https.createServer(options, app).listen(8443);
    }
    catch (e) {
        console.log(e)
    }

}

start()