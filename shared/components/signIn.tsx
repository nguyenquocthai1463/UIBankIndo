// Import các thư viện cần thiết
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, GestureResponderEvent, } from 'react-native';


export default function SignIn({navigation}: {navigation: any}) {
  // State quản lý trạng thái focus và hiển thị mật khẩu
  const [isForcusUsername, setIsForcusUsername] = useState(false);
  const [isForcusPassword, setIsForcusPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isForcusIcon, setIsForcusIcon] = useState(false);
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image style={styleImage.Image} source={require('../assets/logo.png')} />
      {/* Form đăng nhập */}
      <View style={styleFormLogin.container}>
        <View style={{ alignItems: 'center', width: '100%' }}>
          <Text style={styleTitle.title}>Sign In</Text>
        </View>
        {/* Trường nhập Username */}
        <View style={{ width: '100%', marginBottom: 16 }}>
          <Text style={styleFormLogin.text}>Username</Text>
          <TextInput
            style={[styleFormLogin.input, { borderColor: isForcusUsername ? '#F9B62A' : '#EBEAED', }]}
            onFocus={() => setIsForcusUsername(true)}
            onBlur={() => setIsForcusUsername(false)}
            selectionColor={'#F9B62A'}
            placeholder="Enter user name" />
        </View>
        {/* Trường nhập Password */}
        <View style={{ width: '100%', marginBottom: 16 }}>
          <Text style={styleFormLogin.text}>Password</Text>
          <View style={iconEye.inputContainer}>
            <TextInput
              value={password}
              style={[styleFormLogin.input, { borderColor: isForcusPassword ? '#F9B62A' : '#EBEAED', }]}
              onFocus={() => { setIsForcusPassword(true); setIsForcusIcon(true); }}
              onBlur={() => { setIsForcusPassword(false); setIsForcusIcon(false); }}
              onChangeText={setPassword}
              selectionColor={'#F9B62A'}
              placeholder="Enter password"
              secureTextEntry={!isPasswordVisible}
            />
            {/* Hiển thị icon mắt khi focus */}
            {isForcusIcon && <TouchableOpacity
              onPress={() => { setIsPasswordVisible(!isPasswordVisible); }}
              style={iconEye.icon}
            >
              <Ionicons
                name={isPasswordVisible ? "eye" : "eye-off"}
                size={24}
                color="#999"
              />
            </TouchableOpacity>}
          </View>
        </View>
        {/* Nút Sign In */}
        <MyButton onPress={() => navigation.navigate("LandingPageDashboard")} />
        {/* Xử lý quên mật khẩu */}
        <View style={{ width: '100%', marginTop: 24, alignItems: 'center' }}>
          <Text style={{ fontSize: 16, color: "#111", lineHeight: 22, letterSpacing: -0.2, fontWeight: 600, fontFamily: 'Manrope' }}>Forgot Password?</Text>
        </View>
      </View>
    </View>
  );
}

// Component Button tùy chỉnh

const MyButton = props => {
  const [isForcus, setIsForcus] = useState(false);
  const handlePressIn = (event: GestureResponderEvent) => {
    if (props.onPress) {
      props.onPress(event);
    }
    setIsForcus(true);
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPress={()=> props.onPress}
      style={{
        marginTop: 8,
        width: '100%',
        height: 48,
        backgroundColor: isForcus ? '#F9B62A' : '#dee2ea',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 16, color: isForcus ? "#111" : "#868686", lineHeight: 22, letterSpacing: -0.2, fontWeight: 600, fontFamily: 'Manrope' }}>Sign In</Text>
    </TouchableOpacity>
  )
}

// StyleSheet nút ẩn hiện mật khẩu
const iconEye = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 20
  },
});

// Style cho Logo
const styleImage = StyleSheet.create({
  Image: {
    marginTop: 57,
    backgroundColor: '#fff',
  }
});

// Style cho tiêu đề
const styleTitle = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 38,
    letterSpacing: -0.2,
    fontWeight: 600,
    fontFamily: 'Manrope',
    marginBottom: 25
  },
});

// Style cho form đăng nhập
const styleFormLogin = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 35,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Manrope',
    fontWeight: 600

  },
  input: {
    height: 48,
    width: '100%',
    marginTop: 8,
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
});

// Style cho giao diện chính
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});