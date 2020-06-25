import React from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {Fragment} from 'react';
import {Fumi} from 'react-native-textinput-effects';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Mail from 'react-native-vector-icons/MaterialIcons';
import {Style} from '../../Style/loginStyle';

const Login = ({navigation}) => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email()
          .required(),
        password: yup
          .string()
          .min(6)
          .required(),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <Fragment>
          <View>
            <View style={Style.viewImg}>
              <Image
                style={Style.img}
                source={require('../../Assets/logo.png')}
              />
              <Text style={Style.textTitle}>Galang Dana</Text>
              <Text style={Style.textCont}>Sign to continue </Text>
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
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              {touched.email && errors.email && (
                <Text style={Style.textFemail}>{errors.email}</Text>
              )}
              <Fumi
                label={'Password'}
                iconClass={FontAwesome5}
                iconName={'lock'}
                iconColor={'#3EA898'}
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                secureTextEntry={true}
              />
              {touched.password && errors.password && (
                <Text style={Style.textFPass}>{errors.password}</Text>
              )}
            </View>
            <View style={Style.viewMargin}>
              <Text style={Style.textFPW}>Forgot Password ?</Text>
              <View style={Style.viewBTN}>
                <TouchableOpacity
                  disabled={!isValid}
                  onPress={handleSubmit}
                  style={!isValid ? Style.btn2 : Style.btn}>
                  <Text style={Style.btnFont}>Login</Text>
                </TouchableOpacity>
              </View>
              <View style={Style.viewMargin2}>
                <Text style={Style.textRegis2}>
                  {"Don't have account?" + ' '}
                  <Text
                    onPress={() => navigation.navigate('Register')}
                    style={Style.textRegis}>
                    create a new account
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </Fragment>
      )}
    </Formik>
  );
};

export default Login;
