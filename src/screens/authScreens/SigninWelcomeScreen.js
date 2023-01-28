/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {buttons, colors} from '../../global/Styles';
import Swiper from 'react-native-swiper';
import {Button} from 'react-native-elements';

export default function SigninWelcomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headview}>
        <Text style={styles.text1}>DISCOVER RESTAURANTS</Text>
        <Text style={styles.text2}>IN YOUR AREA</Text>
      </View>
      <View style={styles.carousel}>
        <Swiper autoplay={true} autoplayTimeout={2.5}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590__340.jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.slide4}>
            <Image
              source={{
                uri: 'https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.flexview}>
        <View style={styles.flexButton}>
          <Button
            title="SIGN IN"
            buttonStyle={buttons.signin}
            titleStyle={buttons.signinText}
            onPress={() => navigation.navigate('SigninScreen')}
          />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createAccount}
            titleStyle={styles.createAccountText}
            placeholder="Create your account"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexview: {
    flex: 4,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  flexButton: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
  },
  headview: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  text1: {
    fontSize: 25,
    color: colors.buttons,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  text2: {
    fontSize: 25,
    color: colors.buttons,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  carousel: {
    flex: 4,
    justifyContent: 'center',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createAccount: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    height: 40,
    marginHorizontal: 20,
    borderRadius: 20,
    borderColor: '#28b310',
    borderWidth: 1,
    alignItems: 'flex-end',
    display: 'flex',
    marginTop: 20,
    marginBottom: 10,
  },
  createAccountText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
});
