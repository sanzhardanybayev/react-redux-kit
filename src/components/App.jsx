import 'normalize.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import { CircularProgress } from 'material-ui/Progress'

import ToTopButton from './common/toTopButton'

const TopClassLoadable = Loadable({
  loader: () => import('./TopClass'),
  loading() {
    return <CircularProgress />
  }
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <Router >
        <Switch >
          <Route exact path="/" component={TopClassLoadable} />
          <Route exact path="/rahim" component={TopClassLoadable} />
          <ToTopButton/>
        </Switch >
      </Router >

    )
  }
}


export default App