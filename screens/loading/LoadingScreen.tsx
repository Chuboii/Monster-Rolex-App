import { View, Text, Image } from 'react-native'
import { styles } from './LoadingScreen.style'
import { useEffect } from 'react'

const LoadingScreen = ({navigation}) => {


    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("HomeScreen")
        }, 1000)
    }, [])


    return (
        <View style={styles.container}>
          <Image source={require("../../assets/monster gif.gif")} style={styles.gif} />
      <Text style={styles.text}>Monster Rolex</Text>
    </View>
  )
}

export default LoadingScreen