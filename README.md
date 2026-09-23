# String Tools

A simple TurboWarp extension for manipulating strings.

## Features

String Tools currently includes blocks for:

* Removing a specific character from a string
* Removing a character at a specific position
* Removing a range of characters

## Installation

### TurboWarp

1. Open [TurboWarp](https://turbowarp.org/).
2. Open the **Extensions** menu.
3. Select **Custom Extension**.
4. Enter the URL of `string-tools.js`.
5. Click **Load**.

> The JavaScript file must be hosted somewhere publicly accessible.

## Blocks

### Remove a character

**`remove [CHAR] from [TEXT]`**

Removes every occurrence of the specified character.

Example:

```text
remove "a" from "banana"
→ bnn
```

### Remove by position

**`remove character [INDEX] from [TEXT]`**

Removes the character at the specified position.

Example:

```text
remove character 3 from "Hello"
→ Helo
```

Positions start at **1**.

### Remove a range

**`remove [START] through [END] from [TEXT]`**

Removes all characters between the specified starting and ending positions.

Example:

```text
remove 2 through 4 from "Hello"
→ Ho
```

## License

This project is open source. See `LICENSE` for details.

## Credits

Created for use with TurboWarp.
BY sane1484
