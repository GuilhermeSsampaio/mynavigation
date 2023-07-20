import React from "react";
import { View, Text } from "react-native";

export default function Contacts({navigation}){
    return(
        <View style={{marginTop:60, marginLeft:30}}>
            <View>
                <Text>jOAO</Text>
                <Text>telefone 999999999</Text>
                <Text onPress={() => navigation.navigate('Information', {
                    nome: 'joao',
                    numero: '999999999'
                })}>Information...</Text>
            </View>
            <View style={{marginTop:60}}>
                <Text>amanda</Text>
                <Text>telefone 94349999</Text>
                <Text onPress={() => navigation.navigate('Information')}>Information...</Text>
            </View>
         
        </View>
    )
}