import React from "react";
import { View, Text } from "react-native";

export default function Information({route}){
    return(
        <View style={{marginTop:60, marginLeft:30}}>
            <Text>nome: {route.params?.nome}</Text>
        </View>
    )
}