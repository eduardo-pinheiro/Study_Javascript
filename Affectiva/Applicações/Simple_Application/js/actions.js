function init() {
  detector.start()
  render('loading')
}

function reset() {
  detector.stop()
  render('start')
}

function finish() {
  detector.stop()
  render('final')
}