import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50
  },
  title: {
    fontSize: 21,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 20
  },
  subTitle: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 20
  },
  form: {
    paddingTop: 20
  },
  createSection: {
    flexDirection: 'row'
  },  
  linkBtn: {
    fontSize: 16,
    color: colors.primary,
    paddingLeft: 17,
  },
  infoText: {
    fontSize: 17
  }
});

export default styles;
