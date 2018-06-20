namespace Command {
    class TextContext {
        content = 'text content';
    }

    abstract class TextCommand {
        protected constructor(
            public context: TextContext
        ) {
        }

        abstract execute(... args: any[]): void;
    }

    class ReplaceCommand extends TextCommand {

        constructor(context: TextContext) {
            super(context);
        }

        execute(index: number, length: number, text: string): void {
            let content = this.context.content;

            this.context.content =
                content.substr(0, index) +
                text +
                content.substr(index + length);
        }
    }

    class InsertCommand extends TextCommand {

        constructor(context: TextContext) {
            super(context);
        }

        execute(index: number, text: string): void {
            let content = this.context.content;

            this.context.content =
                content.substr(0, index) +
                text +
                content.substr(index);
        }
    }

    class Client {
        private context = new TextContext();

        replaceCommand = new ReplaceCommand(this.context);
        insertCommand = new InsertCommand(this.context);
    }

    let client = new Client();

    $('.replace-button').click(() => {
        client.replaceCommand.execute(0, 4, 'the');
    });

    $('.insert-button').click(() => {
        client.insertCommand.execute(0, 'awesome ');
    });

    // todo run it on web
}