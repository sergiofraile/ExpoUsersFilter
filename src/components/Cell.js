import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';
import { cellStyles } from './CellStyles';

class Cell extends Component {

  /* Props that this component is able to receive:
		cellHeight: Int => Cell height
		mainText: String => Cell title
		detailText: String (optional) => Cell subtitle
    cellStyle: Style object => Override styles for the cell (background color, corner radius...)
    cellShadowStyle: Style object => Overwrite styles for the shadow
    accessory: Bool (optional) => Default false. Shows or hides the chevron at the right
		onPress: () => {} => Callback for tapping the cell
	*/

  static defaultProps = {
    cellHeight: 44,
    mainText: '',
    cellStyle: {},
    cellShadowStyle: {},
    onPress: () => {}
  };

  renderText() {
    if (
      this.props.detailText !== undefined && this.props.detailText.length > 0
    ) {
      return (
        <View>
          <Text
            style={cellStyles.mainText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {this.props.mainText}
          </Text>
          <Text
            style={cellStyles.detailText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {this.props.detailText}
          </Text>
        </View>
      );
    }
    return (
      <Text
        style={cellStyles.standaloneMainText}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {this.props.mainText}
      </Text>
    );
  }

  renderCellContent = () => (
    <TouchableOpacity onPress={this.props.onPress}>
      <Animated.View
        style={[
          cellStyles.cellContainer,
          this.props.cellStyle,
          { height: this.props.cellHeight }
        ]}
      >
        <View style={cellStyles.cellContent}>

          <View
            style={[
              cellStyles.textWithIconContainer,
              cellStyles.lefTextWithIconContainer
            ]}
          >
            {this.renderText()}
          </View>
        </View>

        <View
          style={[cellStyles.cellBottomShadow, this.props.cellShadowStyle]}
        />
      </Animated.View>
    </TouchableOpacity>
  )

  render() {
    return this.renderCellContent();
  }
}

export default Cell;
