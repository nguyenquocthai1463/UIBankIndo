import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import PieChart from 'react-native-pie-chart'; // Thêm import cho thư viện react-native-pie-chart
import { StatusBar } from 'react-native';
import { FONTS, COLORS } from "../constants/style";


export default function DashboardScreen ({navigation}: {navigation: any}) {
    
    const widthAndHeight = 220;
    const series = [29.8, 0.2, 69.8, 0.2];
    const sliceColor = [COLORS.PRIMARY, COLORS.WHITE_BACKGROUND, '#1461D5', COLORS.WHITE_BACKGROUND];

    const handleSeeAllPress = () => {

        console.log("See All clicked!");

    };

    const handleAvatarPress = () => {
        navigation.navigate('ProfileScreen');
    };

    

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.PRIMARY} />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={handleAvatarPress} style={styles.frameAvatar}>
                        <Image
                            source={require('../../public/assets/images/user-avatar.png')}
                            style={styles.customAvatar}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Hi, Minh Tran</Text>
                </View>

                <View style={styles.notificationWrapper}>
                    <View style={styles.notificationContainer}>
                        <Image
                            source={require('../../public/assets/images/notification-icon.png')}
                            style={{ width: 26, height: 26 }}
                        />
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>3</Text>
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView>
                {/* Search Bar */}
                <View style={styles.searchBarContainer}>
                    <Image
                        source={require('../../public/assets/images/search-icon.png')}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchBar}
                        placeholder="ID or mobile number or customer name"
                    />
                </View>

                {/* This Month */}
                <View>
                    <Text style={styles.sectionTitle}>This month</Text>
                    <View style={styles.card}>
                        <Text style={styles.totalAmount}>Total amount collected</Text>
                        <Text style={styles.amount}>$ 60,275,567</Text>

                        {/* Donut Chart */}
                        <View style={styles.chart}>
                            <PieChart
                                widthAndHeight={widthAndHeight}
                                series={series}
                                sliceColor={sliceColor}
                                coverRadius={0.6} // Độ lớn của vòng tròn ở giữa để tạo Doughnut Chart
                                coverFill={COLORS.WHITE_BACKGROUND}
                            />
                        </View>


                        <View style={{ height: 48, marginBottom: 30 }}>
                            <View style={styles.statusContainer}>
                                <Text style={[styles.dot, { color: '#1461D5' }]}>●</Text>
                                <Text style={styles.chartAnnotation}>
                                    Total amount collected
                                </Text>
                            </View>

                            <View style={styles.statusContainer}>
                                <Text style={[styles.dot, { color: COLORS.PRIMARY }]}>●</Text>
                                <Text style={styles.chartAnnotation}>
                                    Need to collect
                                </Text>
                            </View>

                        </View>
                    </View>
                </View>

                {/* Today */}
                <View style={styles.container}>

                    <View style={styles.titleContainer}>
                        <Text style={styles.sectionTitle}>Today  </Text>
                        
                        <TouchableOpacity style={styles.seeAllButton} onPress={handleSeeAllPress}>
                            <Text style={styles.seeAllText}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.statsContainer}>
                        <View style={styles.statCardRow}>
                            <Image
                                source={require('../../public/assets/images/user-laptop.png')}
                                style={styles.statIcon}
                            />
                            <View style={styles.statCard}>
                                <View>
                                    <Text style={styles.statValue}>5</Text>
                                    <Text style={styles.statLabel}>Active collectors</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.statCardRow}>
                            <Image
                                source={require('../../public/assets/images/git-branch.png')}
                                style={styles.statIcon}
                            />
                            <View style={styles.statCard}>
                                <View>
                                    <Text style={styles.statValue}>40</Text>
                                    <Text style={styles.statLabel}>Assigned to Branch</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.statCardRow}>
                            <Image
                                source={require('../../public/assets/images/credit-card-pay.png')}
                                style={styles.statIcon}
                            />
                            <View style={styles.statCard}>
                                <View>
                                    <Text style={styles.statValue}>40</Text>
                                    <Text style={styles.statLabel}>#PTP Today</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.statCardRow}>
                            <Image
                                source={require('../../public/assets/images/money-dollar.png')}
                                style={styles.statIcon}
                            />
                            <View style={styles.statCard}>
                                <View>
                                    <Text style={styles.statValue}>60,245,652</Text>
                                    <Text style={styles.statLabel}>Total Amount to Collect</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.GRAY_BACKGROUND
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: COLORS.PRIMARY,
        height: 60,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    frameAvatar: {
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        backgroundColor: COLORS.DISABLE_BACKGROUND,
    },
    customAvatar: {
        width: 44,
        height: 44,
    },
    headerText: {
        ...FONTS.BODY_2_SEMIBOLD,
        marginLeft: 15,
    },
    notificationWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    notificationContainer: {
        position: 'relative', // Cho phép chồng hình tròn badge lên ảnh
        width: 30,
        height: 30,
    },
    badge: {
        position: 'absolute',
        top: -10, // Điều chỉnh vị trí trên icon
        right: -5, // Điều chỉnh vị trí bên phải icon
        backgroundColor: COLORS.WHITE_BACKGROUND,
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    badgeText: {
        ...FONTS.HELPTEXT
    },
    //{/* Search Bar */}
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Căn giữa theo chiều dọc
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 48,
        backgroundColor: COLORS.WHITE_BACKGROUND,
        margin: 16,
        borderColor: COLORS.DIVIDER,
    },
    searchIcon: {
        width: 20,   // Đặt chiều rộng của icon
        height: 20,  // Đặt chiều cao của icon
        marginRight: 10,  // Khoảng cách giữa icon và TextInput
    },
    searchBar: {
        ...FONTS.BODY_1_REGULAR,
    },
    //{/* This Month */}
    sectionTitle: {
        ...FONTS.HEADING_4,
        marginLeft: 16,
        marginTop: 10
    },
    card: {
        backgroundColor: COLORS.WHITE_BACKGROUND,
        margin: 16,
        borderRadius: 10,
        padding: 15,
        shadowColor: COLORS.PLACEHOLDER_TEXT,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4
    },
    totalAmount: {
        ...FONTS.BODY_1_SEMIBOLD,
        color: COLORS.SECONDARY_TEXT_ICON
    },
    amount: {
        ...FONTS.HEADING_5,
        marginTop: 5
    },
    dot: {
        ...FONTS.HEADING_4,
        color: '#1461D5',
        marginEnd: 5,
        marginBottom: 5
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: -5,
    },
    chartAnnotation: {
        ...FONTS.BODY_1_REGULAR
    },
    chart: {
        alignItems: 'center',
        marginVertical: 15
    },
    //{/* Today */}
    statsContainer: {
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 30
    },
    statCard: {
        flexDirection: 'column',
        height: 54,
        color: COLORS.PRIMARY,
    },
    statCardRow: {
        backgroundColor: COLORS.WHITE_BACKGROUND,
        marginVertical: 5,
        padding: 15,
        borderRadius: 8,
        flexDirection: 'row',
        shadowColor: COLORS.PLACEHOLDER_TEXT,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        elevation: 5,
        height: 86
    },
    statIcon: {
        width: 28,
        height: 28,
        marginRight: 15,
    },
    statValue: {
        ...FONTS.HEADING_5,
        flexGrow: 1,
        marginBottom: 5,
    },
    statLabel: {
        ...FONTS.BODY_1_SEMIBOLD,
        color: COLORS.SECONDARY_TEXT_ICON,
    },
    // see all
    seeAllText: {
        ...FONTS.BODY_1_SEMIBOLD,
        color: COLORS.PRIMARY,
        marginEnd:16
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    seeAllButton: {
        padding: 5,
    }
});
