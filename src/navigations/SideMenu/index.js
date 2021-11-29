import React from 'react';
import { Image, Alert, TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Container from '../../components/common/Container';
import { SETTINGS } from '../../constants/routeNames';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SideMenu = ({navigation, logout}) => {
  const handleLogout = () => {
    navigation.toggleDrawer()
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', onPress: () => {} },
      { text: 'OK', onPress: logout },
    ])
  }

  const menuItems = [
    { icon: <Icon size={17} name='settings' />, name: 'Settings', onPress: () => navigation.navigate(SETTINGS) },
    { icon: <Icon size={17} name='logout' />, name: 'Logout', onPress: handleLogout },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />

        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({ icon, name, onPress }) => (
            <TouchableOpacity key={name} onPress={onPress} style={styles.item}>
              <View>{icon}</View>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
