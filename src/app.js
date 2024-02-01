import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()


//Configurations

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})) //this is to limit the amount of data
app.use(express.urlencoded({extended:true, limit:"16kb"})) //this is to limit the amount of data from urls
app.use(express.static("public")) //this will store images and other files for temporary purpose in public
app.use(cookieParser())//this is to enable the user to access the cookies in the browser and also set the cookies

export {app}