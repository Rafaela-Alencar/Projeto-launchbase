const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const videos = require("./data")

server.use(express.static ('public'))

server.set("view engine", "njk" )

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res){
    const about ={
        avatar_url:"https://avatars3.githubusercontent.com/u/66562005?s=460&u=31a84fb4b8ddc0bd7f5675b504de44278b826a0e&v=4",
        name: "Rafaela Alencar",
        role:"Programadora Front-end",
        description:'Iniciando na área de tecnologia da informação, atuando como Desenvolvedora Front-end com foco em HTML, CSS e Java Script.',
        links: [
            {name:"Github", url:"https://github.com/Rafaela-Alencar/"},
            {name:"Linkedin", url:"https://www.linkedin.com/in/rafaela-alencar-7866771b1/"},
            {name:"instagram", url:"rafaelaalves.rodrigues/"}

        ]
    }

    return res.render("about", {about})
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio", {items: videos})
})

server.listen(5000, function() {
    console.log("server is runing")
} )