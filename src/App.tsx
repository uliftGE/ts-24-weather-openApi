import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WeatherDisplay from './WeatherDisplay';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherDisplay />
    </QueryClientProvider>
  );
};

export default App;
