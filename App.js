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

import { StyleSheet, 
         Text, 
         View , 
         Image, 
         TouchableHighlight,
         Pressable
      } from 'react-native';

// SafeAreaView -> content gets margin top to not be outside of the screen or coverd by the camera
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

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
        <View style={{ width: 200 , height: 300 }}></View>
      </Pressable>
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
});
