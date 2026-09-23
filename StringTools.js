(function(Scratch) {
    'use strict';

    class StringTools {
        getInfo() {
            return {
                id: 'stringtools',
                name: 'String Tools',
                color1: '#5865F2',
                color2: '#4752C4',
                blocks: [
                    {
                        opcode: 'removeCharacter',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'remove [CHAR] from [TEXT]',
                        arguments: {
                            CHAR: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'a'
                            },
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'banana'
                            }
                        }
                    },
                    {
                        opcode: 'removeAt',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'remove character [INDEX] from [TEXT]',
                        arguments: {
                            INDEX: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello'
                            }
                        }
                    },
                    {
                        opcode: 'removeRange',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'remove [START] through [END] from [TEXT]',
                        arguments: {
                            START: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            },
                            END: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 4
                            },
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello World'
                            }
                        }
                    }
                ]
            };
        }

        removeCharacter(args) {
            const text = String(args.TEXT);
            const char = String(args.CHAR);

            if (char === '') return text;

            return text.split(char).join('');
        }

        removeAt(args) {
            const text = String(args.TEXT);
            const index = Math.floor(Number(args.INDEX)) - 1;

            if (index < 0 || index >= text.length) {
                return text;
            }

            return text.slice(0, index) + text.slice(index + 1);
        }

        removeRange(args) {
            const text = String(args.TEXT);
            let start = Math.floor(Number(args.START)) - 1;
            let end = Math.floor(Number(args.END)) - 1;

            if (start < 0) start = 0;
            if (end >= text.length) end = text.length - 1;

            if (start > end || start >= text.length) {
                return text;
            }

            return text.slice(0, start) + text.slice(end + 1);
        }
    }

    Scratch.extensions.register(new StringTools());
})(Scratch);
