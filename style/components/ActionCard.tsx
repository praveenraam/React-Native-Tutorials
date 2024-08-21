import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ElevatedCard from './ElevatedCard';

export default function ActionCard() {

    function openWeb(webLink: string){
        Linking.openURL(webLink);
    }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.ElevatedCard]}>
            <View style={styles.headingContainer }>
                <Text style={styles.headerText}>
                    What's new in ES12
                </Text>
            </View>
            <View>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
                    }}
                />
            </View>
            <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Just Ilke every year, Javascnpt bnngs an new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly understand examples .1 jump to code with easy to
                    </Text>
            </View>
            <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWeb('https://www.google.com')}
                    >   
                       <Text>For more</Text>
                    </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{

    },ElevatedCard:{

    },
    headingContainer:{

    },
    headerText:{

    },
    cardImage:{
        height:100,
    },
    bodyContainer:{

    },
    footerContainer:{

    }
})