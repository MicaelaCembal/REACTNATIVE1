import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import  appStyles  from './styles.js';

const DATA = [
  {
    id: '1',
    title: 'BUENOS DÍAS',
  },
  {
    id: '2',
    title: 'BUENAS TARDES',
  },
  {
    id: '3',
    title: 'BUENAS NOCHES',
  },
];

const DATA2 = [
  {
    title: 'Provincias',
    data: ['Buenos Aires', 'Catamarca', 'La Pampa'],
  },
  {
    title: 'Ciudades',
    data: ['La Plata', 'San Fernando del Valle de Catamarca', 'Santa Rosa'],
  },
  {
    title: 'Politicos Juntos por el Cambio',
    data: ['Patricia Bullrich', 'Mauricio Macri', 'Horacio Rodriguez Larreta'],
  },
  {
    title: 'Politicos Union por la Patria',
    data: ['Cristina Fernandez de Kirchner', 'Sergio Massa', 'Alberto Fernandez'],
  },
];

export default function App() {
  const [count, setCount] = useState(0);
  const handlePress = () => setCount(count + 1);
  return (
    <View style={appStyles.container}>
      <ScrollView style={appStyles.scrollView}>
        <Text style={appStyles.text}>¡Hola!</Text>
        <View style={appStyles.buttonContainer}>
          <TouchableOpacity onPress={() => console.log("¡Botón presionado!")}>
            <Text>Presionar</Text>
          </TouchableOpacity>
        </View>

        {DATA.map(button => (
          <View style={appStyles.buttonContainer2} key={button.id}>
            <TouchableOpacity onPress={() => console.log("HOLAA!")}>
              <Text>{button.title}</Text>
            </TouchableOpacity>
          </View>
        ))}

        <StatusBar style="auto" />
        <Text> {'\n'}{'\n'} </Text>

        {DATA2.map(section => (
          <View key={section.title}>
            <Text style={appStyles.header}>{section.title}</Text>
            {section.data.map(item => (
              <View style={appStyles.item} key={item}>
                <Text style={appStyles.title}>{item}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}