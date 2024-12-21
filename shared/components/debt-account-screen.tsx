import React, { useState, useEffect } from 'react';
import { Text, Button, Divider, List } from "react-native-paper";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { FONTS, COLORS } from "../constants/style";
import DropDownPicker from 'react-native-dropdown-picker';

function DebtAccountScreen({ onHeightChange }: { onHeightChange: any }) {
    const [height, setHeight] = useState(0);

    

    useEffect(() => {
        // Truyền giá trị cố định khi component render
        onHeightChange({ nativeEvent: { layout: { height: fixedHeight } } });
    }, [onHeightChange]);

    const value = [
        {
            product: "-",
            status: "Pending",
            lastContactDate: "2024-05-24",
            dayPastDue: 478,
            amount: 102000,
        },
        {
            product: "-",
            status: "Completed",
            lastContactDate: "2024-03-20",
            dayPastDue: 0,
            amount: 56000,
        },
        {
            product: "-",
            status: "Completed",
            lastContactDate: "2024-03-20",
            dayPastDue: 0,
            amount: 56000,
        },
    ];

    // Giá trị chiều cao cố định
    const fixedHeight = (113 + 100) + (444 + 32) * value.length; // chiều cao cố định với dư ra + cho mỗi thông tin khách hàng

    return (
        <>
            <View style={styles.container}>
                <DropdownArrangement />

                {value.map((item, index) => (
                    <DetailCust
                        key={index}
                        product={item.product}
                        status={item.status}
                        lastContactDate={item.lastContactDate}
                        dayPastDue={item.dayPastDue}
                        amount={item.amount}
                    />
                ))}
            </View>
        </>
    );
}
export default DebtAccountScreen;


const DropdownArrangement = () => {
    const [open, setOpen] = useState(false); // Trạng thái mở/đóng dropdown
    const [value, setValue] = useState(null); // Giá trị được chọn
    const [items, setItems] = useState([
        { label: 'Arrangement Process', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ]);

    const windowHeight = Dimensions.get('window').height;

    const [dropdownPosition, setDropdownPosition] = useState('down');


    useEffect(() => {
        if (open) {
            const dropdownHeight = 60 * items.length; // Chiều cao ước tính của dropdown
            const spaceBelow = windowHeight - (open ? 60 : 0); // Không gian còn lại dưới dropdown
            const spaceAbove = 60; // Không gian trên dropdown (có thể điều chỉnh nếu cần)

            if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
                setDropdownPosition('up'); // Mở lên nếu không đủ không gian dưới
            } else {
                setDropdownPosition('down'); // Mở xuống nếu không gian dưới đủ
            }
        }
    }, [open, items.length, windowHeight]);

    return (
        <View style={stylesDropdown.container}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={[stylesDropdown.dropdown, open ? stylesDropdown.borderActive : {}]}
                dropDownContainerStyle={{
                    ...stylesDropdown.dropdownContainer,
                    top: dropdownPosition === 'down' ? 60 : undefined,
                    bottom: dropdownPosition === 'up' ? 60 : undefined,
                }}
                labelStyle={stylesDropdown.labelStyle}
                listMode="SCROLLVIEW"
                autoScroll={false}
                scrollViewProps={{
                    contentContainerStyle: {
                        paddingBottom: 16,
                    },
                }}
            />
        </View>
    );
};

interface DetailCustProps {
    product: string;
    status: string;
    lastContactDate: string;
    dayPastDue: number;
    amount: number;
}

