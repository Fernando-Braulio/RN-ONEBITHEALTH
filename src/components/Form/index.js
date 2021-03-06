import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import ResultImc from './ResultImc/'

export default function Form() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex. 1.75" keyboardType="numeric" />
                <Text>Peso</Text>
                <TextInput placeholder="Ex. 75.365" keyboardType="numeric" />
                <Button title="Calcular IMC" />
                <ResultImc messageResultImc={messageImc} resultImc={imc} />
            </View>
        </View>
    );
}