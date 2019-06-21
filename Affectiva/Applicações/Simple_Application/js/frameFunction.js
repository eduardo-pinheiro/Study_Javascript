async function frame(faces, timestamp) {

  const object = {
    emotions: faces[0].emotions,
    time: timestamp
  }

  if (object.emotions !== undefined) {

    const currentState = state.getState()
    let frames = currentState.frames
    frames.push(object)

    state.setState({
      frames
    })
  }
}