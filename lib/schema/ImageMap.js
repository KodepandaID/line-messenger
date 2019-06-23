class ImageMap {
  constructor() {
    this.videos = {};
    this.actions = [];
  }

  video(originalContentUrl, previewImageUrl, width = 1040, height = 585, x = 0, y = 0) {
    this.videos = {
      originalContentUrl,
      previewImageUrl,
      area: {
        x,
        y,
        width,
        height,
      },
    };

    return this;
  }

  externalLink(linkUri, label) {
    this.videos.exterLink = {
      linkUri,
      label,
    };

    return this;
  }

  actionUri(linkUri, width = 520, height = 454, x = 0, y = 0) {
    this.actions.push({
      type: 'uri',
      linkUri,
      area: {
        x,
        y,
        width,
        height,
      },
    });

    return this;
  }

  actionMessage(label, text, width = 520, height = 454, x = 0, y = 0) {
    this.actions.push({
      type: 'message',
      label,
      text,
      area: {
        x,
        y,
        width,
        height,
      },
    });

    return this;
  }
}

module.exports = new ImageMap();
