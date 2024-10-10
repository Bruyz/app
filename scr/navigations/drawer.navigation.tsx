import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from '../styles/colors';
import { Ionicons, FontAwesome, MaterialCommunityIcons, Feather, Entypo} from '@expo/vector-icons';
import { TabNavigation } from "./tab.navigation";
import { Camera } from "../screens/Camera"
import { Imagens } from "../screens/Imagens"
import { LocationMap } from "../screens/LocationMap"
import React from 'react';
import { QrCode } from '../screens/QrCode';

type DrawerParamList = {
    Tab: undefined
    Camera: undefined
    Imagem: undefined
    QrCode: undefined
    LocationMap: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: colors.secondary },
            headerTintColor: colors.white,
            drawerStyle: { backgroundColor: colors.secondary, },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen name='Tab' component={TabNavigation} options={{
                drawerLabel: 'Perfil',
                headerTitle: 'Perfil',
                drawerIcon: ()=> (
                    <Ionicons name="person" size={24} color={colors.primary} />
                ),
            }} />
            <Drawer.Screen name='Camera' component={Camera} 
            options={{
                drawerIcon: ()=> (
                    <Feather name="camera" size={24} color={colors.primary} />
                ),
            }} />
            <Drawer.Screen name='Imagem' component={Imagens} 
            options={{
                drawerIcon: ()=> (
                    <FontAwesome name="picture-o" size={24} color={colors.primary} />
                ),
            }} />
             <Drawer.Screen name='QrCode' component={QrCode} 
            options={{
                drawerIcon: ()=> (
                    <MaterialCommunityIcons name="qrcode-scan" size={24} color={colors.primary} />
                ),
            }} />
              <Drawer.Screen name='Localização' component={LocationMap} 
            options={{
                drawerIcon: ()=> (
                    <Entypo name="location" size={24} color={colors.primary} />
                ),
            }} />
        </Drawer.Navigator>

    )
}