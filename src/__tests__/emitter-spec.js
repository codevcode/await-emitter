import CodevEmitter from '../'

const { strictEqual: is } = assert
const { spy } = sinon

const isPromise = v => (typeof v === 'object' && typeof v.then === 'function')

describe('CodevEmitter', function () {
  let emitter = null
  beforeEach(function () {
    emitter = new CodevEmitter()
  })
  it('can add listener and emit event', function () {
    const cb1 = spy()
    const cb2 = spy()

    emitter.on('event', cb1)
    emitter.on('event', cb2)
    emitter.emit('event')

    is(cb1.callCount, 1)
    is(cb2.callCount, 1)

    emitter.removeListener('event', cb2)
    emitter.emit('event')

    is(cb1.callCount, 2)
    is(cb2.callCount, 1)
  })
  describe('has finish', function () {
    it('is method', function () {
      is(typeof emitter.finish, 'function')
    })
    it('can emit event', function () {
      const cb1 = spy()
      emitter.on('event', cb1)

      emitter.finish('event')

      is(cb1.callCount, 1)
    })
    it('can emit event with args', function () {
      const cb1 = spy()
      emitter.on('event', cb1)

      emitter.finish('event', 'a', 'b')

      is(cb1.calledWith('a', 'b'), true)
    })
    it('return a Promise', function () {
      const cb1 = spy()
      emitter.on('event', cb1)

      const result = emitter.finish('event', 'a', 'b')

      is(isPromise(result), true)
    })
    it('support aysnc listener', async function () {
      const cb1 = spy()
      const cbPromise = spy()
      const cb2 = spy(() => (
        new Promise(
          (resolve) => setTimeout(() => resolve('b'), 1)
        )
        .then(cbPromise)
      ))

      emitter.on('event', cb1)
      emitter.on('event', cb2)

      await emitter.finish('event')

      is(cb1.callCount, 1)
      is(cb2.callCount, 1)
      is(cbPromise.callCount, 1)

      is(cb1.calledBefore(cb2), true)
    })
  })
})
