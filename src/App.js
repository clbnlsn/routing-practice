import React from 'react';
import {Router} from '@reach/router';
import Four from './components/Four';
import Hello from './components/Hello';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Router>
        <Welcome path='/welcome' />
        <Hello path ='/:hello' />
        <Four path='/:four' />

      </Router>
    </div>
  );
}

export default App;
