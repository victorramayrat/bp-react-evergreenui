import React from 'react'
import {render } from 'react-dom'
import { Button } from 'evergreen-ui'

const App = () => {
  return (
    <Button>I am using 🌲 Evergreen UI!</Button>
  );
};

render(
  <App />, document.getElementById('root')
)