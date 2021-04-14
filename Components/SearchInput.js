import React from 'react'
import { View, Text,StyleSheet } from 'react-native';
import {EvilIcons } from '@expo/vector-icons';
import { PRIMARY_COLORS} from "../utils/index"


const SearchInput = () => {
    return (
        <View style={styles.Search_Box_View}>
          <TextInput placeholder="Search" placeholderTextColor="#FFF" style={styles.Search_Box}  />
            <TouchableOpacity style={styles.button_touch} >
              <EvilIcons name="search" size={24} color={PRIMARY_COLORS} />
            </TouchableOpacity>
          </View>
    )
}

const styles = StyleSheet.create({
    Search_Box_View:{
        height:"20%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
      },
      Search_Box:{
        height:"35%",
        width:"80%",
        borderColor:"#FFF",
        borderWidth:1,
        borderRadius:15,
        color:"#FFF",
        paddingHorizontal:15
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
