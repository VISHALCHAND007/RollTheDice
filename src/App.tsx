import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';

//importing images
import DiceOne from '../assets/dice_1.png';
import DiceTwo from '../assets/dice_2.png';
import DiceThree from '../assets/dice_3.png';
import DiceFour from '../assets/dice_4.png';
import DiceFive from '../assets/dice_5.png';
import DiceSix from '../assets/dice_6.png';

import {Image, ImageSourcePropType, Pressable, StyleSheet, Text, View} from 'react-native';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImg} source={imageUrl}/>
    </View>
  );
};

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const rollTheDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/> 
      <Pressable onPress={rollTheDice}>
        <Text style={[styles.rollDiceBtnTxt, styles.textWhite
        ]}>Roll The Dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  textWhite: {
    color: '#ffffff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#EDC9AF',
  },
  diceContainer: {
    margin: 12,
  },
  diceImg: {
    height: 200,
    width: 200,
  },
  rollDiceBtnTxt: {
    width: 200,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#00693E',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
});

export default App;
