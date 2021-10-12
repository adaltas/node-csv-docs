---
title: State
description: Stream Transform - internal state properties
keywords: ['stream', 'transform', 'state', 'running', 'started', 'finished']
sort: 5
---

# Stream Transform state properties

The transform instance export a few properties which are also available from the user callback function:

* `transform.state.finished`   
  The number of transformation callback which have been executed; was `transform.finished` before version 2.
* `transform.state.running`   
  The number of transformation callback being run at a given time; was `transform.finished` before version 2.
* `transform.state.started`   
  The number of transformation callback which have been initiated; was `transform.finished` before version 2.

## Get state information

The [state instance example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/state.instance.js) illustrates how to accessed the state from a running instance.

```js
// Generate a dataset of 5 records
const records = 'record\n'.repeat(5).trim().split('\n')
// Initialize the transformation
const transformer = transform(records, (record, callback) => {
  setTimeout( () => {
    const {running, started, finished} = transformer.state
    callback(null, `${running}_${started}_${finished}\n`)
  }, 100)
})
// Get notify when done
transformer.on('end', () => {
  process.stdout.write('-------\n')
  const {running, started, finished} = transformer.state
  process.stdout.write(`${running}_${started}_${finished}\n`)
})
// Print the transformed records to the standard output
transformer.pipe(process.stdout)
```

## Function contextualisation

The handler and event functions are bound with the context of the transformer. Thus, it is possible to access the state properties from inside the functions. Also, the Node.js stream API will call the functions associated with events with the context of the stream instance. Of course, this won't work with fat arrow functions.

The [state handler example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/state.handler.js) references the state properties from inside the user function and check their values.

```js
// Generate a dataset of 5 records
const records = 'record\n'.repeat(5).trim().split('\n')
let test_running = records.length
let test_started = records.length
let test_finished = 0
// Execute the transformation
transform(records, function(record, callback){
  setTimeout( () => {
    const {running, started, finished} = this.state
    assert.equal(running, test_running--)
    assert.equal(started, test_started)
    assert.equal(finished, test_finished++)
    callback(null, `${running}_${started}_${finished}\n`)
  }, 100)
})
// Get notify on error
.on('end', function(){
  process.stdout.write('-------\n')
  const {running, started, finished} = this.state
  process.stdout.write(`${running}_${started}_${finished}\n`)
})
// Print the transformed records to the standard output
.pipe(process.stdout)
```
