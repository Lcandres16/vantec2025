import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const EcuadorFlagApp = () => {
  const [currentColor, setCurrentColor] = useState(null);

  const handlePress = (color) => {
    setCurrentColor(color);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress('yellow')} style={[styles.stripe, { backgroundColor: '#FFD100', height: 100 }]}>
        <TouchableOpacity onPress={() => handlePress('blue')} style={[styles.stripe, { backgroundColor: '#0033A0', height: 50 }]}>
          <TouchableOpacity onPress={() => handlePress('red')} style={[styles.stripe, { backgroundColor: '#EF3340', height: 25 }]}>
            <Text style={styles.text}>{currentColor ? `${currentColor.toUpperCase()} - Ecuador` : 'Ecuador'}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stripe: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default EcuadorFlagApp;
