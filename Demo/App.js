import React from 'react';
import {
  View,
  ScrollView,
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

    const arrayOfString = ['soccer', 'basketball', 'golf', 'handball']

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.labelText}>Using an array of objects with max of 3 items:</Text>
        <View style={styles.codeContainer}>
          <Text>{JSON.stringify(data)}</Text>
        </View>
        <TagSelect
          value={[data[0]]}
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
        <View style={styles.separattor} />
        <Text style={styles.labelText}>Using an array of strings:</Text>
        <View style={styles.codeContainer}>
          <Text>{JSON.stringify(arrayOfString)}</Text>
        </View>
        <TagSelect
          value={[arrayOfString[0]]}
          data={arrayOfString}
          ref={(tag) => {
            this.tagString = tag;
          }}
          max={2}
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
                Alert.alert('Selected count', `Total: ${this.tagString.totalSelected}`);
              }}
            />
          </View>
          <View>
            <Button
              title="Get selected"
              onPress={() => {
                Alert.alert('Selected items:', JSON.stringify(this.tagString.itemsSelected));
              }}
            />
          </View>
        </View>
        <View style={styles.separattor} />
        <Text style={styles.labelText}>Inverse theme:</Text>
        <TagSelect
          theme="inverse"
          data={data}
        />
        <View style={styles.separattor} />
        <Text style={styles.labelText}>Success theme:</Text>
        <TagSelect
          theme="success"
          data={data}
        />
        <View style={styles.separattor} />
        <Text style={styles.labelText}>Info theme:</Text>
        <TagSelect
          theme="info"
          data={data}
        />
        <View style={styles.separattor} />
        <Text style={styles.labelText}>Danger theme:</Text>
        <TagSelect
          theme="danger"
          data={data}
        />
        <View style={styles.separattor} />
        <Text style={styles.labelText}>warning theme:</Text>
        <TagSelect
          theme="warning"
          data={data}
        />
        <Text style={styles.labelText}>Custom theme:</Text>
        <TagSelect
          data={data}
          itemStyle={styles.customItem}
          itemStyleSelected={styles.customItemSelected}
          itemLabelStyle={styles.customItemLabel}
          itemLabelStyleSelected={styles.customItemLabelSelected}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 45,
  },
  codeContainer: {
    marginBottom: 15,
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 4
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
  },
  separattor: {
    borderColor: '#DCDCDC',
    borderTopWidth: 1.5,
    marginBottom: 30
  },
  customItem: {
    borderColor: 'red',
    borderWidth: 1,
  },
  customItemSelected: {
    backgroundColor: 'green',
    borderColor: 'blue',
    borderWidth: 2,
  },
  customItemLabel: {
    color: 'green',
    fontSize: 16,
  },
  customItemLabelSelected: {
    color: 'yellow',
  }
});