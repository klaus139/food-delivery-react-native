import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import HomeHeader from '../components/HomeHeader';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
