const {readFileSync, WriteFileSync, writeFileSync} = require('fs')

const first = readFileSync('./Content/first.txt', 'utf8')
const second = readFileSync('./Content/Second.txt', 'utf8')

writeFileSync('./Content/result-sync.txt', `here is the result: ${first}, ${second}` )
