const core = require("@actions/core")

const name = core.getInput('name-to-greet')
console.log(`Hello ${name}.`)
