class Schema {
  constructor() {
    this.sendTo = '';
    this.sendToMany = [];
    this.messages = [];
    this.notification = false;
  }

  to(...args) {
    if (typeof args[0] === 'string') this.sendTo = args.join('');
    else this.sendToMany = args;

    return this;
  }

  text(message) {
    this.messages.push({
      type: 'text',
      text: message,
    });

    return this;
  }

  sticker(packageId, stickerId) {
    this.messages.push({
      type: 'sticker',
      packageId,
      stickerId,
    });

    return this;
  }

  image(previewImageUrl, originalContentUrl) {
    this.messages.push({
      type: 'image',
      originalContentUrl,
      previewImageUrl,
    });

    return this;
  }

  video(previewImageUrl, originalContentUrl) {
    this.messages.push({
      type: 'video',
      originalContentUrl,
      previewImageUrl,
    });

    return this;
  }

  audio(originalContentUrl, duration) {
    this.messages.push({
      type: 'audio',
      originalContentUrl,
      duration,
    });

    return this;
  }

  locationMessage(title, address, latitude, longtitude) {
    this.messages.push({
      type: 'location',
      title,
      address,
      latitude,
      longtitude,
    });

    return this;
  }

  notification(status = true) {
    this.notification = status;
  }

  schemaBuilder() {
    const results = {
      to: this.sendTo === '' ? this.sendToMany : this.sendTo,
      messages: this.messages,
      notificationDisabled: this.notification,
    };

    this.sendTo = '';
    this.sendToMany = [];
    this.messages = [];
    this.notification = false;

    return results;
  }
}

module.exports = new Schema();
