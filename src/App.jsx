import React from 'react';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../src/routes/router-config.jsx';

function App() {
  return (
      <RouterProvider router={router} />
  )
      ;
}

export default App
