<p align="center">
  <br><br>
  <b>Evaluate variables from external files for react-docgen</b>
  <br><br>
</p>

&nbsp;

#### credit

All credit goes to [Chandrasekhar Pasupuleti](https://github.com/pasupuletics) for sharing this

&nbsp;

#### install

```
npm react-docgen-external-proptypes-handler --save-dev
```

&nbsp;

#### convention

If you are importing a variable from an external file to use in `propTypes`, like in the example below, you need to follow a very specific convention to make it work.

Component code:

```jsx
import React from 'react'
import PropTypes from 'prop-types'

/* importing variable iconNames from .js file*/
import iconNames from './icon-names.js'

const Icon = props => {
  /*implementation logic*/
}

Icon.propTypes = {
  /** Icon name */
  name: PropTypes.oneOf(iconNames).isRequired
}

export default Icon
```

In the imported file, make sure the same variable is exported.

```js
const iconNames = ['copy', 'trash', 'etc']
/* same variable name */
export default iconNames
```

&nbsp;

#### usage

```js
const docgen = require('react-docgen')
const externalProptypesHandler = require('./react-docgen-external-proptypes-handler')

let metadata = files.map(path => {
  /* append display name handler to handlers list */
  const handlers = docgen.defaultHandlers.concat(externalProptypesHandler(path))

  /* read file to get source code */
  const code = fs.readFileSync(path, 'utf8')

  /* parse the component code to get metadata */
  const data = docgen.parse(code, null, handlers)

  return data
})
```

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
