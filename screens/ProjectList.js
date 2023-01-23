import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity ,FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import colors from '../constants/colors'

export default  ()=>{
    return <View style={styles.container}>
  <Text>Project List</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',    
    },
    icon:{
        padding:5,
        fontSize:32,
        color:"white",
    }
  });