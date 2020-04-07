# Auto Password Generator

.auto password generator make you a function that generate a random password with your custom length.

- Passwords that it generates includes"A-Z","a-z","0-9","!@#\$%^&\*()".
- You can pass it your custom password length to function.
- Default length is 4 characters.

### Installation

```sh
$ npm i @mvahedi/auto-password-generator
```

### Usage

in any Javascript Library:

```sh
import {autoPasswordGenerator} from "@mvahedi/auto-password-generator"
console.log(autoPasswordGenerator(8))
```

in Node.js:

```sh
var {autoPasswordGenerator} = require("@mvahedi/auto-password-generator")
console.log(autoPasswordGenerator(8))
//len
```

## License

MIT

**Free Software, Hell Yeah!**
