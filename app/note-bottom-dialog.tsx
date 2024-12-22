import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard, StatusBar, Animated } from 'react-native';
import { COLORS, FONTS } from '../shared/constants/style';
import { Divider } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import NotificationSuccessDialog from '../shared/components/notification-success-dialog';

const BottomDialogNote = ({ visible, setVisible, note, setNote }: { visible: any, setVisible: any, note: any, setNote: any }) => {
    const [modalAnim] = useState(new Animated.Value(0)); // Giá trị bắt đầu từ 0 (ẩn modal)
    
    const [selectedOption, setSelectedOption] = useState('');
    const [comment, setComment] = useState('');
    const [containerHeight, setContainerHeight] = useState(0); // state to store container height
    const [showSuccessDialog, setShowSuccessDialog] = useState(false); // show dialog thông báo thành công


    // Tính toán trạng thái hợp lệ của nút "Complete"
    const isCompleteDisabled = !selectedOption || !note.trim();

    useEffect(() => {
        if (visible) {
            // Khi modal hiển thị, animate từ 0 lên 1
            Animated.timing(modalAnim, {
                toValue: 1,
                duration: 300,  // Thời gian animate, có thể thay đổi
                useNativeDriver: true,
            }).start();
        } 
    }, [visible]);

    const handleClose = () => {
        // Animate modal to hide first
        Animated.timing(modalAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            // Sau khi animation hoàn thành, mới ẩn modal
            setVisible(false);
        });
    };
    

    const handleSave = () => {
        if (!isCompleteDisabled) { // kiểm tra có nhận đủ chưa
            console.log('Selected Option: ', selectedOption);
            console.log('Comment: ', note);
            setVisible(false); // Đóng modal sau khi lưu
            setShowSuccessDialog(true); // Hiển thị dialog
        }
    };


    const handleDismissKeyboard = (e: any) => {
        const touchY = e.nativeEvent.pageY;  // 
        if (touchY < containerHeight - 520) { // đảm bảo khi nhấn bên trong dialog sẽ k bị tắt
            Keyboard.dismiss(); // Ẩn bàn phím khi người dùng chạm ra ngoài
            handleClose(); // Đóng modal
        }
    };

    const handleComplete = () => {
        console.log('Selected Option: ', selectedOption);
        console.log('Comment: ', comment);
        // Lưu hoặc xử lý dữ liệu ở đây
    };

    return (
        <>
            <Modal
                transparent={true}
                visible={visible}
                onRequestClose={handleClose}
            >
                {/* Thay đổi trạng thái của StatusBar */}
                <StatusBar barStyle="dark-content" backgroundColor="#78540c" />

                <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
                    <View
                        style={styles.modalBackground}
                        onLayout={(e) => setContainerHeight(e.nativeEvent.layout.height)}  // Get the height of the modal container
                    >
                        <Animated.View
                            style={[
                                styles.modalContainer,
                                {
                                    opacity: modalAnim, // Điều khiển độ mờ của modal
                                    transform: [
                                        { translateY: modalAnim.interpolate({ inputRange: [0, 1], outputRange: [100, 0] }) }, // Di chuyển modal từ dưới lên
                                    ],
                                },
                            ]}
                        >
                            <View style={styles.title}>
                                <Text style={styles.titleText}>Contact Notes</Text>
                                <Divider />
                            </View>

                            <View style={styles.radioButtonsContainer}>
                                {['Contacted', 'Refuse To Pay', 'Delinquent', 'Manager Assistance Required'].map((item, index) => (
                                    <View style={styles.radioButtonContainer} key={index}>
                                        <RadioButton
                                            value={item}
                                            status={selectedOption === item ? 'checked' : 'unchecked'}
                                            onPress={() => setSelectedOption(item)}
                                        />
                                        <Text style={styles.radioButtonLabel}>{item}</Text>
                                    </View>
                                ))}
                            </View>

                            <View>
                                <Text style={styles.modalTitle}>Comment</Text>
                                <TextInput
                                    style={styles.textInput}
                                    multiline
                                    value={note}
                                    onChangeText={setNote}
                                    placeholder="Comment"
                                    placeholderTextColor={COLORS.PLACEHOLDER_TEXT}
                                />
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.saveButton,
                                        isCompleteDisabled && { backgroundColor: COLORS.DIVIDER }, // Thay đổi màu khi disabled
                                    ]}
                                    onPress={handleSave}
                                    disabled={isCompleteDisabled}
                                >
                                    <Text style={[styles.buttonText, isCompleteDisabled && { color: COLORS.SECONDARY_TEXT_ICON },]}
                                        onPress={handleSave}
                                        disabled={isCompleteDisabled} >Complete</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <NotificationSuccessDialog
                visible={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                message="Task completed successfully!"
            />

        </>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu nền mờ
    },
    modalContainer: {
        width: '100%',
        backgroundColor: COLORS.WHITE_BACKGROUND,
        padding: 20,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
        height: 520,
        gap: 20,
    },
    title: {
        height: 44,
        gap: 20,
    },
    titleText: {
        ...FONTS.SUBTITLE,
    },
    radioButtonsContainer: {
        gap: 20,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 24,
    },
    radioButtonLabel: {
        marginLeft: 10,
        ...FONTS.BODY_1_SEMIBOLD,
        color: COLORS.PRIMARY_TEXT_ICON,
    },
    modalTitle: {
        ...FONTS.HELPTEXT,
        marginBottom: 10,
    },
    textInput: {
        height: 110,
        borderColor: COLORS.DIVIDER,
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        marginBottom: 20,
        fontSize: 16,
        textAlignVertical: 'top',
        color: COLORS.PRIMARY_TEXT_ICON,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    saveButton: {
        backgroundColor: COLORS.PRIMARY,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '100%',
    },
    buttonText: {
        ...FONTS.BODY_2_SEMIBOLD,
        textAlign: 'center',
    },
});

export default BottomDialogNote;
