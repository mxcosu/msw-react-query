import React from 'react';
import './App.css';
import { customReactQuery } from './customHook';

function App() {
  const { isLoading, error, data } = customReactQuery();

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className='App'>
      <h1>Name: {data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default App;
