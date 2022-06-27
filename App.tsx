import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const moduleone = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Modulo MicroAPP Carregado com sucesso!
      </Text>
    
    </View>
  );
};

export default moduleone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
