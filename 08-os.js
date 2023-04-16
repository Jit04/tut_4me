const os = require(`os`)

const user = os.userInfo()

console.log(user);

console.log(`the system uptime is ${os.uptime()}  seconds`);

const current0S = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(current0S);