// App.js
import React from 'react';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeProvider';

function App() {
  return (
      <AuthProvider>
        <ThemeProvider>
            <div className="App">
              <AppRouter />
            </div>
        </ThemeProvider>
      </AuthProvider>
  );
}

export default App;
