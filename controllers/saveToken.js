const { default: mongoose } = require("mongoose")
const mongooose = require("mongoose")
const Tokens = require("./tokenModel")
const config = require("../config")
exports.addToken = (tokenVal,user_name,repoVal) => {
    mongooose.connect(config.mongoDbUrl, { useNewUrlParser: true }, err => {

        if (!err) {
            userToken = new Tokens({
                username: user_name,
                token: tokenVal,
                repo: repoVal
            })

            userToken.save((err, tok) => {
                if (err) {
                    console.log(err.message)
                }
                else {
                    res.send("Token Added")
                }
            }
            )
        }
        else {
            console.log(err.message)

        }
    })
}

exports.getToken = (req, res) => {
    mongoose.connect(config.mongoDbUrl, { useNewUrlParser: true }, (err) => {
        const user_name = req.query.username
        Tokens.findOne({ username: user_name }, (err, token) => {
            res.send(token)
        })
    })
}