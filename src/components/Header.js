import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, parameters} from '../global/Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
//import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export default function Header({title, type}) {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <FontAwesomeIcon
          icon={type}
          size={30}
          color={colors.headerText}
          onPress={() => {}}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  container: {
    marginLeft: 20,
    paddingTop: 3,
  },
});
