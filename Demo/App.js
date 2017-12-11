import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Alert,
  Text,
} from 'react-native';

import {
  TagSelect,
} from 'react-native-tag-selec';

export default class App extends React.Component {
  render() {
    const data = [
      { id: 1, label: 'Dinheiro' },
      { id: 2, label: 'Cheque' },
      { id: 3, label: 'Cartão de débito' },
      { id: 4, label: 'Cartão de crédito' },
      { id: 5, label: 'Pagamento online' },
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>Payment:</Text>
        <TagSelect
          data={data}
          max={2}
          ref={(tag) => {
            this.tag = tag;
          }}
          onMaxError={() => {
            Alert.alert('Ops', 'Max reached');
          }}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Get selected count"
            onPress={() => {
              Alert.alert('Selected count', `Total: ${this.tag.totalSelected}`);
            }}
          />
          <Button
            title="Get selected"
            onPress={() => {
              Alert.alert('Selected items:', JSON.stringify(this.tag.itemsSelected));
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 50,
    marginLeft: 15,
  },
  buttonContainer: {
    marginBottom: 50,
  },
  labelText: {
    color: '#333',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 15,
  }
});
