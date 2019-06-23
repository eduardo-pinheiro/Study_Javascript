let state = {

  current: {
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
  },

  prev: {},

  setState: function (object) {
    this.prev = this.current
    this.current = object
  },

  getState: function (type) {
    return type !== 'prev' ? this.current : this.prev
  }
}