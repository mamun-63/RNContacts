import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import { SETTINGS } from '../../constants/routeNames';
import styles from './styles';

const SideMenu = ({navigation}) => {
  const menuItems = [
    { icon: <Text>icon</Text>, name: 'Settings', onPress: () => navigation.navigate(SETTINGS) },
    { icon: <Text>icon</Text>, name: 'Logout', onPress: () => {} },
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
