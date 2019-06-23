function renderGraph() {

  const newState = state.getState()

  const anger = newState.emotions.anger
  const contempt = newState.emotions.contempt
  const disgust = newState.emotions.disgust
  const fear = newState.emotions.fear
  const joy = newState.emotions.joy
  const sadness = newState.emotions.sadness

  let emotionsChart = new CanvasJS.Chart("emotionsChart", {
    animationEnabled: true,
    title: {
      text: "EMOÇÕES",
      fontFamily: "montserrat",
      fontWeight: "900"
    },
    axisY: {
      includeZero: false,
      valueFormatString: "#0%",
      minimum: 0,
      maximum: 1,
    },
    axisX: {
      includeZero: false,
      valueFormatString: "mm:ss",
    },
    toolTip: {
      shared: true
    },
    legend: {
      fontSize: 13,
    },
    data: [{
      type: "splineArea",
      showInLegend: true,
      name: "Raiva",
      yValueFormatString: "#0%",
      xValueFormatString: "mm:ss",
      color: '#FC040C',
      dataPoints: anger,
    },
    {
      type: "splineArea",
      showInLegend: true,
      name: "Felicidade",
      yValueFormatString: "#0%",
      xValueFormatString: "mm:ss",
      color: '#E0F410',
      dataPoints: joy,
    },
    {
      type: "splineArea",
      showInLegend: true,
      name: "Tristeza",
      yValueFormatString: "#0%",
      xValueFormatString: "mm:ss",
      color: '#04347C',
      dataPoints: sadness,
    },
    {
      type: "splineArea",
      showInLegend: true,
      name: "Desprezo",
      yValueFormatString: "#0%",
      xValueFormatString: "mm:ss",
      color: '#7C7B7B',
      dataPoints: contempt,
    },
    {
      type: "splineArea",
      showInLegend: true,
      name: "Nojo",
      yValueFormatString: "#0%",
      xValueFormatString: "mm:ss",
      color: '#56CF05',
      dataPoints: disgust,
    },
    {
      type: "splineArea",
      showInLegend: true,
      name: "Medo",
      yValueFormatString: "#0%",
      xValueFormatString: "mm:ss",
      color: '#040424',
      dataPoints: fear,
    },
    ]
  })

  emotionsChart.render()


  const engagement = newState.emotions.engagement

  let engagementChart = new CanvasJS.Chart("engagementChart", {
    animationEnabled: true,
    title: {
      text: "ENGAJAMENTO EMOCIONAL",
      fontFamily: "montserrat",
      fontWeight: "900"
    },
    axisY: {
      includeZero: false,
      valueFormatString: "#0%",
      minimum: 0,
      maximum: 1,
    },
    axisX: {
      includeZero: false,
      valueFormatString: "mm:ss",
    },
    toolTip: {
      shared: true
    },
    legend: {
      fontSize: 13,
    },
    data: [{
      type: "splineArea",
      yValueFormatString: "#0%",
      xValueFormatString: "mm:ss",
      color: 'skyblue',
      dataPoints: engagement,
    }
    ]
  })

  engagementChart.render()


  const valence = newState.emotions.valence

  let valenceChart = new CanvasJS.Chart("valenceChart", {
    animationEnabled: true,
    title: {
      text: "VALÊNCIA EMOCIONAL",
      fontFamily: "montserrat",
      fontWeight: "900"
    },
    axisY: {
      valueFormatString: "#",
      stripLines: [{
        value: 0,
        label: "Neutro",
        color: "skyblue"
      },
      {
        value: 60,
        label: "Emoções positivas",
        color: "grey"
      }, {
        value: -60,
        label: "Emoções negativas",
        color: "red"
      }],
      minimum: -100,
      maximum: 100,
    },
    axisX: {
      includeZero: false,
      valueFormatString: "mm:ss",
    },
    toolTip: {
      shared: true
    },
    legend: {
      fontSize: 13,
    },
    data: [{
      type: "spline",
      yValueFormatString: "#",
      xValueFormatString: "mm:ss",
      color: 'purple',
      dataPoints: valence,
    }
    ]
  })

  valenceChart.render()
}