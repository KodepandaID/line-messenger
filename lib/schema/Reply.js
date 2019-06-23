class Reply {
  constructor() {
    this.items = [];
  }

  postback(label, text, postbackEvent) {
    this.items.push({
      type: 'action',
      action: {
        type: 'postback',
        label,
        data: postbackEvent,
        text,
      },
    });

    return this;
  }

  text(label, text) {
    this.items.push({
      type: 'action',
      action: {
        type: 'message',
        label,
        text,
      },
    });

    return this;
  }

  dateTimePicker(label, postbackEvent, initial, max, min, mode = 'datetime') {
    this.items.push({
      type: 'action',
      action: {
        type: 'datetimepicker',
        label,
        data: postbackEvent,
        mode,
        initial,
        max,
        min,
      },
    });

    return this;
  }

  camera(label) {
    this.items.push({
      type: 'action',
      action: {
        type: 'camera',
        label,
      },
    });

    return this;
  }

  cameraRoll(label) {
    this.items.push({
      type: 'action',
      action: {
        type: 'cameraRoll',
        label,
      },
    });

    return this;
  }

  location(label) {
    this.items.push({
      type: 'action',
      action: {
        type: 'location',
        label,
      },
    });

    return this;
  }
}

module.exports = new Reply();
