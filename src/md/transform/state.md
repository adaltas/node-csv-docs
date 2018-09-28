---
title: State
description: Stream Transform - internal state properties
keywords: ['intro','page']
sort: 5
---

# Stream Transform state properties

The transform instance export a few properties which are also available from the user callback function:

* `transform.running`   
  The number of transformation callback being run at a given time.
* `transform.started`   
  The number of transformation callback which have been initiated.
* `transform.finished`   
  The number of transformation callback which have been executed.

## Get state information

The [state instance example](https://github.com/adaltas/node-stream-transform/blob/master/samples/state.instance.js) illustrates how to accessed the state from a running instance.

```js
// Generate a dataset of 5 records
const records = 'record\n'.repeat(5).trim().split('\n')
// Initialize the transformation
const transformer = transform(records, (record, callback) => {
  setTimeout( () => {
    const {running, started, finished} = transformer
    callback(null, `${running}_${started}_${finished}\n`)
  }, 100)
})
// Get notify when done
transformer.on('end', () => {
  process.stdout.write('-------\n')
  const {running, started, finished} = transformer
  process.stdout.write(`${running}_${started}_${finished}\n`)
})
// Print the transformed records to the standard output
transformer.pipe(process.stdout)
```

## Function contextualisation

The handler and event functions are bound with the context of the transformer. Thus, it is possible to access the state properties from inside the functions. Also, the Node.js stream API will call the functions associated with events with the context of the stream instance. Of course, this won't work with fat arrow functions.

The [state handler example](https://github.com/adaltas/node-stream-transform/blob/master/samples/state.handler.js) references the state properties from inside the user function and check their values.

```js
// Generate a dataset of 5 records
const records = 'record\n'.repeat(5).trim().split('\n')
let test_running = records.length
let test_started = records.length
let test_finished = 0
// Execute the transformation
transform(records, function(record, callback){
  setTimeout( () => {
    const {running, started, finished} = this
    assert.equal(running, test_running--)
    assert.equal(started, test_started)
    assert.equal(finished, test_finished++)
    callback(null, `${running}_${started}_${finished}\n`)
  }, 100)
})
// Get notify on error
.on('end', function(){
  process.stdout.write('-------\n')
  const {running, started, finished} = this
  process.stdout.write(`${running}_${started}_${finished}\n`)
})
// Print the transformed records to the standard output
.pipe(process.stdout)
```
