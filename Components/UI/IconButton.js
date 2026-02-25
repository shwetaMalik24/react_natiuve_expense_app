import { View, Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function IconButton({ icon, color, size, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) =>
                pressed ? [styles.button, styles.pressed] : styles.button
            }
        >
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} size={size} color={color} />
            </View>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 24,
    },
    buttonContainer: {
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2,
    },
    pressed: {
        opacity: 0.75,
    },
});