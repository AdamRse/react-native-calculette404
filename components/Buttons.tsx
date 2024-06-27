// button.tsx
import { Text, StyleSheet, Pressable } from 'react-native';

type ButtonsProps = {
  val: string;
  onPress: (value: string) => void;
};

export const Buttons = ({ val, onPress }: ButtonsProps) => {
  return (
    <Pressable style={styles.button} onPress={() => onPress(val)}>
      <Text style={styles.text}>{val}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: "30%",
    marginBottom: 5
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
