# await-emitter

add `finish` method on node EventEmitter for waiting all aync listeners to finish.

```
npm install await-emitter
```

## Usage

Create a emitter instance and put it in the context or inject into modules used it.
```js
import Emitter from 'await-emitter'

const emitter = new Emitter()

```

Use `emitter.finish` to emit an event, you can waiting all listeners finish their work.
Then do the next action.
```js
await emitter.finish('flushCache')
await emitter.finish('saveData')
emitter.emit('saveDone')
```

