import React from "react";
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, StatusBar } from "react-native";
import { Avatar, Text, Button, Divider, List } from "react-native-paper";
import { FONTS, COLORS } from "../shared/constants/style";
import Header from "../shared/components/header";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen ()  {
  const navigation = useNavigation();

  const handleLocalSync = () => {

  };


  const handleServerSync = () => {

  };

  return (
    <>
      
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.PRIMARY} />


      {/* Header with Back Button */}
      <Header />

      <ScrollView style={styles.container}>
        <Text style={styles.title}>Profile</Text>

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <View style={styles.frameAvatar}>
            <Image
              source={require('../../public/assets/images/user-avatar.png')} // Đường dẫn tới ảnh
              style={styles.customAvatar}
            />
          </View>

          <Text style={styles.username}>user001</Text>
          <View style={styles.statusContainer}>
            <Text style={[styles.status, { color: COLORS.SUCCESS }]}>●</Text>
            <Text style={styles.status}> Active</Text>
          </View>
        </View>

        {/* Information Section */}
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>ID</Text>
            <Text style={styles.value}>ID: MB924872364</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Branch</Text>
            <Text style={styles.value}>Jakarta</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>
              Jl. Setia Budi Utara Raya No.5, RT.5/RW.1, Kuningan, Karet Kuningan,
              Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota
              Jakarta 12940, Indonesia
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.value}>890-22879-278</Text>
          </View>
        </View>


        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={handleLocalSync}>
            <View style={styles.listItemContainer}>
              <List.Item
                title="Sync data to local store"
                titleStyle={styles.titleActionButtons}
                left={() => (
                  <Image
                    source={require("../../public/assets/images/reload-data.png")}
                    style={styles.icon}
                  />
                )}
                right={() => (
                  <Image
                    source={require("../../public/assets/images/next-icon.png")}
                    style={styles.rightIcon}
                  />
                )}

              />

            </View>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={handleServerSync}>
            <View style={styles.listItemContainer}>
              <List.Item
                title="Sync data to server"
                titleStyle={styles.titleActionButtons}
                left={() => (
                  <Image
                    source={require("../../public/assets/images/sync-data.png")}
                    style={styles.icon}
                  />
                )}
                right={() => (
                  <Image
                    source={require("../../public/assets/images/next-icon.png")}
                    style={styles.rightIcon}
                  />
                )}

              />
            </View>
          </TouchableOpacity>
        </View>




        {/* Sign Out Button */}
        <Button
          icon="logout"
          mode="contained"
          onPress={() => console.log("Sign Out")}
          style={styles.signOutButton}
          labelStyle={{ ...FONTS.BODY_2_SEMIBOLD, color: COLORS.DANGER, }}
          color="#EBEAED"
        >
          Sign out
        </Button>
      </ScrollView>
    </>
  );


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.GRAY_BACKGROUND,
  },
  title: {
    ...FONTS.HEADING_3,
    marginTop: 40,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  customAvatar: {
    width: 80,
    height: 80,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    ...FONTS.BODY_1_REGULAR,
    color: COLORS.SUBTEXT,
    marginTop: 5,
  },

  frameAvatar: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: COLORS.DISABLE_BACKGROUND,
  },
  username: {
    ...FONTS.SUBTITLE,
    marginTop: 10,
  },
  infoContainer: {
    backgroundColor: COLORS.WHITE_BACKGROUND,
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
    elevation: 1,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  label: {
    ...FONTS.BODY_1_REGULAR,
    color: COLORS.SECONDARY_TEXT_ICON,
    maxWidth: 100,
    flexShrink: 1,
  },
  value: {
    ...FONTS.BODY_1_SEMIBOLD,
    color: COLORS.PRIMARY_TEXT_ICON,
    textAlign: 'right',
    maxWidth: 260,
    flex: 1,
  },
  actionContainer: {
    backgroundColor: COLORS.WHITE_BACKGROUND,
    borderRadius: 16,
    height: 120,
    elevation: 1,
    justifyContent: "center",
  },
  listItemContainer: {
    flexDirection: 'row', // Đảm bảo các phần tử nằm trên một hàng
    alignItems: 'center',

    width: '100%',
    justifyContent: "center",
  },
  icon: {
    marginStart: 16,
    width: 24,
    height: 24,
  },
  rightIcon: {
    marginLeft: 'auto',  // Đảm bảo icon luôn ở bên phải
    width: 16,
    height: 16,
    alignSelf: 'center',  // Căn giữa icon theo chiều dọc
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.DIVIDER,
    marginStart: 50,
    marginEnd: 20
  },
  titleActionButtons: {
    ...FONTS.BODY_1_SEMIBOLD,
  }
  ,
  signOutButton: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: COLORS.STROKE,
    backgroundColor: COLORS.GRAY_BACKGROUND,
    borderRadius: 8,
    paddingVertical: 11,
    paddingHorizontal: 24,
    marginBottom: 30
  },

});


