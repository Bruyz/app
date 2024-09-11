import { View, Text } from 'react-native';
import { styles } from "./styles";
import { useAuth } from "../../hook/auth";
import { FontAwesome5 } from "@expo/vector-icons";
import { ComponentButtonInterface } from "../../components";
import React from 'react';

export function Perfil() {
    const {user, signOut } = useAuth()
    return (
        
        <View style = {styles.container}>
            <View>
                <Text style={styles.name}>{user?.user.name}</Text>
            </View>
            <View>
                <View style={styles.sociais}>
                    <FontAwesome5 name="facebook" size={24} color="black" />
                    <Text style={styles.sociaisText}>https://www.facebook.com</Text>
                </View>
                <View style={styles.sociais}>
                    <FontAwesome5 name="instagram" size={24} color="black" />
                    <Text style={styles.sociaisText}>https://www.instagram.com</Text>
            </View>
            <View style={styles.sociais}>
                    <FontAwesome5 name="linkedin" size={24} color="black" />
                    <Text style={styles.sociaisText}>https://www.linkedin.com</Text>
        </View>
    </View>
    <ComponentButtonInterface title="Sair." type="secondary"
        onPressI={async () => await signOut()}
        />
 </View>
                

    )
}