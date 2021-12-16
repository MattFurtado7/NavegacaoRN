import React from 'react';
import { Text, View } from 'react-native';

export default function Contato({ route }) {
  return (
    <View>
      <Text>   Gerente: {route.params.gerente}    </Text>
      <Text>   endereco: {route.params.endereco}    </Text>
      <Text>   fone: {route.params.fone}    </Text>
    </View>
  );
}