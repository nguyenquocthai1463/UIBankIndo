import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants/style";
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); 
  };

  return (
    <View style={styles.header}>
      {/* Ảnh bên trái */}
      <TouchableOpacity style={styles.leftButton} onPress={handleBackPress}>
        <Image style={styles.ImageBack} source={require('../../public/assets/images/icon-back.png')} />
      </TouchableOpacity>

      {/* Ảnh bên phải */}
      <TouchableOpacity style={styles.rightButton} onPress={handleBackPress}>
        <Image style={styles.ImageHome} source={require('../../public/assets/images/home-icon.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row', // Đặt layout ngang
    justifyContent: 'space-between', // Hai đầu
    alignItems: 'center', // Căn giữa theo chiều dọc
    paddingHorizontal: 16, // Thêm khoảng cách hai bên
    
  },
  ImageBack: {
    width: 16.5,
    height: 13.55,
  },
  ImageHome: {
    width: 16,
    height: 16,
  },
  leftButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
