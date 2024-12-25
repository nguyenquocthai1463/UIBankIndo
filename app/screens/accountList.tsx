import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, GestureResponderEvent, ScrollView, useWindowDimensions, VirtualizedList, FlatList, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Properties } from '../../shared/components/properties';
import { FONTS } from '../../shared/constants/style';
import { InfoAccount } from '../../shared/components/info-account';
import { SafeAreaView } from 'react-native-safe-area-context';
interface Account {
    accountName: string;
    accountID: string;
    delinquentAmount: string;
    image: any;
}

export default function AccountList({/* notificationCount, navigation */ }) {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = useState([
        { key: 'unassigned', title: 'Unassigned' },
        { key: 'assigned', title: 'Assigned' },
        { key: 'myAssigned', title: 'My Assigned' },
        { key: 'callBack', title: 'Call Back' },
    ]);

    const data: Account[] = [
        { accountName: "Kunthara Suwamo", accountID: "22-545-3463", delinquentAmount: "Rp1,456,353", image: require('../../public/assets/images/Ellipse-19.png') },
        { accountName: "Kunthara Suwamo", accountID: "22-545-3463", delinquentAmount: "Rp1,456,353", image: require('../../public/assets/images/Ellipse-18.png') },
        { accountName: "Kunthara Suwamo", accountID: "22-545-3463", delinquentAmount: "Rp1,456,353", image: require('../../public/assets/images/Ellipse-18.png') },
        { accountName: "Kunthara Suwamo", accountID: "22-545-3463", delinquentAmount: "Rp1,456,353", image: require('../../public/assets/images/Ellipse-18.png') },
        { accountName: "Kunthara Suwamo", accountID: "22-545-3463", delinquentAmount: "Rp1,456,353", image: require('../../public/assets/images/Ellipse-18.png') },

    ];

    const renderItem = ({ item }: { item: Account }) => (
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#EBEAED' }}>
            <InfoAccount
                accountName={item.accountName}
                accountID={item.accountID}
                delinquentAmount={item.delinquentAmount}
                image={item.image}
            /></View>

    );
    const keyExtractor = (item: Account, index: number) => `${item.accountID}-${index}`;
    return (
        <View style={styles.container}>
            <View style={{ height: 44, backgroundColor: '#F9B62A' }}>

            </View>
            <View style={header.container}>

            </View>
            <ScrollView>
                <View style={styleBody.container}>
                    <View style={{ marginBottom: 16 }}>
                        <Text style={FONTS.HEADING_3}>Account</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-between' }}>
                            <View style={styleBody.inputContainer}>
                                <TextInput
                                    style={[styleBody.input, FONTS.BODY_1_REGULAR]}
                                    selectionColor={'#F9B62A'}
                                    placeholder="ID or mobile number or customer name"
                                />
                                <Icon name="search" size={20} color={"#a9b1c3"} style={styleBody.icon} />
                            </View>
                            <View style={styleFilter.container}>
                                <Image source={require('../../assets/filter-1.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={{ gap: 24 }}>
                        <View style={styleProperties.container}>
                            <Properties image={require('../../assets/my-assigned.png')} quantity="10" status="My Assigned" />
                            <Properties image={require('../../assets/call-back.png')} quantity="0" status="Call Back" />
                            <Properties image={require('../../assets/unassigned.png')} quantity="11" status="Unassigned" />
                            <Properties image={require('../../assets/assigned.png')} quantity="66" status="Assigned" />
                        </View>
                        <View style={{ height: '100%' }}>
                            <TabView
                                animationEnabled={false}
                                style={{ height: '100%' }}
                                navigationState={{ index, routes }}
                                onIndexChange={setIndex}
                                renderScene={SceneMap({
                                    unassigned: () => (
                                        <FlatList
                                            data={data}
                                            renderItem={renderItem}
                                            keyExtractor={keyExtractor}
                                        />
                                    ),
                                    assigned: () => (
                                        <FlatList
                                            data={data}
                                            renderItem={renderItem}
                                            keyExtractor={keyExtractor}
                                        />
                                    ),
                                    myAssigned: () => (
                                        <FlatList
                                            data={data}
                                            renderItem={renderItem}
                                            keyExtractor={keyExtractor}
                                        />
                                    ),
                                    callBack: () => (
                                        <FlatList
                                            data={data}
                                            renderItem={renderItem}
                                            keyExtractor={keyExtractor}
                                        />
                                    ),
                                })}
                                renderTabBar={props => (
                                    <TabBar
                                        {...props}
                                        indicatorStyle={{ backgroundColor: '#F9B62A', height: 2, }}
                                        style={[FONTS.BODY_1_SEMIBOLD, { backgroundColor: '#F2F2F2', height: 48, alignContent: 'center', justifyContent: 'center' }]}
                                        activeColor='#111'
                                        inactiveColor='#656C7D'
                                        pressOpacity={0}
                                        tabStyle={{ width: 'auto', marginRight: 30, padding: 0, }}
                                    />
                                )}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const routes = [
    { key: 'unassigned', title: 'Unassigned' },
    { key: 'assigned', title: 'Assigned' },
    { key: 'myAssigned', title: 'My Assigned' },
    { key: 'callBack', title: 'Callback' },
];


const styleProperties = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 16,
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
});

const styleFilter = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginLeft: 8,
        borderWidth: 1,
        borderColor: '#EBEAED',
    },
});

const header = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#F9B62A',
    },
    title: {
        fontSize: 16,
        fontFamily: 'Manrope',
        fontWeight: '600',
        lineHeight: 22,
        letterSpacing: -0.2,
        textAlign: 'center',
        color: '#000',
        paddingLeft: 16,

    },
    icon: {
        fontSize: 24,
        color: '#fff',
    },
});

const styleBody = StyleSheet.create({
    container: {
        padding: 16,
        height: '100%',
    },
    input: {
        height: 48,
        width: '100%',
        paddingLeft: 45,
        paddingVertical: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#EBEAED',
        backgroundColor: '#fff',

    },
    textTitle: {
        marginTop: 24,
        fontSize: 24,
        fontFamily: 'Manrope',
        fontWeight: 600,
        lineHeight: 34,
        letterSpacing: -0.2,
    },
    button: {
        backgroundColor: '#F9B62A',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    icon: {
        position: "absolute",
        left: 15,
        top: 15
    },
});



