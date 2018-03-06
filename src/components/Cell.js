import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
import { cellStyles } from './CellStyles';

class Cell extends Component {

  /* Props that this component is able to receive:
		cellHeight: Int => Cell height
		mainText: String => Cell title
		detailText: String (optional) => Cell subtitle
    amountInt: Int (optional) => Cell right amount text. Minor units. Overrides rightText
    amountCurrencyCode: String (optional) => Default EUR. Currency code to parse the amount
    rightText: String (optional) => Text to display at the right side of the cell.
                                    Won't display if there's an amount set
    icon: Require Image (optional) => Icon has to be an image source
    cellStyle: Style object => Override styles for the cell (background color, corner radius...)
    cellShadowStyle: Style object => Overwrite styles for the shadow
    accessory: Bool (optional) => Default false. Shows or hides the chevron at the right
		onPress: () => {} => Callback for tapping the cell
	*/

  static defaultProps = {
    cellHeight: 44,
    mainText: '',
    amountCurrencyCode: 'EUR',
    cellStyle: {},
    cellShadowStyle: {},
    accessory: false,
    onPress: () => {}
  };

  renderImage = () => {
    if (this.props.icon) {
      return <Image style={cellStyles.leftIcon} source={this.props.icon} />;
    }
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

  renderRightLabelText = () => {
    if (this.props.rightText !== undefined) {
      return (
        <Text
          style={cellStyles.amountText}
        >
          {this.props.rightText}
        </Text>
      );
    }
  };

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
            {this.renderImage()}
            {this.renderText()}
          </View>
          <View
            style={[
              cellStyles.textWithIconContainer,
              cellStyles.rightTextWithIconContainer
            ]}
          >
            {this.renderRightLabelText()}
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
