import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const TagSelectItem = (props) => {
  const Touch = Platform.OS === 'ios' ? TouchableOpacity : TouchableHighlight;
  const innerStyle = [props.innerStyle, props.selected && props.innerStyleSelected];
  const labelStyle = [props.labelText, props.selected && props.labelTextSelected];

  return (
    <View style={styles.container}>
      <Touch onPress={props.onPress} activeOpacity={props.activeOpacity}>
        <View style={innerStyle}>
          <Text style={labelStyle} numberOfLines={1}>
            {props.label}
          </Text>
        </View>
      </Touch>
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
  innerStyle: PropTypes.any,
  innerStyleSelected: PropTypes.any,
  labelText: PropTypes.any,
  labelTextSelected: PropTypes.any,
};

TagSelectItem.defaultProps = {
  label: null,
  onPress: null,
  selected: false,
  activeOpacity: 0.5,
  innerStyle: styles.inner,
  innerStyleSelected: styles.innerSelected,
  labelText: styles.labelText,
  labelTextSelected: styles.labelTextSelected,
};

export default TagSelectItem;
