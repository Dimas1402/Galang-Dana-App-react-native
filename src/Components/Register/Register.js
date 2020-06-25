import React from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Fragment} from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {Fumi} from 'react-native-textinput-effects';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Mail from 'react-native-vector-icons/MaterialIcons';
import {Style} from '../../Style/registerStyle';

const Register = ({navigation}) => {
  return (
    <Formik
      initialValues={{email: '', password: '', name: '', phone: ''}}
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
        name: yup
          .string()
          .min(3)
          .required(),
        phone: yup.string(10).required(),
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
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
              />
              {touched.name && errors.name && (
                <Text style={Style.textFValidation}>{errors.name}</Text>
              )}
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
                <Text style={Style.textFValidation}>{errors.email}</Text>
              )}
              <Fumi
                style={Style.input}
                label={'Phone'}
                iconClass={Ionicons}
                iconName={'ios-phone-portrait'}
                iconColor={'#3EA898'}
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                keyboardType={'numeric'}
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={() => setFieldTouched('phone')}
              />
              {touched.phone && errors.phone && (
                <Text style={Style.textFValidation}>{errors.phone}</Text>
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
                <Text style={Style.textFValidation}>{errors.password}</Text>
              )}
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
        </Fragment>
      )}
    </Formik>
  );
};

export default Register;
