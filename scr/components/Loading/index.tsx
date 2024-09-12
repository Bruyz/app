import React from "react";
import LottieView from 'lottie-react-native';
import { View, Text } from "react-native";

export function ComponentLoading() {

    return <LottieView source={require('../../Lotties/loading.json')} 
    style={{width: '100%', height: '100%'}} 
    autoPlay 
    loop />
}