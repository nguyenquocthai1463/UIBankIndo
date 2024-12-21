import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants/style";

const CustomNavigationMenu = ({ onMenuPress }: { onMenuPress: (menu: string) => void }) => {
  return (
    <View style={{ padding: 16 }}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.menuItem} onPress={() => onMenuPress("Notes")}>
          <Image
            source={require("../../public/assets/images/icon-notes.png")} // Đường dẫn icon Notes
            style={styles.icon}
          />
          <Text style={styles.label}>Notes</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.menuItem} onPress={() => onMenuPress("PTP")}>
          <Image
            source={require("../../public/assets/images/icon-ptp.png")} // Đường dẫn icon PTP
            style={styles.icon}
          />
          <Text style={styles.label}>PTP</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.menuItem} onPress={() => onMenuPress("Photo")}>
          <Image
            source={require("../../public/assets/images/icon-photo.png")} // Đường dẫn icon Photo
            style={styles.icon}
          />
          <Text style={styles.label}>Photo</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_TEXT_ICON,
    borderRadius: 16,
    paddingVertical: 10,
    height: 70
  },
  menuItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24, // Kích thước icon
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    color: COLORS.ICON, // Màu chữ
  },
});

export default CustomNavigationMenu;
