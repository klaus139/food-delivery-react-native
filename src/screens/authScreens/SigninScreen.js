import React, {useRef} from 'react';
//import * as Animatable from 'react-native-animatable';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {title} from '../../global/Styles';
import Header from '../../components/Header';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-native-elements';
//import {SocialIcon, Icon} from 'react-native-elements';
//import {SocialIcon} from 'react-social-icons';

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
      <View styles={styles.text0}>
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
      <TouchableOpacity>
        <Button title="SIGN IN" buttonStyle={styles.button} />
      </TouchableOpacity>
      <View>
        <Text style={styles.fpassword}>Forgot Password?</Text>
      </View>
      <View>
        <Text style={styles.or}>OR</Text>
      </View>
      <TouchableOpacity>
        <Button
          title="Sign in with Facebook"
          buttonStyle={styles.facebook}
          onPress={() => {}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Button
          title="Sign in with Google"
          buttonStyle={styles.google}
          onPress={() => {}}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.buttomText}>New on XpressFood?</Text>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Button
          title="Create an account"
          buttonStyle={styles.createAccount}
          titleStyle={styles.createAccountText}
          placeholder="Create an account"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  socialIcon: {
    marginTop: 10,
    marginHorizontal: 20,
    height: 50,
    fontFamily: 'Roboto',
    borderRadius: 12,
  },
  authContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    fontSize: 16,
  },
  fpassword: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  text0: {
    marginLeft: 20,
    marginTop: 10,
  },
  text1: {
    color: 'gray',
    fontSize: 16,
  },
  buttomText: {
    fontSize: 16,
    color: '#000',
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    fontWeight: 'bold',
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
  button: {
    backgroundColor: '#28b310',
    marginHorizontal: 20,
    borderRadius: 12,
    color: 'white',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
  },
  facebook: {
    backgroundColor: '#4285F4',
    marginHorizontal: 20,
    borderRadius: 12,
    color: 'white',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
  },
  google: {
    backgroundColor: '#EA4335',
    marginHorizontal: 20,
    borderRadius: 12,
    color: 'white',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
  },
  or: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
  },
  createAccount: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 100,
    borderRadius: 12,
    borderColor: '#28b310',
    borderWidth: 1,
    alignItems: 'flex-end',
    display: 'flex',
  },
  createAccountText: {
    color: '#28b310',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
});
