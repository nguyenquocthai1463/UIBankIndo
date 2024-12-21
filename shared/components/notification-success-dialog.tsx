import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants/style';

interface NotificationSuccessDialogProps {
    visible: boolean;
    onClose: () => void;
    message: string;
}

const NotificationSuccessDialog: React.FC<NotificationSuccessDialogProps> = ({ visible, onClose, message }) => {
    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.dialogContainer}>
                    <Text style={styles.message}>{message}</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialogContainer: {
        width: '80%',
        backgroundColor: COLORS.WHITE_BACKGROUND,
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
    },
    message: {
        ...FONTS.BODY_1_SEMIBOLD,
        color: COLORS.PRIMARY_TEXT_ICON,
        marginBottom: 20,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: COLORS.PRIMARY,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 8,
    },
    closeButtonText: {
        ...FONTS.BODY_2_SEMIBOLD,
        color: COLORS.WHITE_BACKGROUND,
    },
});

export default NotificationSuccessDialog;
