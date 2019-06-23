let divStream = document.getElementById('stream')

let width = 640
let height = 480

let faceMode = affdex.FaceDetectorMode.SMALL_FACE

let detector = new affdex.CameraDetector(divStream, width, height, faceMode)

let intervalPointer

let startTime = 0

//Start
detector.addEventListener("onInitializeSuccess", function () {

  render('ongoing')

  //Define intervalo de tempo entre cada captura
  intervalPointer = setInterval(() => {
    let newState = state.getState()
    newState.frameFlag = true
    state.setState(newState)
  }, 200);
})

//Frame detect
detector.addEventListener("onImageResultsSuccess",
  (faces, image, timestamp) => {

    startTime = !startTime ? timestamp : startTime

    let currentState = state.getState()

    if (currentState.frameFlag) {
      setEmotionsInState(faces, timestamp - startTime)
      reactEmotions(faces, timestamp - startTime)
    }
  }
)

//Stop
detector.addEventListener("onStopSuccess", function () {
  clearInterval(intervalPointer)
})

//Classificadores
detector.detectAllEmotions()
