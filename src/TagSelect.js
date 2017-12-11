import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
} from 'react-native';

import TagSelectItem from './TagSelectItem';

class TagSelect extends React.Component {
  state = {
    selectedItems: {},
  };

  get totalSelected() {
    return Object.keys(this.state.selectedItems).length;
  }

  get itemsSelected() {
    const items = [];

    Object.entries(this.state.selectedItems).forEach(([key]) => {
      items.push(this.state.selectedItems[key]);
    });

    return items;
  }

  handleSelectItem = (item) => {
    const selectedItems = Object.assign(this.state.selectedItems, {});
    const found = this.state.selectedItems[item[this.props.keyName]];

    if (found) {
      delete selectedItems[item[this.props.keyName]];
    } else {
      if (this.props.max && this.totalSelected >= this.props.max) {
        return this.props.onMaxError();
      }

      selectedItems[item[this.props.keyName]] = item;
    }

    this.setState({ selectedItems });
    
    if (this.props.onItemPress) {
      return this.props.onItemPress(item);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          {this.props.data.map(i => (
            <TagSelectItem
              {...i}
              key={i[this.props.keyName]}
              onPress={this.handleSelectItem.bind(this, i)}
              selected={this.state.selectedItems[i[this.props.keyName]] && true}
            />
          ))}
        </View>
      </View>
    );
  }
}

TagSelect.propTypes = {
  keyName: PropTypes.string,
  data: PropTypes.array,
  max: PropTypes.number,
  onMaxError: PropTypes.func,
  onItemPress: PropTypes.func,
};

TagSelect.defaultProps = {
  keyName: 'id',
  data: null,
  max: null,
  onMaxError: null,
  onItemPress: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});

export default TagSelect;
