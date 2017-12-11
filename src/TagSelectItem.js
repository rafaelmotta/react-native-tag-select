import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const TagSelectItem = (props) => {
  const innerStyle = [props.itemInnerStyle, props.selected && props.iteminnerStyleSelected];
  const labelStyle = [props.itemLabelText, props.selected && props.itemLabelTextSelected];

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

TagSelectItem.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  activeOpacity: PropTypes.number,
  itemInnerStyle: PropTypes.any,
  iteminnerStyleSelected: PropTypes.any,
  itemLabelText: PropTypes.any,
  itemLabelTextSelected: PropTypes.any,
};

TagSelectItem.defaultProps = {
  label: null,
  onPress: null,
  selected: false,
  activeOpacity: 0.5,
  itemInnerStyle: styles.inner,
  iteminnerStyleSelected: styles.innerSelected,
  itemLabelText: styles.labelText,
  itemLabelTextSelected: styles.labelTextSelected,
};

export default TagSelectItem;
