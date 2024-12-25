import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, Animated } from "react-native";
import { FONTS } from "../constants/style";
import { Colors } from "react-native/Libraries/NewAppScreen";


export const InfoAccount = props => {

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={props.image} style={styles.image} />
            <View style={styleContent.container}>
                <Text style={[FONTS.BODY_2_SEMIBOLD, { color: '#111', marginVertical: 4}]}>{props.accountName}</Text>
                <View style={styleInfoAccount.view}>
                    <Text style={[FONTS.BODY_1_REGULAR, { color: '#656C7D' }]}>Account ID:</Text>
                    <Text style={[FONTS.BODY_1_SEMIBOLD, { color: '#111' }]}>{props.accountID}</Text>
                </View>
                <View style={styleInfoAccount.view}>
                    <Text style={[FONTS.BODY_1_REGULAR, { color: '#656C7D' }]}>Delinquent Amount:</Text>
                    <Text style={[FONTS.BODY_1_SEMIBOLD, { color: '#111' }]}>{props.delinquentAmount}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styleInfoAccount = StyleSheet.create({
    image: {
        height: 64,
        width: 64,
        borderRadius: 32,
    },

    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
        width: 270,
    }

});

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        height: 98,
    },
    image: {
        height: 64,
        width: 64,
        borderRadius: 32,
        marginRight: 16,
    },

});

const styleContent = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
    },
});