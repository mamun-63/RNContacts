import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoginComponent from '../../components/Login';
import { login } from '../../store/auth/slice';

const Login = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const {status, error} = useSelector(state => state.auth);

  const onChange = ({name, value}) => {
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
    />
  );
};

export default Login;

const styles = StyleSheet.create({});
