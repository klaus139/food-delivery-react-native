import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, parameters} from '../global/Styles';
//import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import SigninWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen';
// import { useNavigation } from '@react-navigation/native';
//import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export default function Header({title, type}) {
  //   const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity style={styles.container}>
        {/* <FontAwesomeIcon
          icon={type}
          size={25}
          color={colors.headerText}
          //make the screen go back to the previous screen
          onPress={() => {
            navigation.goBack();
          }}
        /> */}
      </TouchableOpacity>
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
