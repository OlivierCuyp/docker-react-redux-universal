import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      Links:
      {' '}
      <Link to='/'>Home</Link>
      {' '}
      <Link to='/counter'>Counter</Link>
    </header>
    {children}
  </div>
);

export default App;
