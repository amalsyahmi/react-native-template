import * as React from "react";
import {SafeAreaView, Text, View, Button, Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";


export const WelcomeScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={{paddingVertical: 100, paddingHorizontal: 30}}>
        <Text style={{alignSelf: 'center', fontSize: 25, color: '#777'}}>
          by Amal Syahmi
        </Text>
        {/* Spacer */}
        <View style={{width: 30, height: 30}}></View>
        <Button
          onPress={() => Alert.alert('Alert !', 'alert sample')}
          title="Alert"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View style={{width: 10, height: 10}}></View>
        <Button
          onPress={() => navigation.reset({
            routes: [
              {
                name: "WelcomeScreen",
                params: { screen: "WelcomeScreen" },
              },
            ],
          })}
          title="Navigate to page"
          color="#234489"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
};
