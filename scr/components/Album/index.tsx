import React, { useEffect, useState} from "react";
import * as MediaLibrary from 'expo-media-library';
import { Image, Text, View } from "react-native";
import { styles } from './styles'

interface IAlbum {
    album: MediaLibrary.Album
}
export function ComponentAlbum({ album }: IAlbum){
    const [assets, setAssets] = useState <MediaLibrary.Asset[]>([]);

    useEffect(() => {
        async function getAlbumAssets(){
            const AlbumAssets = await MediaLibrary.getAssetsAsync({album});
            setAssets(AlbumAssets.assets);
        }
        getAlbumAssets();
    }, [album]);

    return(
        <View key={album.id} style={styles.albumContainer}>
            <Text>
                {album.title} - {album.assetCount ?? 'no'} assets
            </Text>
            <View style={styles.albumAssetsContainer}>
                {assets && assets.map((asset) => (
                    <Image source={{uri: asset.uri }} width={50} height={50}/>
                ))}
            </View>
        </View>
    )
}