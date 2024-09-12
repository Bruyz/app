import { BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera';
import { useAuth } from '../../hook/auth';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'
import React, { useState } from 'react';
import {ComponentAlbum, ComponentButtonInterface, ComponentLoading} from "../../components";

export function QrCode(){
    const { user } = useAuth();
    const [ scanened, setScanned] = useState(false);
    const [ permission, requestPermission] = useCameraPermissions();
    if (!permission){
        return <ComponentLoading/>
    }
    if (!permission.granted){
        return (
            <View style={styles.container}>
                <Text style={styles.message}> Você precisa dar permissao para acesso à Câmera</Text>
                <TouchableOpacity onPress={requestPermission}> 
                <Text>Solicitar Permissão</Text>
                </TouchableOpacity>
            </View>
        );
    }

    function handleBarcodeScanner({ data }: BarcodeScanningResult) {
        Alert.alert(`Olá ${data}`)
        setScanned(true)
    } 
    return (
        <>
        {user && user.user.name &&(
            <Image source={{uri: `https://image-charts.com/chart?chs=500x500&cht=qr&chl=${user.user.name}&choe=UTF-8`}}style={styles.qrcode}/>
        )}
        { !scanened ? (
            <CameraView
                style={styles.qrcode}
                barcodeScannerSettings={{barcodeTypes: ['qr'] }}
                onBarcodeScanned={handleBarcodeScanner}
            />
        ) : (
            <ComponentButtonInterface onPressI={() => setScanned(false)} title='Scanear Novamente' type='primary'/>
        )}
        </>
    );
}