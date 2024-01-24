/* CODIGO SOBRE LA BANDERA DE ECUADOR  

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


import React, { useState } from 'react';

const SpookyCounter = () => {
    const [spookyCount, setSpookyCount] = useState(0);

    const cardStyle = {
        backgroundColor: '#1a1a1a',
        color: '#ff6600',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
        margin: 'auto',
        marginTop: '50px',
        textAlign: 'center',
    };

    const buttonStyle = {
        backgroundColor: '#ff6600',
        color: '#1a1a1a',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
    };

    return (
        <div style={cardStyle}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>¡Carta del Terror!</p>
            <p>Canteo espeluzante: <span style={{ color: '#ff6600' }}>{spookyCount}</span></p>
            <button onClick={() => setSpookyCount(spookyCount - 1)} style={buttonStyle}>
                ¡Reducir miedo!
            </button>
        </div>
    );
};

export default SpookyCounter;
*/
import React, { useState } from 'react';

export default function EmojiCounter() {
  const [emoji, setEmoji] = useState('');

  const addThreeSmiles = () => {
    setEmoji(function(prevEmoji) {
      return prevEmoji + ':)';
    });

    setEmoji(function(prevEmoji) {
      return prevEmoji + ':)';
    });

    setEmoji(function(prevEmoji) {
      return prevEmoji + ':)';
    });
  };

  return (
    <div>
      <h1>{emoji}</h1>
      <button onClick={addThreeSmiles}>Add 3 Smiles</button>
    </div>
  );
}

