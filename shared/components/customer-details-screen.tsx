import React, { useState } from 'react';
import { FONTS, COLORS } from "../constants/style";
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, StatusBar, Alert } from "react-native";
import { Text } from "react-native-paper";
import Header from "./header";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DebtAccountScreen from "./debt-account-screen";
import CustomNavigationMenu from './custom-navigation-menu';
import { Provider } from "react-native-paper";
import BottomDialogNote from './note-bottom-dialog';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NotificationSuccessDialog from './notification-success-dialog';

const Tab = createMaterialTopTabNavigator();

export default function CustomerDetailsScreen() {

    const [visible, setVisible] = useState(false);  // State for Bottom Dialog visibility
    const [note, setNote] = useState("");  // State to store the input for the note
    const [isSuccessDialogVisible, setSuccessDialogVisible] = useState(false); // State hiển thị dialog thông báo

    const handleMenuPress = (menu: string) => {
        if (menu === "Notes") {
            console.log("Opening BottomSheet");
            setVisible(true);

        } else {
            Alert.alert(`You pressed ${menu}`); // Default alert for other menu items
        }
    };

    return (
        
        <Provider>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.PRIMARY} />
            <Header />
            <View>

            </View>
            <ScrollView style={styles.container} nestedScrollEnabled={true}>
                <Title />

                <DetailCust />

                <WorkMustDone />

                <TabNavigatorCustomerAction />


            </ScrollView>
            {/* Navigation Menu */}
            <View style={styles.BubbleMenu}>
                <CustomNavigationMenu onMenuPress={handleMenuPress} />
            </View>
             {/* Hiển thị dialog Note */}
            <View>
                <BottomDialogNote
                    visible={visible} // Truyền trạng thái hiển thị
                    setVisible={setVisible} // Truyền hàm setVisible để thay đổi trạng thái
                    note={note} // Truyền ghi chú
                    setNote={setNote} // Truyền hàm setNote để thay đổi ghi chú
                />
            </View>

           
        </Provider>

    );
}

const Title = () => {
    return (
        <View style={stylesTitle.title}>
            <Text style={stylesTitle.titleText}>Zonda Padfield</Text>
            <Text style={stylesTitle.subTitleText}>A1001309</Text>
        </View>
    );
};


const DetailCust = () => {
    return (
        <View style={stylesDetailCust.detailCustBorder}>
            <View style={stylesDetailCust.detailCust}>
                <Image source={require('../../public/assets/images/default-avatar.png')}
                    style={stylesDetailCust.customAvatar} />
                <View style={stylesDetailCust.detailCustColumn}>
                    <View style={stylesDetailCust.detailCustRow}>
                        <Text style={stylesDetailCust.detailCustLable}>CustID:</Text>
                        <Text style={stylesDetailCust.detailCustValue}>22-545-3463</Text>
                    </View>
                    <View style={stylesDetailCust.detailCustRow}>
                        <Text style={stylesDetailCust.detailCustLable}>Review date</Text>
                        <Text style={stylesDetailCust.detailCustValue}>5/27/2024</Text>
                    </View>
                    <View style={stylesDetailCust.detailCustRow}>
                        <Text style={stylesDetailCust.detailCustLable}>Last contact</Text>
                        <Text style={stylesDetailCust.detailCustValue}>5/24/2024</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={stylesDetailCust.detailCustButton}>
                <Text style={stylesDetailCust.detailCustButtonText}>View details</Text>
            </TouchableOpacity>
        </View>
    );
};

const WorkMustDone = () => {
    return (

        <View style={stylesWorkMustDone.statsContainer}>
            <View style={stylesWorkMustDone.statCardRow}>
                <Image
                    source={require('../../public/assets/images/user-dollar.png')}
                    style={stylesWorkMustDone.statIcon}
                />
                <View style={stylesWorkMustDone.statCard}>
                    <View>
                        <Text style={stylesWorkMustDone.statValue}>$ 26,000</Text>
                        <Text style={stylesWorkMustDone.statLabel}>Amt to Collect</Text>
                    </View>
                </View>
            </View>
            <View style={stylesWorkMustDone.separator} />
            <View style={stylesWorkMustDone.statCardRow}>
                <Image
                    source={require('../../public/assets/images/calendar.png')}
                    style={stylesWorkMustDone.statIcon}
                />
                <View style={stylesWorkMustDone.statCard}>
                    <View>
                        <Text style={stylesWorkMustDone.statValue}>454</Text>
                        <Text style={stylesWorkMustDone.statLabel}>Days Past Due</Text>
                    </View>
                </View>
            </View>
            <View style={stylesWorkMustDone.separator} />
            <View style={stylesWorkMustDone.statCardRow}>
                <Image
                    source={require('../../public/assets/images/money-coin.png')}
                    style={stylesWorkMustDone.statIcon}
                />
                <View style={stylesWorkMustDone.statCard}>
                    <View>
                        <Text style={stylesWorkMustDone.statValue}>1</Text>
                        <Text style={stylesWorkMustDone.statLabel}>Broken PTP</Text>
                    </View>
                </View>
            </View>
        </View>

    )

}


