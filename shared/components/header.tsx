import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants/style";

interface HeaderProps {
  onBackPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBackPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Image style={styles.Image} source={require('../../public/assets/images/icon-back.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: COLORS.PRIMARY,
    position: 'relative',
  },
  Image: {
    width: 18.5, 
    height: 15, 
  },
  backButton: {
    position: 'absolute',
    top: 18, 
    left: 18, 
  },
});

export default Header;
