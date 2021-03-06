'use strict';
function Button(text) {
  this.text = text || 'Hello';
}

Button.prototype = {
  constructor: Button,
  create: function() {
    const self = this;
    this.$element = $('<button>');
    this.$element.text(this.text);
    this.$element.click(function() {
      alert(self.text);
    });
    this.$element.appendTo($('body'));
  }
};

// Button.prototype.create = function() {
//   const self = this;
//   this.$element = $('<button>');
//   this.$element.text(this.text);
//   this.$element.click(function() {
//     alert(self.text);
//   });
//   this.$element.appendTo($('body'));
// };

const btn1 = new Button('Hello!');
btn1.create();