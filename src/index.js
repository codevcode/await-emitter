const Emitter = require('events')

class CodevEmitter extends Emitter {
  constructor () {
    super()
  }

  finish (type, ...args) {
    // Refer the process of `Emitter.emit` to rewrite

    // CORE, call the listeners and wait them to finish
    const listeners = this.listeners(type)
    return Promise.all(listeners.map(l => l(...args)))
  }
}

module.exports = CodevEmitter
