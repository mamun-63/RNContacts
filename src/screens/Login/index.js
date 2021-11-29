import { useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoginComponent from '../../components/Login';
import { login } from '../../store/auth/slice';

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedup, setJustSignedup] = useState(false)
  const dispatch = useDispatch();
  const {params} = useRoute()
  const {status, error} = useSelector(state => state.auth);

  useEffect(() => {
    if(params?.data) {
      setJustSignedup(true)
      setForm({...form, userName: params.data.username});
    } 
  }, [params])

  const onChange = ({name, value}) => {
    setJustSignedup(false)
    setForm({...form, [name]: value});
  }

  const onSubmit = () => {
    if (form.userName && form.password) {
      dispatch(login(form))
    }
  }

  return (
    <LoginComponent
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={status === 'loading' && status}
      justSignedup={justSignedup}
    />
  );
};

export default Login;

const styles = StyleSheet.create({});
