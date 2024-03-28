import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './Alert.style'
import { BackHandler } from 'react-native'
import { useEffect } from 'react'


const Alert = ({setIsExiting}) => {
   
    
    const exitApp = () => BackHandler.exitApp()

    const cancelExitingApp = () => setIsExiting(false)



  return (
    <View style={styles.container}>
          <Text style={styles.title}>Are you sure you want to quit?</Text>
          <View style={styles.wrapper}>
              <TouchableOpacity onPress={cancelExitingApp} style={styles.btn1}>
                  <Text style={styles.text}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={exitApp} style={styles.btn2}>
                  <Text style={styles.text}>Yes</Text>
              </TouchableOpacity>
          </View>
    </View>
  )
}

export default Alert