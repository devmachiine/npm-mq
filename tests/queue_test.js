const q = require('../lib/queue')

module.exports = async ({ test, assert, affirm, alike }) => [
    test("new queue has size 0", () => {
        assert(q.size(), 0)
    })
    , test("enqueue items increases size", () => {
        q.push("hello")
        q.push("world")
        assert(q.size(), 2)
    })
    , test("pull from queue returns added items in fifo order", () => {
        const { value: hello } = q.pull()
        const { value: world } = q.pull()
        assert(hello, "hello")
        assert(world, "world")
    })
    , test("pull from queue returns item in value property", () => {
        q.push(1)
        const v = q.pull()
        assert(true, v.hasOwnProperty('value'))
    })
    , test("pull from empty queue returns empty item", () => {
        assert(q.size(), 0)
        const v = q.pull()
        assert(false, q.hasOwnProperty('value'))
        alike(v, {})
    })
    , test("pull_fun runs statement if item pulled", () => {
        assert(q.size(), 0)
        const empty = q.pull_fun(_na => assert(true, false))
        assert(typeof empty, 'undefined')

        const id = x => x
        q.push('test')
        assert(q.pull_fun(id), 'test')

        q.push(5)
        const result = q.pull_fun(item => item + 2)
        assert(result, 7)
    })
]