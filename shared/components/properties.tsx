import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, Animated } from "react-native";
import { FONTS } from "../constants/style";
import { Colors } from "react-native/Libraries/NewAppScreen";


export const Properties = props => {

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={props.image} style={styles.image} />
            <View style={styleContent.container}>
                <Text style={[FONTS.HEADING_5,{color: '#111'}]}>{props.quantity}</Text>
                <Text style={[FONTS.BODY_1_SEMIBOLD,{color: '#656C7D'}]}>{props.status}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 86,
        borderRadius: 8,
        padding: 16,
        gap: 16,
        width: '47%',
        backgroundColor: '#fff',
    },
    image: {
        height: 28,
        paddingTop: 4,
        gap: 10,
    },

});

const styleContent = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 4,
        backgroundColor: '#fff',
    },
});