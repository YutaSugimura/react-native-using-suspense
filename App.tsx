/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RecoilRoot} from 'recoil';
import {RecoilSuspend} from './src/Recoil';
import {DataLoader} from './src/Simple';
import {SuspendContainer} from './src/SuspendContainer';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <RecoilRoot>
      <SafeAreaView style={[styles.flex1, styles.container, backgroundStyle]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={[styles.flex1, backgroundStyle]}>
          <View style={styles.box}>
            <Text style={styles.title}>Suspense using Recoil</Text>
            <SuspendContainer fallbackText="Loading...">
              <RecoilSuspend />
            </SuspendContainer>
          </View>

          <View style={styles.box}>
            <Text style={styles.title}>Suspense using custom hooks</Text>
            <SuspendContainer fallbackText="Loading...">
              <DataLoader />
            </SuspendContainer>
          </View>
        </ScrollView>
      </SafeAreaView>
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({
  flex1: {flex: 1},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
