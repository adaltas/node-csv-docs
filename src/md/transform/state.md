---
title: State
description: Stream Transform - internal state properties
keywords: ['stream', 'transform', 'state', 'running', 'started', 'finished']
sort: 6
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

`embed:packages/stream-transform/samples/state.instance.js`

## Function contextualisation

The handler and event functions are bound with the context of the transformer. Thus, it is possible to access the state properties from inside the functions. Also, the Node.js stream API will call the functions associated with events with the context of the stream instance. Of course, this won't work with fat arrow functions.

The [state handler example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/state.handler.js) references the state properties from inside the user function and check their values.

`embed:packages/stream-transform/samples/state.handler.js`
