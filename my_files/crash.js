// the random crash for now
// actual crash code credit the memload thing goes to claude
function crash() {
  if (crasha == 3 && crashtriggered == false) {
    beep.play()
    crashtriggered = true
    crashtime = timea }
  
  if (crashtriggered && timea - crashtime >= 6) {
    explosion.play()
    fill(0)
    rectMode(CENTER)
    rect(middle, middle - 150, 300, 35)
    fill(125)
    textSize(30)
    text("Ur unlucky to get this", middle, middle - 150)
    gamea = false
    buttons()
    noLoop()
    setInterval(() => {
      memLoad.push(new Array(10000000).fill(0)) }, 1) } }
