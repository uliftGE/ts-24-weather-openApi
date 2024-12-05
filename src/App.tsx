import React from 'react';
// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WeatherDisplay from './WeatherDisplay.tsx';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherDisplay />
    </QueryClientProvider>
  );
};

export default App;
