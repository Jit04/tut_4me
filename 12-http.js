const http = require('http')

const server = http.createServer((req, res) => {

        if(req.url === '/'){
            res.end('Welcome to our page')
        }else if(req.url === '/about'){
            res.end('History of version of about of node of js')
        }else { res.end(`
                <h1>Done error let me have look</h1>
                <p>Done looking, found error go back</p>
                <a href="/">Go back you buffoon</a>
            
        `)
    }
        
    }

)

server.listen(12000)