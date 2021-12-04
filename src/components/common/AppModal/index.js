import React, { useState } from "react";
import { Modal, Text, View } from "react-native";

const AppModal = ({ modalVisible }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View>
          <Text>Hi from modal</Text>
        </View>
      </Modal>
    </View>
  );
};

export default AppModal;