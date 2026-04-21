function time() {
  fill(100)
  rectMode(CENTER)
  textSize(15)
  textAlign(CENTER, CENTER)
  if (timea <= 9) {
    rect(canvas_x - 35, 20, 55, 20)
    fill(0)
    text("Time:" + timea, canvas_x - 35, 20) }
  else {
    rect(canvas_x - 40, 20, 65, 20)
    fill(0)
    text("Time:" + timea, canvas_x - 40, 20) }

  rectMode(CORNER) }