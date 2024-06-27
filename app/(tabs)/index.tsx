import { View, StyleSheet } from 'react-native';
import { Display } from '@/components/Display';
import { Buttons } from '@/components/Buttons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
});

let contenu:string = "";

export default function HomeScreen() {
  const handlePress = (value: string) => {
    contenu+=value;
    alert(contenu);
  };

  return (
    <>
      <Display affichage={contenu} />
      <View style={styles.container}>
        <Buttons val="1" onPress={handlePress} />
        <Buttons val="2" onPress={handlePress} />
        <Buttons val="3" onPress={handlePress} />
        <Buttons val="4" onPress={handlePress} />
        <Buttons val="5" onPress={handlePress} />
        <Buttons val="6" onPress={handlePress} />
        <Buttons val="7" onPress={handlePress} />
        <Buttons val="8" onPress={handlePress} />
        <Buttons val="9" onPress={handlePress} />
        <Buttons val="+" onPress={handlePress} />
        <Buttons val="0" onPress={handlePress} />
        <Buttons val="=" onPress={handlePress} />
        <Buttons val="-" onPress={handlePress} />
        <Buttons val="x" onPress={handlePress} />
        <Buttons val="/" onPress={handlePress} />

        <Buttons val="reset" onPress={handlePress} />
      </View>
    </>
  );
}
