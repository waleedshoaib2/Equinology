import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimationProvider } from './contexts/AnimationContext';
import AppRoutes from './routes';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AnimationProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <AppRoutes />
          </Suspense>
        </AnimationProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;