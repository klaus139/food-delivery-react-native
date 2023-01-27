import React, {useRef} from 'react';
//import * as Animatable from 'react-native-animatable';
import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {title} from '../../global/Styles';
import Header from '../../components/Header';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';

export default function SigninScreen() {
  //const [textInput2Forcast, setTextInput2Forcast] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <SafeAreaView style={styles.container}>
      <Header title=" MY ACCOUNT" type={faArrowLeft} />
      <View style={styles.text0}>
        <Text style={title}>Sign In</Text>
      </View>
      <View style={styles.authContainer}>
        <Text style={styles.text1}>Please enter your email and password</Text>
        <Text style={styles.text1}>Register with your account</Text>
      </View>
      <View styles={{marginTop: 20}}>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            icon={faEnvelope}
            size={20}
            color="gray"
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="gray"
            ref={textInput1}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            icon={faLock}
            size={20}
            color="gray"
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="gray"
            ref={textInput2}
            // onFocus={() => {
            //   setTextInput2Forcast(false);
            // }}
            // onBlur={() => {
            //   setTextInput2Forcast(true);
            // }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  text0: {
    marginLeft: 20,
    marginTop: 10,
  },
  text1: {
    color: 'gray',
    fontSize: 16,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
    flex: 1,
  },
  textInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 12,
    marginTop: 5,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    padding: 10,
    color: 'black',
    fontSize: 16,
  },
});
