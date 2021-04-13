import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {Ionicons } from "@expo/vector-icons";
import {colors} from "../utils/index";

const ReloadIcons = ({load}) => {
    return (
        <View style={styles.reoloadIcon}>
            <Ionicons onPress={load} name="md-refresh" size={24} color={colors.PRIMARY_COLORS}/>
        </View>
    )
}

const styles = StyleSheet.create({
   reoloadIcon:{ position: "absolute",
    top: 30,
    right: 20,}
})

export default ReloadIcons
