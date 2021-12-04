import React, {useState} from 'react';
import {ActivityIndicator, TouchableOpacity, Text, View} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Message = ({
  onDismiss,
  retry,
  retryFn,
  message,
  primary,
  info,
  success,
  danger,
}) => {
  const [userDismissed, setUserDismissed] = useState(false);

  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
    if (danger) {
      return colors.danger;
    }
  };

  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.white}}>{message}</Text>
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={{color: colors.white}}>retry</Text>
              </TouchableOpacity>
            )}

            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setUserDismissed(true);
                  onDismiss();
                }}>
                <Text style={{color: colors.white}}>x</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
