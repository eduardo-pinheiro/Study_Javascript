let divStream = document.getElementById('stream')

let width = 640
let height = 480

let faceMode = affdex.FaceDetectorMode.LARGE_FACES

let detector = new affdex.CameraDetector(divStream, width, height, faceMode)

let intervalPointer

let startTime = 0

//Start
detector.addEventListener("onInitializeSuccess", function () {

  render('ongoing')
  
  intervalPointer = setInterval(() => {
    let currentState = state.getState()
    currentState.frameFlag = !currentState.frameFlag
    state.setState(currentState)
  }, 500);
})

//Frame detect
detector.addEventListener("onImageResultsSuccess",
  (faces, image, timestamp) => {

    startTime = !startTime ? timestamp : startTime

    let currentState = state.getState()

    if (currentState.frameFlag) {
      frame(faces, timestamp - startTime)
    }
  }
)

//Stop
detector.addEventListener("onStopSuccess", function () {
  clearInterval(intervalPointer)
})

//Classificadores
detector.detectAllEmotions()
