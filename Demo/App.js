import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Alert,
  Text,
} from 'react-native';

import { TagSelect } from 'react-native-tag-select';

export default class App extends React.Component {
  render() {
    const data = [
      { id: 1, label: 'Money' },
      { id: 2, label: 'Credit card' },
      { id: 3, label: 'Debit card' },
      { id: 4, label: 'Online payment' },
      { id: 5, label: 'Bitcoin' },
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>Payment:</Text>
        <TagSelect
          data={data}
          max={3}
          ref={(tag) => {
            this.tag = tag;
          }}
          onMaxError={() => {
            Alert.alert('Ops', 'Max reached');
          }}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonInner}>
            <Button
              title="Get selected count"
              style={styles.button}
              onPress={() => {
                Alert.alert('Selected count', `Total: ${this.tag.totalSelected}`);
              }}
            />
          </View>
          <View>
            <Button
              title="Get selected"
              onPress={() => {
                Alert.alert('Selected items:', JSON.stringify(this.tag.itemsSelected));
              }}
            />
          </View>
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
    padding: 15,
  },
  buttonInner: {
    marginBottom: 15,
  },
  labelText: {
    color: '#333',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 15,
  }
});
