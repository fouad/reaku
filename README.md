# reaku

Helper library to mount deku apps into a React app.

### Usage

```
$ npm install --save reaku
```

```node
import React from 'react'
import Reaku from 'reaku'
import DekuComponent from 'ui/deku-component'

export default () => (
  <div>
    <h1>React Header</h1>

    <Reaku
      component={DekuComponent}
      opts={{
        afterMount: () => console.log('mounted deku')
      }}
      props={{
        text: 'Hi from Deku 🎄'
      }}
    />
  </div>
)
```
