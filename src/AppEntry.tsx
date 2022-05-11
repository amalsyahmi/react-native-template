import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
export function AppEntry() {
  return (
    <SafeAreaView>
      <View style={{paddingVertical: 100}}>
        <Text style={{alignSelf: 'center', fontSize: 25}}>Welcome to React Native Template</Text>
        <View style={{width: 10, height: 10}}></View>
        <Text style={{alignSelf: 'center', fontSize: 15}}>by amalsyahmi</Text>
      </View>
    </SafeAreaView>
  )
}