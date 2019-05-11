const q = require('../lib/queue')

module.exports = async ({ test, assert, affirm }) => [
    test("new queue has size 0", () => {
        assert(q.size(), 0)
    })
    , test("enqueue items increases size", () => {
        q.push("hello")
        q.push("world")
        assert(q.size(), 2)
    })
    , test("pull from queue returns added items in fifo order", () => {
        assert(q.pull(), "hello")
        assert(q.pull(), "world")
    })
]