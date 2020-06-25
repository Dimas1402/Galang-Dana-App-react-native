import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Fumi} from 'react-native-textinput-effects';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Mail from 'react-native-vector-icons/MaterialIcons';

const Register = ({navigation}) => {
  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={Style.iconTop}>
          <FontAwesome5 size={20} color="#3EA898" name="arrow-left" />
        </TouchableOpacity>
      </View>
      <View style={Style.viewTextCR}>
        <Text style={Style.textTitle}>Create Account</Text>
        <Text style={{color: '#BFC1C0'}}>Create a new account </Text>
      </View>
      <View style={Style.viewMargin}>
        <Fumi
          style={Style.input}
          label={'Name'}
          iconClass={FontAwesome5}
          iconName={'user'}
          iconColor={'#3EA898'}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
        />
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
          style={Style.input}
          label={'Phone'}
          iconClass={Ionicons}
          iconName={'ios-phone-portrait'}
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
        <View style={Style.viewBTN}>
          <TouchableOpacity style={Style.btn}>
            <Text style={Style.btnFont}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.viewMargin2}>
          <Text style={Style.textRegis2}>
            {'Already have a account?' + ' '}
            <Text
              onPress={() => navigation.navigate('Login')}
              style={Style.textRegis}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;
const Style = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
  },
  iconTop: {
    margin: '5%',
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
  viewTextCR: {
    alignItems: 'center',
    marginTop: '5%',
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
    marginTop: '-10%',
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
