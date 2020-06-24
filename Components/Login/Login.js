import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Fumi} from 'react-native-textinput-effects';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Mail from 'react-native-vector-icons/MaterialIcons';

const Login = () => {
  return (
    <View>
      <View style={Style.viewImg}>
        <Image style={Style.img} source={require('../../Assets/logo.png')} />
        <Text style={Style.textTitle}>Galang Dana</Text>
        <Text style={{color: '#BFC1C0'}}>Sign to continue </Text>
      </View>
      <View style={Style.viewMargin}>
        <Fumi
          style={Style.input}
          label={'Email'}
          iconClass={Mail}
          iconName={'email'}
          iconColor={'#3EA898'}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
        />
        <Fumi
          label={'Password'}
          iconClass={FontAwesome5}
          iconName={'lock'}
          iconColor={'#3EA898'}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
        />
      </View>
      <View style={Style.viewMargin}>
        <Text style={Style.textFPW}>Forgot Password ?</Text>
        <View style={Style.viewBTN}>
          <TouchableOpacity style={Style.btn}>
            <Text style={Style.btnFont}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.viewMargin2}>
          <Text style={Style.textRegis2}>
            {"Don't have account?" + ' '}
            <Text style={Style.textRegis}>create a new account</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
const Style = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
  },
  viewMargin: {
    margin: '10%',
  },
  viewMargin2: {
    margin: '5%',
  },
  textTitle: {
    color: '#3EA898',
    fontSize: 35,
  },
  viewImg: {
    alignItems: 'center',
    marginTop: '10%',
  },
  input: {
    marginBottom: '5%',
  },
  viewPw: {
    alignItems: 'center',
  },
  textFPW: {
    textAlign: 'right',
    color: '#3EA898',
    marginTop: '-20%',
  },
  viewBTN: {
    alignItems: 'center',
    marginTop: '10%',
  },
  btn: {
    backgroundColor: '#3EA898',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnFont: {
    fontSize: 20,
    color: 'white',
  },
  textRegis: {
    color: '#3EA898',
  },
  textRegis2: {
    color: '#818181',
    textAlign: 'center',
    fontSize: 18,
  },
});
