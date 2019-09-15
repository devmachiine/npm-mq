const arr = []

const size = () => arr.length

const push = (item) => arr.push(item)

const pull = () => arr.length
    ? { value: arr.shift() }
    : {}

const pull_fun = (f) => arr.length ? f(arr.shift()) : undefined

module.exports = {
    size
    , push
    , pull
    , pull_fun
}