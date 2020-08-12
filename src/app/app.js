import React from 'react';
import './app.scss';

import { Button } from './components';

export function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>
          Button Component
        </h1>
      </header>

      <main>
        <Button>button component default</Button>
      </main>
    </div>
  );
}
