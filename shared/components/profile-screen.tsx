import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { Avatar, Text, Button, Divider, List } from "react-native-paper";
import { StatusBar } from 'react-native'; // Import StatusBar
import { FONTS, COLORS } from "../constants/style";
import Header from "./header";

const ProfileScreen: React.FC = () => {
  return (
    <>
      {/* Set the StatusBar color to match the header */}
      <StatusBar barStyle="dark-content" backgroundColor ={COLORS.PRIMARY}  />

      {/* Header with Back Button */}
      <Header onBackPress={() => console.log("Back button pressed")} />

      <ScrollView style={styles.container}>
        <Text style={styles.title}>Profile</Text>

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Avatar.Image 
            size={80} 
            source={require('../../public/assets/images/user-avatar.png')} 
            style={styles.avatar}
          />
          <Text style={styles.username}>user001</Text>
          <Text style={styles.status}>● Active</Text>
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
          <TouchableOpacity onPress={() => console.log("Sync data to local store")}>
            <List.Item
              title="Sync data to local store"
              left={(props) => <List.Icon {...props} icon="download" />}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Sync data to server")}>
            <List.Item
              title="Sync data to server"
              left={(props) => <List.Icon {...props} icon="upload" />}
            />
          </TouchableOpacity>
        </View>

        {/* Sign Out Button */}
        <Button
          icon="logout"
          mode="contained"
          onPress={() => console.log("Sign Out")}
          style={styles.signOutButton}
          labelStyle={{ ...FONTS.BODY_2_SEMIBOLD, color: COLORS.DANGER }}
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
    backgroundColor: "#FBFBFB",
  },
  title: {
    marginTop: 40,
    ...FONTS.HEADING_3,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    borderRadius: 40,
    backgroundColor: COLORS.DISABLE_BACKGROUND,
  },
  username: {
    marginTop: 10,
    ...FONTS.SUBTITLE,
  },
  status: {
    marginTop: 5,
    ...FONTS.BODY_1_REGULAR,
    color: COLORS.SUBTEXT,
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
  },
  label: {
    ...FONTS.BODY_1_REGULAR,
    color: COLORS.SECONDARY_TEXT_ICON,
    maxWidth: 100,
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
  },
  signOutButton: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: COLORS.STROKE,
    backgroundColor: COLORS.GRAY_BACKGROUND,
    borderRadius: 8,
    paddingVertical: 11,
    paddingHorizontal: 24,
  },
});

export default ProfileScreen;
