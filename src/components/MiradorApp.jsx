import * as React from 'react'
import { App } from 'mirador3-app-base'

const config = {
  'id': 'mirador'
}

export class MiradorApp extends React.Component {
  render () {
    return (
      <App config={config} />
    )
  }
}
