import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const About = ({navigation, route}) => {
  const {nombre} = route.params;
  const volver = () => {
    // navigation.navigate('Home');
    // navigation.goBack();
    navigation.push('Home');
  };
  return (
    <View style={styles.contenedor}>
      <Text>{nombre}</Text>
      <Button onPress={() => volver()} title="Volver" />
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

export default About;
