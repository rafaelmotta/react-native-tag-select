# react-native-tag-select

[![npm version](https://badge.fury.io/js/react-native-tag-select.svg)](https://badge.fury.io/js/react-native-tag-select)

A simple tag component to act as radio button / checkbox

## Features

- Max itens selected
- Plain simple and flexible API
- Listeners for actions

## Demo

<p align="center">
<img src="https://raw.githubusercontent.com/mmazzarolo/react-native-tips/master/imgs/modal.gif" height="300" />
<img src="https://raw.githubusercontent.com/mmazzarolo/react-native-modal-datetime-picker/master/extras/datetimepicker-ios.gif" height="300" />
<img src="https://raw.githubusercontent.com/mmazzarolo/react-native-animated-modal/master/extras/example-modal.gif" height="300" />
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
| itemInnerStyle | any | 'styles.inner' | Style of item container |
| iteminnerStyleSelected | any | 'styles.innerSelected' | Style of item container selected |
| itemLabelText | any | 'styles.labelText' | Style of item label |
| itemLabelTextSelected | any | 'styles.labelTextSelected' | Style of item label selected |

