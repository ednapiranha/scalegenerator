# scale generator

## usage

```
  const scale = require('./index')

  // paramaters: initial note, is this a major scale?, number of notes
  scale('c', true, 5) // get the first 5 notes of the c major scale
  // outputs => [ 'c', 'd', 'e', 'f', 'g' ]
```