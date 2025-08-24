import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { RootNavigator } from '@/widgets/navigation/RootNavigator'
import './global.css'

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
  )
}
