const express=require('express');
const connectDb=require('./config/db')
const userRoute=require('./Routes/userRoute')

const skillsRoute=require('./Routes/skillsRoute')
const projectsRoute=require('./Routes/projectsRoute')
const coursesRoute=require('./Routes/coursesRoute')
const aboutMeRoute=require('./Routes/aboutMeRoute')
const contactMeRoute=require('./Routes/contactMeRoute')
const cors = require('cors');

const port=4000;
const app=express();
app.use(express.json())
// app.use(cors())
app.use(cors())
connectDb()
app.use('/user',userRoute)

app.use('/skills',skillsRoute)
app.use('/projects',projectsRoute)
app.use('/courses',coursesRoute)
app.use('/aboutMe',aboutMeRoute)
app.use('/contactMe',contactMeRoute)
app.listen(port,()=>{console.log('server started at 4000')}) 