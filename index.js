const core = require("@actions/core")

const name = core.getInput('who-to-greet')
console.log(`Hello ${name}.`)
