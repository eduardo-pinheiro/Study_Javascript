function init() {
  detector.start()
  render('loading')
}

function reset() {
  detector.stop()

  const resetState = {
    emotions: {
      anger: [],
      contempt: [],
      disgust: [],
      engagement: [],
      fear: [],
      joy: [],
      sadness: [],
      valence: [],
    },
    frameFlag: false
  }

  state.setState(resetState)

  render('start')
}

function finish() {
  detector.stop()
  render('final')
  renderGraph()
}