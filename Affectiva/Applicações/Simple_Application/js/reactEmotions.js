function reactEmotions(faces, timestamp) {

  const face = faces[0]

  if (face.emotions !== undefined) {

    const raiva = face.emotions.anger
    const desprezo = face.emotions.contempt
    const nojo = face.emotions.disgust
    const medo = face.emotions.fear
    const felicidade = face.emotions.joy
    const tristeza = face.emotions.sadness

    document.getElementById('raiva').innerText = raiva.toFixed(2)+"%"
    document.getElementById('desprezo').innerText = desprezo.toFixed(2)+"%"
    document.getElementById('nojo').innerText = nojo.toFixed(2)+"%"
    document.getElementById('medo').innerText = medo.toFixed(2)+"%"
    document.getElementById('felicidade').innerText = felicidade.toFixed(2)+"%"
    document.getElementById('tristeza').innerText = tristeza.toFixed(2)+"%"

    console.log(nojo, typeof (nojo))
    console.log(raiva, typeof (raiva))
  }
}