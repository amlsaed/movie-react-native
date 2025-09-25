import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title:"Home", headerShown: false }} />
      <Tabs.Screen name="search" options={{ title: "Search", headerShown: false }} />
      <Tabs.Screen name="save" options={{title:"Saved", headerShown: false }} />
    </Tabs>
  )
}

export default _layout

