import { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { BackHandler } from 'react-native'
import Alert from '../../components/alert/Alert'
import { styles } from './HomeScreen.style'
import MonsterCards from '../../components/monster cards/MonsterCards'
import SearchInput from '../../components/search input/SearchInput'


const HomeScreen = ({navigation}) => {
    const [isExiting, setIsExiting] = useState(false)

    useEffect(() => {
        const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
            setIsExiting(true)
            
            return true
        })
        
        return () => backHandler.remove()
  }, [isExiting])



    return (
        <>
            {isExiting && <Alert setIsExiting={setIsExiting} />}
            <View style={styles.container}>
                <SearchInput navigator={ navigation } />
            </View>
    </>
  )
}

export default HomeScreen