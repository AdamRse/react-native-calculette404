import { Link } from 'expo-router';
import { type ComponentProps } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
  } from 'react-native';
type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };
const styles = StyleSheet.create({
    bt: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    }
  });

  function onPressLearnMore(){
    alert("click")
  }

export const Buttons = () => {
    return (
        <Button
        style={styles.bt}
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
    );
}