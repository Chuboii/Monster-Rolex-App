import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { styles } from './SearchInput.style';
import MonsterCards from '../monster cards/MonsterCards';

const SearchInput = ({navigator}) => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
    const [value, setValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setOriginalData(data);
        setFilteredData(data); // Initialize filteredData with original data
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Filter the original data based on the user input
    const filtered = originalData.filter((el) => {
      return el.name.includes(value);
    });
    setFilteredData(filtered);
  }, [value, originalData]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper1}>
        <Text style={styles.title}>Monster Rolex</Text>
        <TextInput
          placeholder="Search Monsters"
          style={styles.input}
          value={value}
          onChangeText={(newValue) => setValue(newValue)}
        />
      </View>
      <MonsterCards data={filteredData} navigator={navigator} />
    </View>
  );
};

export default SearchInput;
