import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = ({navigation}) => {
  const informacion = {
    clienteId: 20,
    nombre: 'Jorney',
  };

  const visitarNosotros = () => {
    navigation.navigate('About', informacion);
  };
  return (
    <View style={styles.contenedor}>
      <Text>Home</Text>
      <Button onPress={() => visitarNosotros()} title="Ir a Nosotros" />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
