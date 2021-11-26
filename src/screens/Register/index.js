import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RegisterComponent from '../../components/Signup'
import { API_ENDPOINT } from "@env"
import axiosInstance from '../../helpers/axiosInstance'

const Register = () => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  console.log('dev ', __DEV__)
  console.log('url ', API_ENDPOINT)

  useEffect(() => {
    axiosInstance.get('/contacts').catch(error => {
      console.log('error', error.response)
    })
  }, [])

  const onChange = ({ name, value }) => {
    setForm({...form, [name]: value })

    if(value !== '') {
      if (name === 'password'){
        if (value.length < 6) {
          setErrors(prev => ({...prev, [name]: 'This field requires min 6 characters'}))
        } else {
          setErrors(prev => ({...prev, [name]: null}))
        }
      } else {
        setErrors(prev => ({...prev, [name]: null}))
      }
    } else{
      setErrors(prev => ({...prev, [name]: 'This field is required'}))
    }
  }

  const onSubmit = () => {
    console.log('form >>> ', form)

    if(!form.userName) {
      setErrors(prev => ({...prev, userName: 'Please add a user name'}))
    }
    if(!form.firstName) {
      setErrors(prev => ({...prev, firstName: 'Please add a first name'}))
    }
    if(!form.lastName) {
      setErrors(prev => ({...prev, lastName: 'Please add a last name'}))
    }
    if(!form.email) {
      setErrors(prev => ({...prev, email: 'Please add a email'}))
    }
    if(!form.password) {
      setErrors(prev => ({...prev, password: 'Please add a password'}))
    }
  }

  return (
    <RegisterComponent errors={errors} form={form} onChange={onChange} onSubmit={onSubmit} />
  )
}

export default Register

const styles = StyleSheet.create({})
