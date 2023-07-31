import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, SectionList } from 'react-native';

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
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>¡Hola Mica!</Text>
        <View style={styles.buttonContainer}>
          <Button title="Presionar" onPress={() => console.log("¡Botón presionado!")} color="#ffffff" />
        </View>

        {DATA.map(button => (
          <View style={styles.buttonContainer2} key={button.id}>
            <Button onPress={() => console.log("¡Botón de Data presionado!")} title={button.title} color="#ffffff" />
          </View>
        ))}
   
        <SectionList
          sections={DATA2}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8175d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
  },
  buttonContainer: {
    backgroundColor: '#f58dff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 50,
  },
  item: {
    marginTop: 20,

    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  buttonContainer2: {
    backgroundColor: '#f07877',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  scrollView: {
    marginTop: 20,
  },
  title: {
    
    color: 'black', 
    fontSize: 20,
  },
  header: {
    color: 'white', 
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#f9c2ff',
    padding: 10,
  },
});
