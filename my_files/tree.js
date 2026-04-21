// def not tree
function tree(x, y) {
  fill(90, 60, 30)
  rectMode(CENTER)
  rect(x, y, 20, 50)
  fill(55, 150, 75)
  circle(x, y - 50, 60)
  circle(x - 20, y - 25, 50)
  circle(x + 20, y - 25, 50)
  rectMode(CORNER) }
