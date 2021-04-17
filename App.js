import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  useColorScheme,
  Text,
  StyleSheet,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import launchImageLibrary from './ImagePickerProvider';

const App = () => {
  const [fileName, setFileName] = useState('N/A');

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const options = {
    mediaType: 'photo',
    includeBase64: true,
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <TouchableOpacity
        testID="button"
        style={styles.button}
        onPress={() =>
          launchImageLibrary(options, res => {
            setFileName(res.fileName ?? 'N/A');
          })
        }>
        <Text style={styles.buttonText}>Open Image Picker</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{fileName}</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  text: {
    marginTop: 20,
  },
});
