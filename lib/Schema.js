const ImageMap = require('./schema/ImageMap');
const QuickReply = require('./schema/QuickReply');

class Schema {
  constructor() {
    this.sendTo = null;
    this.messages = [];
    this.notification = false;
  }

  to(sendTo) {
    this.sendTo = sendTo;

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

  location(title, address, latitude, longitude) {
    this.messages.push({
      type: 'location',
      title,
      address,
      latitude,
      longitude,
    });

    return this;
  }

  imageMap(baseUrl, altText, callback) {
    callback(ImageMap);

    this.messages.push({
      type: 'imagemap',
      baseUrl,
      altText,
      baseSize: {
        width: 1040,
        height: 1040,
      },
      video: ImageMap.videos,
      actions: ImageMap.actions,
    });

    ImageMap.video = {};
    ImageMap.actions = [];

    return this;
  }

  notificationDisabled(status = true) {
    this.notification = status;

    return this;
  }

  quickReply(text, callback) {
    callback(QuickReply);
    this.messages.push({
      type: 'text',
      text,
      quickReply: {
        items: QuickReply.items,
      },
    });

    return this;
  }

  schemaBuilder() {
    const results = {
      to: this.sendTo,
      messages: this.messages,
      notificationDisabled: this.notification,
    };

    this.sendTo = null;
    this.messages = [];
    this.notification = false;

    return results;
  }

  /* istanbul ignore next */
  schemaReplyBuilder(replyToken) {
    const results = {
      replyToken,
      messages: this.messages,
      notificationDisabled: this.notification,
    };

    this.messages = [];
    this.notification = false;

    return results;
  }
}

module.exports = new Schema();
