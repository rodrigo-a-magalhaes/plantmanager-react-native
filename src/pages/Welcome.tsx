import React, { useState } from 'react';
import { Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, Dimensions, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
// import { useNavigation } from '@react-navigation/core';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { Button } from '../components/Button';

export function Welcome() {
  const [visible, setVisible] = useState(false);
  function handleVisible(){
    setVisible(true)
  }

  // const navigation = useNavigation();

  function handleStart() {
    // navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image
          source={wateringImg}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <Button title="Avançar" onPress={handleVisible} />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.text,
    paddingHorizontal: 20,
    color: colors.heading
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
});
