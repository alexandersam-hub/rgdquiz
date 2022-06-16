const QuizModel = require('../models/QuizModel')
const QuizDto = require('../dtos/QuizDto')

class QuizService{

    async getAllActiveQuiz(){
        try {
            const quizzes = await QuizModel.find({isActive: true})
            if (quizzes){
                const quizzesDto = []
                quizzes.forEach(quiz=>{
                    quizzesDto.push({...new QuizDto(quiz)})
                })
                return quizzesDto
            }

            return null
        }
        catch (e) {
            console.log(e)
            return null
        }
    }
    async getAllQuiz(){
        try {
            const quizzes = await QuizModel.find()
            if (quizzes){
                const quizzesDto = []
                quizzes.forEach(quiz=>{
                    quizzesDto.push({...new QuizDto(quiz)})
                })
                return quizzesDto
            }

            return null
        }
        catch (e) {
            console.log(e)
            return null
        }
    }

    async getQuizById(quizId){
        try {

            const quiz = await QuizModel.findById(quizId)

            if(quiz)
                return {...new QuizDto(quiz)}
            return null
        }
        catch (e) {
            return null
        }
    }

}

module.exports = new QuizService()