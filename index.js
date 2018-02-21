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
const naturalMinor = [2,1,2,2,1,2,2]
const harmonicMinor = [2,1,2,2,1,3,1]
const melodicMinor = [2,1,2,2,2,2,1]
const lydian = [2,2,2,1,2,2,1]

function generateScale(init = 'c', scaleType = 'major', limit = 7) {
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

  let rdc

  switch (scaleType) {
    case 'major':
      rdc = major.slice(0, limit - 1)
      break
    case 'naturalMinor':
      rdc = naturalMinor.slice(0, limit - 1)
      break
    case 'harmonicMinor':
      rdc = harmonicMinor.slice(0, limit - 1)
      break
    case 'melodicMinor':
      rdc = melodicMinor.slice(0, limit - 1)
      break
    case 'lydian':
      rdc = lydian.slice(0, limit - 1)
      break
    default:
      break
  }

  newNotes.push(newSubScale[0])

  let currIdx = 0

  rdc.forEach(function (m, idx) {
    newNotes.push(newSubScale[currIdx + m])
    currIdx = currIdx + m
  })
  console.log(newNotes)
  return newNotes
}


module.exports = generateScale