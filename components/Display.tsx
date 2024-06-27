import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform } from 'react-native';
import {Text, StyleSheet} from 'react-native';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };
const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 50,
    marginBottom: 5
  },
});

export const Display = () => {
  return (
      <Text style={styles.innerText}>Ecran</Text>
  );
}