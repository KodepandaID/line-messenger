const QuickReply = require('./QuickReply');

class RichMenu {
  constructor() {
    this.size = {
      width: 2500,
      height: 843,
    };
    this.selected = false;
    this.name = null;
    this.chatBarText = null;
    this.areas = [];
  }

  sizeMenu(width = 2500, height = 843) {
    this.size.width = width;
    this.size.height = height;

    return this;
  }

  selectedMenu() {
    this.selected = true;

    return this;
  }

  nameMenu(text) {
    this.name = text;

    return this;
  }

  chatbar(text) {
    this.chatBarText = text;

    return this;
  }

  area(x = 0, y = 0, width = 2500, height = 843, callback) {
    callback(QuickReply);
    this.areas.push({
      bounds: {
        x,
        y,
        width,
        height,
      },
      action: QuickReply.items[0].action,
    });
    QuickReply.items = [];

    return this;
  }

  schemaBuilder() {
    const results = {
      size: this.size,
      selected: this.selected,
      name: this.name,
      chatBarText: this.chatBarText,
      areas: this.areas,
    };

    this.size = {
      width: 2500,
      height: 843,
    };
    this.selected = false;
    this.name = null;
    this.chatBarText = null;
    this.areas = [];

    return results;
  }
}

module.exports = new RichMenu();
