import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RegisterComponent from '../../components/Signup';
import {API_ENDPOINT} from '@env';
import {useDispatch, useSelector} from 'react-redux';
import {register, resetUser} from '../../store/auth/slice';
import { useNavigation } from '@react-navigation/core';
import { useFocusEffect } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const {navigate} = useNavigation()

  const {status, error, user} = useSelector(state => state.auth);

  useEffect(() => {
    console.log(status, error);
  }, [status, error]);

  // console.log('dev ', __DEV__)
  // console.log('url ', API_ENDPOINT)

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 8) {
          setErrors(prev => ({
            ...prev,
            [name]: 'This field requires min 8 characters',
          }));
        } else {
          setErrors(prev => ({...prev, [name]: null}));
        }
      } else {
        setErrors(prev => ({...prev, [name]: null}));
      }
    } else {
      setErrors(prev => ({...prev, [name]: 'This field is required'}));
    }
  };

  const onSubmit = () => {
    console.log('form >>> ', form);

    if (!form.userName) {
      setErrors(prev => ({...prev, userName: 'Please add a user name'}));
    }
    if (!form.firstName) {
      setErrors(prev => ({...prev, firstName: 'Please add a first name'}));
    }
    if (!form.lastName) {
      setErrors(prev => ({...prev, lastName: 'Please add a last name'}));
    }
    if (!form.email) {
      setErrors(prev => ({...prev, email: 'Please add a email'}));
    }
    if (!form.password) {
      setErrors(prev => ({...prev, password: 'Please add a password'}));
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      console.log('Submit');
      dispatch(register(form))
      // .unwrap()
      // .then(res => {
      //   console.log('response ', res)
      // })
      // .catch(error => {
      //   console.log(error)
      // });
    }
  };

  useEffect(() => {
    if (user) {
      console.log('not null')
      navigate(LOGIN)
    }
  }, [user])

  useFocusEffect(
    React.useCallback(() => {
      // when screen on focus
      return () => {
        // when screen leaving
        if (user || error) {
          dispatch(resetUser(null))
        }
      }
    }, [user, error])
  );

  return (
    <RegisterComponent
      errors={errors}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={status === 'loading' && status}
    />
  );
};

export default Register;

const styles = StyleSheet.create({});