const TabNavigatorCustomerAction = () => {

    const [debtAccountHeight, setDebtAccountHeight] = useState(0);

    const handleDebtAccountHeightChange = (event: any) => {
        const { layout } = event.nativeEvent;
        if (layout) {
            const { height } = layout;
            setDebtAccountHeight(height); // Cập nhật chiều cao
            console.log('DebtAccountScreen height:', height); // Log chiều cao
        } else {
            console.log('Layout not available');
        }
    };
    return (
        <View style={{ height: debtAccountHeight }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontFamily: focused
                                    ? FONTS.BODY_1_SEMIBOLD.fontFamily
                                    : FONTS.BODY_1_REGULAR.fontFamily,
                                fontSize: 14,
                                color: focused
                                    ? COLORS.PRIMARY_TEXT_ICON
                                    : COLORS.SECONDARY_TEXT_ICON,
                            }}
                        >
                            {route.name}
                        </Text>
                    ),
                    tabBarIndicatorStyle: {
                        backgroundColor: COLORS.PRIMARY,
                        width: '10%',
                        height: 2,
                        marginHorizontal: '11.5%',
                    },
                    tabBarStyle: {
                        backgroundColor: COLORS.DISABLE_BACKGROUND,
                        elevation: 0,
                    },
                })}
            >
                <Tab.Screen
                    name="Debt Account"
                    children={() => (
                        <DebtAccountScreen onHeightChange={handleDebtAccountHeightChange} />
                    )}
                />
                <Tab.Screen name="History" component={HistoryScreen} />
                <Tab.Screen name="Notes" component={NotesScreen} />
            </Tab.Navigator>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: COLORS.DISABLE_BACKGROUND,
        gap: 16,
        height: 1644,
    },
    BubbleMenu: {
        position: 'absolute',
        bottom: 5,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        width: '100%',
    },
    //
    modalContainer: {
        backgroundColor: "white",
        position: "absolute",
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        bottom: 0,
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold",
    },
    textInput: {
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
    },
})
// title
const stylesTitle = StyleSheet.create({
    title: {
        height: 80,
        paddingBottom: 16,
        gap: 4
    },
    titleText: {
        ...FONTS.HEADING_3,
        height: 38
    },
    subTitleText: {
        ...FONTS.BODY_2_REGULAR,
        color: COLORS.SECONDARY_TEXT_ICON,
        height: 22
    },
})
// detail cust
const stylesDetailCust = StyleSheet.create({
    detailCustBorder: {
        backgroundColor: COLORS.WHITE_BACKGROUND,
        height: 168,
        borderRadius: 16,
        padding: 16,
        gap: 16,
        marginTop: 16,

    },
    detailCust: {
        height: 80,
        gap: 16,
        flexDirection: 'row',
    },
    customAvatar: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    detailCustColumn: {
        flexDirection: 'column',
        flex: 1,
        height: 80,
        justifyContent: 'space-between',
    },
    detailCustRow: {
        flexDirection: 'row',
    },
    detailCustLable: {
        ...FONTS.BODY_1_REGULAR,
        color: COLORS.SECONDARY_TEXT_ICON,
        flex: 1
    },
    detailCustValue: {
        ...FONTS.BODY_1_SEMIBOLD,
        marginLeft: 'auto'
    },
    detailCustButton: {
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.STROKE,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE_BACKGROUND,

    },
    detailCustButtonText: {
        ...FONTS.BODY_2_SEMIBOLD,
        textAlign: 'center'
    }
})
// work must done
const stylesWorkMustDone = StyleSheet.create({
    statsContainer: {
        marginVertical: 16,
        borderRadius: 16,
        padding: 16,
        gap: 16,
        backgroundColor: COLORS.WHITE_BACKGROUND,
        height: 258
    },
    statCard: {
        flexDirection: 'column',
        height: 54,
        color: COLORS.PRIMARY,
    },
    statCardRow: {
        flexDirection: 'row',
        shadowColor: COLORS.PLACEHOLDER_TEXT,
        height: 54
    },
    statIcon: {
        width: 24,
        height: 24,
        marginTop: 4,
        marginRight: 15,
    },
    statValue: {
        ...FONTS.HEADING_5,
        flexGrow: 1,
    },
    statLabel: {
        ...FONTS.BODY_1_SEMIBOLD,
        color: COLORS.SECONDARY_TEXT_ICON,
    },
    separator: {
        height: 1.2,
        backgroundColor: COLORS.DIVIDER,
        marginStart: 50,
        marginEnd: 20
    },
})



// Màn hình History
function HistoryScreen() {
    return (
        <View>
            <Text >History Content</Text>
        </View>
    );
}

// Màn hình Notes
function NotesScreen() {
    return (
        <View >
            <Text>Notes Content</Text>
        </View>
    );
}
