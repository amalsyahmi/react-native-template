import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Router } from './router/Router';
export function AppEntry() {
  return (
    <SafeAreaProvider>
      <Router/>
    </SafeAreaProvider>
    
  )
}