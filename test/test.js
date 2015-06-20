var tape = require('tape')
var sccmp = require('../sc-cmp')

tape('basic test', function(t) {

  var a = [
      [1, 2, 3],
      [3, 2, 4]
    ]

  var b = [
      [2, 4, 3],
      [3, 1, 2]
    ]

  var c = [
      [2, 1, 3],
      [3, 2, 4]
    ]

  var d = [
      [1, 2, 3],
      [1, 2, 4]
    ]

  t.equals(sccmp(a, b), 0)
  t.equals(sccmp(b, c), 0)
  t.equals(sccmp(a, c), 0)
  t.ok(sccmp(a, d) !== 0)

  t.end()
})