const DetailCust: React.FC<DetailCustProps> = ({
    product,
    status,
    lastContactDate,
    dayPastDue,
    amount,
}) => {
    return (
        <View style={stylesDetailCust.detailCustBorder}>

            <View style={stylesDetailCust.detailCustColumn}>
                <View style={stylesDetailCust.detailCustRow}>
                    <Text style={stylesDetailCust.detailCustLable}>Product:</Text>
                    <Text style={stylesDetailCust.detailCustValue}>{product}</Text>
                </View>
                <View style={stylesDetailCust.detailCustRow}>
                    <Text style={stylesDetailCust.detailCustLable}>Status</Text>
                    <Text style={[stylesDetailCust.detailCustValue, stylesDetailCust.status]}>{status}</Text>
                </View>
                <View style={stylesDetailCust.detailCustRow}>
                    <Text style={stylesDetailCust.detailCustLable}>Last Contacted Date</Text>
                    <Text style={stylesDetailCust.detailCustValue}>{lastContactDate}</Text>
                </View>
                <View style={stylesDetailCust.detailCustRow}>
                    <Text style={stylesDetailCust.detailCustLable}>Delinquent s it Start Date</Text>
                    <Text style={stylesDetailCust.detailCustValue}>5/25/2023</Text>
                </View>
                <View style={stylesDetailCust.detailCustRow}>
                    <Text style={stylesDetailCust.detailCustLable}>Day Past Due</Text>
                    <Text style={stylesDetailCust.detailCustValue}>{dayPastDue}</Text>
                </View>
                <View style={stylesDetailCust.detailCustRow}>
                    <Text style={stylesDetailCust.detailCustLable}>Total O/S Amount</Text>
                    <Text style={stylesDetailCust.detailCustValue}>{amount}</Text>
                </View>
                <View style={stylesDetailCust.detailCustRow}>
                    <Text style={stylesDetailCust.detailCustLable}>Amount to Collect</Text>
                    <Text style={stylesDetailCust.detailCustValue}>26,000</Text>
                </View>
                <View style={stylesDetailCust.detailCustRow}>
                    <Text style={stylesDetailCust.detailCustLable}>Interest</Text>
                    <Text style={stylesDetailCust.detailCustValue}>0</Text>
                </View>
                <View style={stylesDetailCust.detailCustRow}>
                    <Text style={stylesDetailCust.detailCustLable}>Charges</Text>
                    <Text style={stylesDetailCust.detailCustValue}>0</Text>
                </View>
                <View style={stylesDetailCust.detailCustRow}>
                    <Text style={stylesDetailCust.detailCustLable}>Next Instaliment Date</Text>
                    <Text style={stylesDetailCust.detailCustValue}>102,000</Text>
                </View>
                <View style={stylesDetailCust.detailCustRow}>
                    <Text style={stylesDetailCust.detailCustLable}>Last Payment Date</Text>
                    <Text style={stylesDetailCust.detailCustValue}>-</Text>
                </View>
                <View style={stylesDetailCust.detailCustRow}>
                    <Text style={stylesDetailCust.detailCustLable}>Assigned to</Text>
                    <Text style={stylesDetailCust.detailCustValue}>Kien Nguyen</Text>
                </View>
            </View>


        </View>
    );
};

const stylesDetailCust = StyleSheet.create({
    detailCustBorder: {
        backgroundColor: COLORS.WHITE_BACKGROUND,
        height: 444,
        borderRadius: 16,
        padding: 20,
        gap: 12,
        
    },
    detailCustColumn: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
    },
    detailCustRow: {
        flexDirection: 'row',
        height: 21
    },
    detailCustLable: {
        ...FONTS.BODY_1_REGULAR,
        color: COLORS.SECONDARY_TEXT_ICON,
    },
    detailCustValue: {
        ...FONTS.BODY_1_SEMIBOLD,
        marginLeft: 'auto'
    },
    status: {
        color: COLORS.PRIMARY
    }


})

const stylesDropdown = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginTop: 5
    },
    dropdown: {
        height: 60,
        borderRadius: 16,
        borderColor: COLORS.WHITE_BACKGROUND,

    },
    borderActive: {
        borderColor: COLORS.DIVIDER,
    },
    dropdownContainer: {
        ...FONTS.BODY_2_REGULAR,
        borderColor: COLORS.DIVIDER,
        borderRadius: 16,
        paddingHorizontal: 8,
    },
    labelStyle: {
        ...FONTS.BODY_2_SEMIBOLD
    }
});



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        backgroundColor: COLORS.DISABLE_BACKGROUND,
        gap: 16,
    },
})