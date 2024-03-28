import { View, Text, BackHandler, Image } from 'react-native'
import { styles } from './MonsterDetails.style'
import { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'


const MonsterDetailss = ({navigation}) => {
    const { data } = useContext(DataContext)
    

    useEffect(() => {
        const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
            navigation.goBack()
            return true
        })

        return () => backHandler.remove()
    }, [])


  return (
    <View style={styles.container}>
          <Text>Monster Details</Text>
          <View style={styles.wrapBox}>
          <View>
          <Image style={styles.img} source={{ uri: `https://robohash.org/${data.id}?set=set2` }}  />
          </View>
          <View style={styles.wrapper}>
              <View style={styles.card}>
                  <Text style={styles.label}>Name: </Text>
                  <Text style={styles.text}>{ data.name}</Text>
              </View>

              <View style={styles.card}>
                  <Text style={styles.label}>Username: </Text>
                  <Text style={styles.text}>{data.username }</Text>
              </View>

              <View style={styles.card}>
                  <Text style={styles.label}>Email: </Text>
                  <Text style={styles.text}>{ data.email}</Text>
              </View>

              <View style={styles.card}>
                  <Text style={styles.label}>Phone: </Text>
                  <Text style={styles.text}>{ data.phone}</Text>
              </View>

              <View style={styles.card}>
                  <Text style={styles.label}>Website: </Text>
                  <Text style={styles.text}>{ data.website}</Text>
              </View>

              <View style={styles.card}>
                  <Text style={styles.label}>City: </Text>
                  <Text style={styles.text}>{data.address.city}</Text>
              </View>

              <View style={styles.card}>
                  <Text style={styles.label}>Company: </Text>
                  <Text style={styles.text}>{ data.company.name }</Text>
              </View>
 </View>
          </View>
    </View>
  )
}

export default MonsterDetailss