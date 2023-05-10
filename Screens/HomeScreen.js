import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Pokedex")}
                style={{
                    backgroundColor: 'blue',
                    padding: 10,
                    marginTop: '20%',
                    width: '50%',
                    alignSelf: 'center',
                    borderRadius: 10
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: 'center',
                        color: 'white'
                    }} 
                >
                    Ingresar  
                </Text>
                <MaterialCommunityIcons name="cursor-default-click" size={24} color="black" 
                    style={{
                        alignSelf: 'center',
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen