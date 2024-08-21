import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { PropsWithChildren } from 'react'

import DiceOne from '../assests/One.png';
import DiceTwo from '../assests/Two.png';
import DiceThree from '../assests/Three.png';
import DiceFour from '../assests/Four.png';
import DiceFive from '../assests/Five.png';
import DiceSix from '../assests/One.png';

type DiceProps = PropsWithChildren<{
   imageUrl : ImageSourcePropType
}>

const Dice = ({imageUrl}:DiceProps) => {
  return (
    <>
      <View>
        <Image style={styles.diceImage} source={imageUrl}/>

      </View>
    </>
  )
} 

const App = () : JSX.Element => {
  const [diceImage,setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () =>{
      let random = Math.floor(Math.random()*6)+1;
      if(random == 1){
        setDiceImage(DiceOne);
      }
      if(random == 2){
        setDiceImage(DiceTwo);
      }
      if(random == 4){
        setDiceImage(DiceFour);
      }
      if(random == 3){
        setDiceImage(DiceThree);
      }
      if(random == 5){
        setDiceImage(DiceFive);
      }
      if(random == 6){
        setDiceImage(DiceSix);
      }
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable
        onPress={rollDice}
      >
        <Text style={styles.rollDiceBtnText}>
          Click to roll
        </Text>
      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})