import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styleImage.Image} source={require('./assets/image 1.png')} />
      
    </View>
  );
}

const styleImage = StyleSheet.create({
  Image:{
    marginTop: 57,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
