import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, GestureResponderEvent, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Svg, { Circle, G, Path } from 'react-native-svg';
import PieChart from 'react-native-pie-chart';
export default function LandingPageDashboard({/* notificationCount, navigation */ }) {
  const widthAndHeight = 220; // Kích thước biểu đồ
  const series = [70, 30]; // Tỷ lệ phần trăm
  const sliceColor = ['#1461D5', '#F9B62A']; // Màu cho từng phần
  return (
    <View style={styles.container}>
      <View style={{ height: 44, backgroundColor: '#F9B62A' }}></View>
      <View style={header.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => { }}
            style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 22, backgroundColor: '#fff' }}
          >
            <Image source={require('../../assets/user.png')} />
          </TouchableOpacity>
          <Text style={header.title}>Hi, Minh Tran</Text>
        </View>
        <View style={styleNoti.container}>
          {/* Icon Notification */}
          <Ionicons
            name={"notifications-outline"}
            size={24}
            color="#000"
          />
          {/* Badge for notification count */}
          {/* {notificationCount > 0 && ( */}
          <View style={styleNoti.badge}>
            <Text style={styleNoti.badgeText}>5
              {/* {notificationCount > 99 ? '99+' : notificationCount} */}
            </Text>
          </View>
          {/* )} */}
        </View>
      </View>
      <ScrollView>
        <View style={styleBody.container}>
          <View style={styleBody.inputContainer}>
            <TextInput
              style={[styleBody.input,]}
              selectionColor={'#F9B62A'}
              placeholder="ID or mobile number or customer name"
            />
            <Icon name="search" size={24} color={"#a9b1c3"} style={styleBody.icon} />
          </View>
          <Text style={styleBody.textTitle}>This month</Text>
          <View style={styleTAC.container}>
            <View style={{ justifyContent: 'space-between', height: 58, }}>
              <Text style={{ fontFamily: 'Manrope', fontWeight: '600', fontSize: 14, lineHeight: 20, letterSpacing: -0.2, color: '#656C7D' }}>Total amount collected</Text>
              <Text style={{ fontFamily: 'Manrope', fontWeight: '600', fontSize: 20, lineHeight: 30, letterSpacing: -0.2, color: '#111' }}>$ 60,275,567</Text>
            </View>
            <View style={stylePieChart.container}>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.6} // Độ lớn của vòng tròn ở giữa để tạo Doughnut Chart
                coverFill={'#FFFFFF'} // Màu nền ở giữa
              />
            </View>
            <View style={{ height: 48, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: 10, height: 10, borderRadius: 22, backgroundColor: '#1461D5', marginRight: 8 }}></View>
                <Text style={{ fontFamily: 'Manrope', fontWeight: '400', fontSize: 14, lineHeight: 20, letterSpacing: -0.2, color: '#656C7D' }}>Total amount Cancelled</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: 10, height: 10, borderRadius: 22, backgroundColor: '#F9B62A', marginRight: 8 }}></View>
                <Text style={{ fontFamily: 'Manrope', fontWeight: '400', fontSize: 14, lineHeight: 20, letterSpacing: -0.2, color: '#656C7D' }}>Total amount Collected</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const stylePieChart = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

const styleTAC = StyleSheet.create({
  container: {
    height: 422,
    marginTop: 16,
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Manrope',
    lineHeight: 20,
    letterSpacing: -0.2,
    color: '#000',
  },
  textLink: {
    fontSize: 14,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
});

const styleNoti = StyleSheet.create({
  container: {
    position: 'relative',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 99,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  badgeText: {
    color: '#000',
    fontFamily: 'Manrope',
    lineHeight: 18,
    letterSpacing: -0.2,
    fontSize: 12,
    fontWeight: '600',
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
    marginTop: 8,
    paddingLeft: 36,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#EBEAED',
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
    width: "100%",
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 20
  },
});



