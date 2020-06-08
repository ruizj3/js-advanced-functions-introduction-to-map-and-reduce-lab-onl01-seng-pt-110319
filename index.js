function mapToNegativize(x) {
  let r = []
  for (let i = 0; i < x.length; i++ ) {
    r.push(-1 * x[i])
  }
  return r
}

function mapToNoChange(x) {
  let r = []
  for (let i = 0; i < x.length; i++ ) {
    r.push(x[i])
  }
  return r
}

function mapToDouble(x) {
  let r = []
  for (let i = 0; i < x.length; i++ ) {
    r.push(2 * x[i])
  }
  return r
}

function mapToSquare(x) {
  let r = []
  for (let i = 0; i < x.length; i++ ) {
    r.push(x[i] * x[i])
  }
  return r
}

function reduceToTotal(x, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < x.length; i++ ) {
    total += x[i]
  }
  return total
}

function reduceToAllTrue(x) {
  for (let i = 0; i < x.length; i++ ) {
    if (!x[i]) return false
  }
  return true
}

function reduceToAnyTrue(x) {
  for (let i = 0; i < x.length; i++ ) {
    if (x[i]) return true
  }
  return false
}
