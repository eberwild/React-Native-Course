// View -> like div element (conatiner type)
// Text -> displays text (like p element)
//      -> numberOfLines = {n} = text will be n lines if text is long enough
//      -> onPress() is the same like onClick()
// Image -> <Image source={require('./assets/icon.png')} for intern images
//       -> <Image source={{ uri: 'https://... , witdh: 200 , height: 300}} for external images we need to specify the dimensions!
// Touchable -> only can contain 1 single child element
//              TouchableWithoutFeedback (does nothing) , 
//              TouchableOpacity (reduces opacity for a short time) ,
//              TouchableHighlight ('focuses' the image if hold)
// Pressable -> needs no wrapper = can have more than 1 child element
//           -> style={({ hovered , pressed , focused })}   , direct acces of the state
// Button -> needs a property title!
//        -> style does not work on layout properties = needs to be in a wrapper
//        -> Button is limited to : title , color , onPress
// Alert -> Alert.alert('Title' , 'Message' , [{text: 'Yes' , onPress: function} , {text: 'No' , onPress: function}])
//       -> Alert.prompt('Title' , 'Message' , ButtonArray or Callbackfuntion) => only for IOS!!

import { StyleSheet, 
         Text, 
         View , 
         Image, 
         TouchableHighlight,
         Pressable,
         Button,
         Alert
        } from 'react-native';

// SafeAreaView -> content gets margin top to not be outside of the screen or coverd by the camera
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';

export default function App() {

  const [color , setColor] = useState('orange');

  const handlePress = () => {
    console.log('Text was pressed.');
  }

  const handleTap = () => {
    console.log('Image was tapped.')
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={5}
            onPress={() => handlePress()}>
        Hello lets see what happens when a text is very very very 
        large so we will have to set the number of lines
      </Text>
      <TouchableHighlight onPress={() => handleTap()}>
        <Image 
          resizeMode='cover'
          blurRadius={0}
          fadeDuration={3000}
          source={{ 
            uri: 'https://picsum.photos/200/300',
            width: 200,
            height: 300
            }}
        />
      </TouchableHighlight>
      <Pressable onPress={() => console.log('Wave!')}
                 style={({ pressed }) => ({
                  backgroundColor: pressed ? 'red' : 'dodgerblue',
                  padding: 20,
                  borderRadius: 8
                 })}>
        <View style={{ width: 200 , height: 50 }}></View>
      </Pressable>
      <View style={styles.buttonContainer}>
          <Button title='Alert'
                  color= {color}
                  onPress={() => {
                    setColor(color === 'orange' ? 'blue' : 'orange');
                    Alert.alert('Hello there :)' , 'Are you a One Piece fan ?' , [
                      {text: 'Yes' , onPress: () => {console.log('User is a part of the crew.')}} , 
                      {text: 'No' , onPress: () => {console.log('User has no taste..')}}
                    ])
                  }}
          />
          <Button title='Prompt'
                  color= 'red'
                  onPress={() => {
                    Alert.prompt('Quick question:' , 'What do you think the One Piece actually is?' , answer => console.log(answer));
                  }}
          />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 500,
  },
  buttonContainer: {
    flexDirection: 'row',
    columnGap: 10,
    marginTop: 15
  }
});
