import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native"

export function Form(){
    const [side, setSide] = useState(0);
    const [area, setArea] = useState(0);
    function calculateArea(){
    let result =  ((side ** 2) * Math.sqrt(3)) / 4;

    setArea(result);
    }
    return(
        <View>
            <View>
                <Text>Lado:</Text>
                <TextInput
                onChangeText={setSide}
                placeholder="Digite o lado em cm"
                inputMode="numeric"
                value={side}


                
                />

                <Pressable
    
                onPress= { ()=> calculateArea( )}
                />

                
            </View>
        </View>
    )
}