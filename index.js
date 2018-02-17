const notes = {
  a: {

  },
  asharp: {
    alt: 'bflat'
  },
  b: {

  },
  c: {
    alt: 'bsharp'
  },
  csharp: {
    alt: 'dflat'
  },
  d: {

  },
  dsharp: {
    alt: 'eflat'
  },
  e: {
    alt: 'fflat'
  },
  f: {
    alt: 'esharp'
  },
  fsharp: {
    alt: 'gflat'
  },
  g: {

  },
  gsharp: {
    alt: 'aflat'
  }
}

let noteArr = []

for (let k in notes) {
  noteArr.push(k)
}

const major = [2,2,1,2,2,2,1]
const minor = [2,1,2,2,1,2,2]

function generateScale(init = 'c', isMajor = true, limit = 7) {
  let newNotes = []

  if (limit < 3) {
    throw new Error('need a minimum of 3 notes.')
  }

  const noteInitIdx = noteArr.indexOf(init.toLowerCase())

  if (noteInitIdx < 0) {
    throw new Error('not a valid note to start from. try c to start.')
  }

  let newSubScale = noteArr.slice(noteInitIdx)

  if (noteInitIdx > 0) {
    newSubScale = newSubScale.concat(noteArr.slice(0, noteInitIdx))
  }

  if (isMajor) {
    const majorRdc = major.slice(0, limit - 1)
    newNotes.push(newSubScale[0])

    let currIdx = 0

    majorRdc.forEach(function (m, idx) {
      newNotes.push(newSubScale[currIdx + m])
      currIdx = currIdx + m
    })
  } else {
    const minorRdc = minor.slice(0, limit - 1)
    newNotes.push(newSubScale[0])

    let currIdx = 0

    minorRdc.forEach(function (m, idx) {
      newNotes.push(newSubScale[currIdx + m])
      currIdx = currIdx + m
    })
  }
  console.log(newNotes)
  return newNotes
}


module.exports = generateScale