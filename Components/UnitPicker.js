import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";

const UnitPicker = ({ unitSystem, setUnitSystem }) => {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        mode="dropdown"
        itemStyle={{ fontSize: 14 }}
        selectedValue={unitSystem}
        onValueChange={(item)=> setUnitSystem(item)}
      >
        <Picker.Item label={`C\u00B0`} value="metric" />
        <Picker.Item label={`F\u00B0`} value="imperial" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  unitsSystem: {
    position: 'absolute',
    ...Platform.select({
        ios: {
            top: -30,
        },
        android: {
            top: 30,
        },
    }),

    left: 20,
    height: 50,
    width: 100,
},

});

export default UnitPicker;
