// fps
function fps() {
  fill(175)
  rectMode(CENTER)
  rect(30, 20, 50, 20)
  textSize(15)
  textAlign(CENTER, CENTER)
  fill(0)
  text("Fps:" + round(frameRate()), 30, 20)
  rectMode(CORNER) }