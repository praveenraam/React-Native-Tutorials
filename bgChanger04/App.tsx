/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {

  const [randomBG,setRandomBG] = useState('#000');

  const generateRandom = () => {
    const random = "123456789ABCDEF"
    let color = "#"

    for(let i=0;i<6;i++){
      color+= random[Math.floor(Math.random()*16)]
    }
    setRandomBG(color);
  }

  return (
    <>
      <StatusBar/>
      <View style={[styles.container,{backgroundColor:randomBG}]}> 
        <TouchableOpacity onPress={generateRandom}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>God</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  actionBtn:{
    backgroundColor:"#6A1B4D",
    paddingHorizontal:40,
    paddingVertical:10,
    borderRadius:12,
  },
  actionBtnTxt:{
    fontSize:24,
    color:"#fff",
    textTransform:"uppercase",
  }
});

export default App;
