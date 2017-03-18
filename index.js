function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    const values = document.querySelectorAll('ul.ranked-list li')

    for (let i=0, l=values.length; i < l; i++) {
      values[i].innerHTML = parseInt(values[i].innerHTML) + n
    }
}

function deepestChild() {
  var parent = document.getElementById('grand-node')
  var children = parent.children[0]

  while (children) {
    parent = children
    children = parent.children[0]
  }

  return parent
}
