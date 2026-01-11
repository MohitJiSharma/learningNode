const os = require('os');

const osDetails = {
    user: os.userInfo(),
    totalMemory: os.totalmem(),
    freeMemory: os.freeMemory,
    name: os.type(),
    release: os.release()
}
console.log(osDetails);