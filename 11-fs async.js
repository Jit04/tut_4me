const {readFile, WriteFile, writeFile} = require('fs')


readFile(`./Content/first.txt`, `utf8`, (err, result ) => {
        if (err) {
            console.log(err)
            resturn
        }

        const first = result
        readFile(`./Content/Second.txt`, 'utf8', (err, result) => {
            if (err) {
                console.log(err)
                return
            }

            const Second = result

            writeFile('./Content/result-async.txt',
                        `Here is the result : ${first}, ${Second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
         })
        })
})