import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { styles } from './MonsterCards.style'
import { DataContext } from '../../context/DataContext'

const MonsterCards = ({ data, navigator }) => {
    const { setData } = useContext(DataContext)
    

    const enableMonsterDetails = (item) => {
        setData(item)
        navigator.navigate("MonsterDetailss") 
    }
    return (
        <>
            <View
                style={styles.wrapper}>
    
          {data ?  <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                  return <TouchableOpacity onPress={() => {
                      enableMonsterDetails(item)
                  }
                  } style={styles.cards}>
                      <Image style={styles.img} source={{ uri: `https://robohash.org/${item.id}?set=set2` }}  />
                      <Text style={styles.text}>{item.name}</Text>
                      <Text style={styles.text}>{item.email}</Text>
                  </TouchableOpacity>
              }}
          /> : data.length === 0 ? <Text style={{fontSize:4000}}>Data not found</Text> : ""}
            </View>
    </>
  )
}

export default MonsterCards