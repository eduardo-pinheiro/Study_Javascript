async function setEmotionsInState(faces, timestamp) {

  const face = faces[0]

  if (face.emotions !== undefined) {

    const second = parseInt(timestamp % 60)
    const minut = parseInt(timestamp / 60)

    const milisecond = ((timestamp % 60) * 1000) % 1000

    const timestampDate = new Date(0, 0, 0, 0, minut, second, milisecond)

    const anger = { x: timestampDate, y: face.emotions.anger / 100 }
    const contempt = { x: timestampDate, y: face.emotions.contempt / 100 }
    const disgust = { x: timestampDate, y: face.emotions.disgust / 100 }
    const engagement = { x: timestampDate, y: face.emotions.engagement / 100 }
    const fear = { x: timestampDate, y: face.emotions.fear / 100 }
    const joy = { x: timestampDate, y: face.emotions.joy / 100 }
    const sadness = { x: timestampDate, y: face.emotions.sadness / 100 }
    const valence = { x: timestampDate, y: face.emotions.valence }


    let newState = state.getState()

    newState.emotions.anger.push(anger)
    newState.emotions.contempt.push(contempt)
    newState.emotions.disgust.push(disgust)
    newState.emotions.engagement.push(engagement)
    newState.emotions.fear.push(fear)
    newState.emotions.joy.push(joy)
    newState.emotions.sadness.push(sadness)
    newState.emotions.valence.push(valence)

    newState.frameFlag = true //trava

    state.setState(newState)
  }
}