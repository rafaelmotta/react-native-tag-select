import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const TagSelectItem = (props) => {
  const innerStyle = [
    ([styles.inner].concat(props.itemStyle)),
    props.selected && ([styles.innerSelected].concat(props.itemStyleSelected))
  ];

  const labelStyle = [
    ([styles.labelText].concat(props.itemLabelStyle)),
    props.selected && ([styles.labelTextSelected].concat(props.itemLabelStyleSelected))
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} activeOpacity={props.activeOpacity}>
        <View style={innerStyle}>
          <Text style={labelStyle} numberOfLines={1}>
            {props.label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

TagSelectItem.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  activeOpacity: PropTypes.number,
  itemStyle: PropTypes.any,
  itemStyleSelected: PropTypes.any,
  itemLabelStyle: PropTypes.any,
  itemLabelStyleSelected: PropTypes.any,
};

TagSelectItem.defaultProps = {
  label: null,
  onPress: null,
  selected: false,
  activeOpacity: 0.5,
  itemStyle: null,
  itemStyleSelected: null,
  itemLabelStyle: null,
  itemLabelStyleSelected: null,
};

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginRight: 10,
  },
  inner: {
    padding: 10,
    backgroundColor: '#F2EFF5',
    borderRadius: 17.5,
  },
  innerSelected: {
    backgroundColor: '#B42131',
  },
  labelText: {
    color: '#92909C',
  },
  labelTextSelected: {
    color: '#FFF',
  },
});

export default TagSelectItem;
