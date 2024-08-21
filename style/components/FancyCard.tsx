import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ElevatedCard from './ElevatedCard'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>
        Trending Places 1
      </Text>
      <View style={[styles.card,styles.ElevatedCard]}>
        <Image  style={[styles.cardImages]} source=
            {{ uri : 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'}}
         />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Shivan Temple</Text>
          <Text style={styles.cardLabel}>Manchester of SouthIndia</Text>
          <Text style={styles.cardDescription}>What ever happerns let it happens</Text>
          <Text style={styles.cardFooter}>12 Min ago</Text>
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal: 8,
    },
    card:{
      width:380,
      height:320,
      marginVertical:12,
      marginHorizontal:16,
      borderRadius:6,
    },
    ElevatedCard:{
      backgroundColor:'#000',
      elevation:3,
      shadowOffset:{
        width:1, height:1,
      },
    },
    cardImages:{
        height:.180,
        marginBottom:8,
    },
    cardBody:{
      flex:1,
      flexGrow:1,
      paddingHorizontal:12
    },
    cardTitle:{
      color:'white',
      fontSize:22,
      fontWeight:'bold',
      marginBottom:4,
    },
    cardLabel:{
      color:'white',
      fontSize:16,
      marginBottom:8,
    },
    cardDescription:{
      color:'#DAE0E2',
      fontSize:14,
      marginBottom:12,
      flexShrink:1,
      marginTop:6,
    },
    cardFooter:{
      color:'white',
      textAlign:'left',
      alignSelf: 'flex-start', 
      width:'100%',
    },
})