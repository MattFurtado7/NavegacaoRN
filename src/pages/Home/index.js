import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>  Home </Text>
        <Button 
        title="Sobre"
        onPress={() => navigation.navigate('Sobre', { nome: 'Lucas'})}
        />

        <Button 
        title="Muda titulo"
        onPress={() => navigation.setOptions({ title: 'INICIO'})}
        />

        <Button 
        title="Contato"
        onPress={() => navigation.navigate('Contato', { gerente: 'Gerente 123' , endereco: 'Rua 123' , fone: '12345678'})}
        />       
       
    </View>
  );
}