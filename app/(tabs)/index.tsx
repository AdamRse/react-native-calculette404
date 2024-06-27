
import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { Display } from '@/components/Display';
import { Buttons } from '@/components/Buttons';

import { View, type ViewProps } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10
    ,display: "flex"
    ,justifyContent: "center"
  },
});
export default function HomeScreen() {
  return (
    <>
        <Display />
        <View style={styles.container}>
          <Buttons />
          <Buttons />
          <Buttons />
          <Buttons />
          <Buttons />
          <Buttons />
          <Buttons />
          <Buttons />
          <Buttons />
          <Buttons />
        </View>
    </>
  );
}