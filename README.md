# react-native-tag-select

[![npm version](https://badge.fury.io/js/react-native-tag-select.svg)](https://badge.fury.io/js/react-native-tag-select)

A simple tag component to act as radio button / checkbox

## Features

- Max itens selected
- Plain simple and flexible API
- Listeners for actions

## Demo

You can try on expo: https://expo.io/@rafaelmotta021/react-native-tag-select-demo

or just check the image bellow:

<p align="center">
<img src="https://raw.githubusercontent.com/rafaelmotta/react-native-tag-select/master/example.gif" height="550" />
</p>

## Setup

`yarn add react-native-tag-select`

or 

`npm install --save react-native-tag-select`

## Usage

```javascript
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
        <Text style={styles.labelText}>With custom style:</Text>
        <TagSelect
          data={data}
          itemStyle={styles.item}
          itemLabelStyle={styles.label}
          itemStyleSelected={styles.itemSelected}
          itemLabelStyleSelected={styles.labelSelected}
        />
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
  },
  item: {
    borderWidth: 1,
    borderColor: '#333',    
    backgroundColor: '#FFF',
  },
  label: {
    color: '#333'
  },
  itemSelected: {
    backgroundColor: '#333',
  },
  labelSelected: {
    color: '#FFF',
  },
});
```

## Available props

| Name | Type| Default | Description |
| --- | --- | --- | --- |
| labelAttr | string | 'label' | Key attribute name to render label text |
| keyAttr | string | 'id' | Key attribute name to render key property to the list  |
| data | array | [] | Data to render |
| max | number | null | Max itens permitted |
| onMaxError | func | null | Callback after user reach max itens |
| onItemPress | func | null | Callback after user press on item |
| itemStyle | any | {} | Style of item container |
| itemStyleSelected | any | {} | Style of item container selected |
| itemLabelStyle | any | {} | Style of item label |
| itemLabelStyleSelected | any | {} | Style of item label selected |

