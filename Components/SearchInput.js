import React from 'react'
import { View, TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import {EvilIcons } from '@expo/vector-icons';
import { colors} from "../utils/index"


const SearchInput = ({text, setText, getDataForCity}) => {
    return (
        <View style={styles.Search_Box_View}>
          <TextInput placeholder="Search" placeholderTextColor="#FFF" value={text} style={styles.Search_Box} onChangeText={(item)=>setText(item)} />
            <TouchableOpacity style={styles.button_touch} >
              <EvilIcons name="search" size={24} color={colors.PRIMARY_COLORS} onPress={getDataForCity} />
            </TouchableOpacity>
          </View>
    )
}

const styles = StyleSheet.create({
    Search_Box_View:{
        marginLeft: 20,
        height:"20%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
      },
      Search_Box:{
        height:"35%",
        width:"55%",
        borderColor:colors.PRIMARY_COLORS,
        borderWidth:1,
        borderRadius:15,
        color:"#000000",
        paddingHorizontal:15,
        textAlign:"center",
      },
      button_touch:{
        marginLeft:"5%",
        height:"35%",
        width:"8%",
        justifyContent:"center",
        alignItems:"center"
      },
    
})

export default SearchInput
