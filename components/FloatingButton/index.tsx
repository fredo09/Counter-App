import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

interface Props  {
    label: string;
    position?: 'left' | 'right' | 'center';
    //Methods
    onPress?: () => void;
    onLongPress?: () => void;
}

export const FloatingButton = ({ onPress, onLongPress, label, position = 'center' }: Props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.floatingButton,
                position === 'right' && styles.positionRight,
                position === 'left' && styles.positionLeft,
                position === 'center' && styles.positionCenter,
                pressed ? { opacity: 0.5 } : { opacity: 1 },
            ]}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text style={styles.colorCounterBtn}>{label}</Text>
        </Pressable>
    );
};

//* Styles
const styles = StyleSheet.create({
    floatingButton: {
        position: "absolute",
        bottom: 20,
        backgroundColor: "#65558f",
        padding: 20,
        borderRadius: 15,
        marginBottom: 20,
        shadowOpacity: 0.3,
        elevation: 3,
    },
    colorCounterBtn: {
        color: "#fff",
        fontSize: 20,
    },
    positionRight: {
        right: 20,
    },
    positionLeft: {
        left: 20,
    },
    positionCenter: {
        alignItems: "center",
    },
});
