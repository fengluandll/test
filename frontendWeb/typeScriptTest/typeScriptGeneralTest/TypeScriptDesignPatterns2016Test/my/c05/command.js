var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Command;
(function (Command) {
    var TextContext = /** @class */ (function () {
        function TextContext() {
            this.content = 'text content';
        }
        return TextContext;
    }());
    var TextCommand = /** @class */ (function () {
        function TextCommand(context) {
            this.context = context;
        }
        return TextCommand;
    }());
    var ReplaceCommand = /** @class */ (function (_super) {
        __extends(ReplaceCommand, _super);
        function ReplaceCommand(context) {
            return _super.call(this, context) || this;
        }
        ReplaceCommand.prototype.execute = function (index, length, text) {
            var content = this.context.content;
            this.context.content =
                content.substr(0, index) +
                    text +
                    content.substr(index + length);
        };
        return ReplaceCommand;
    }(TextCommand));
    var InsertCommand = /** @class */ (function (_super) {
        __extends(InsertCommand, _super);
        function InsertCommand(context) {
            return _super.call(this, context) || this;
        }
        InsertCommand.prototype.execute = function (index, text) {
            var content = this.context.content;
            this.context.content =
                content.substr(0, index) +
                    text +
                    content.substr(index);
        };
        return InsertCommand;
    }(TextCommand));
    var Client = /** @class */ (function () {
        function Client() {
            this.context = new TextContext();
            this.replaceCommand = new ReplaceCommand(this.context);
            this.insertCommand = new InsertCommand(this.context);
        }
        return Client;
    }());
    var client = new Client();
    $('.replace-button').click(function () {
        client.replaceCommand.execute(0, 4, 'the');
    });
    $('.insert-button').click(function () {
        client.insertCommand.execute(0, 'awesome ');
    });
    // todo run it on web
})(Command || (Command = {}));
//# sourceMappingURL=command.js.map