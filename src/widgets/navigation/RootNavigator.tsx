import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { TabNavigator } from './TabNavigator'

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}
