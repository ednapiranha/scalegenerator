# scale generator

## usage

```
  const scale = require('./index')

  // paramaters: initial note, is this a major scale?, number of notes
  scale('c', 'major', 5) // get the first 5 notes of c major scale
  // outputs => [ 'c', 'd', 'e', 'f', 'g' ]

  scale('dsharp', 'lydian') // get 7 notes of d# lydian
  // outputs => [ 'dsharp', 'f', 'g', 'a', 'asharp', 'c', 'd' ]
```