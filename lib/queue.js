const arr = []

const size = () => arr.length

const push = (item) => arr.push(item)

const pull = () => arr.shift()

module.exports = {
    size,
    push,
    pull
}