import CodevEmitter from '../'

const { strictEqual: is } = assert
const { spy } = sinon

describe('CodevEmitter', function () {
  it('test', function () {
    const emitter = new CodevEmitter()
    const cb1 = spy()
    const cb2 = spy()

    emitter.on('test', cb1)
    emitter.on('test', cb2)
    emitter.emit('test')

    is(cb1.callCount, 1)
    is(cb2.callCount, 1)

    emitter.removeListener('test', cb2)
    emitter.emit('test')

    is(cb1.callCount, 2)
    is(cb2.callCount, 1)
  })
})
