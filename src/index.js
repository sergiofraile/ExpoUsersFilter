import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  ListView,
  Slider
} from 'react-native';
import { Cell } from './components/index';
import {
  getAllCustomers,
  filterCustomers
} from './actions/CustomersActions';
import { universalStyles } from './styles/UniversalStyles';
import {
  MIN_SLIDER_DISTANCE,
  MAX_SLIDER_DISTANCE,
  INITIAL_DISTANCE
} from './config/constants';

class MainView extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      currentDistance: INITIAL_DISTANCE,
      dataSource: ds,
      customersDataSource: ds.cloneWithRows(this.props.filteredCustomers)
    };
  }

  componentWillMount() {
		this.props.getAllCustomers();
	}

	componentWillReceiveProps(newProps) {
		if (newProps.filteredCustomers.length !== this.props.filteredCustomers.length) {
			this.setState({
				customersDataSource: this.state.dataSource.cloneWithRows(newProps.filteredCustomers)
			});
		}
  }

  didValueChange = (value) => {
    this.setState({
      currentDistance: value
    });
    this.props.filterCustomers(value);
  }

  renderAlertsRow = (rowData) => (
    <Cell
      cellHeight={64}
      mainText={`${rowData.user_id} - ${rowData.name}`}
      detailText={`${rowData.distanceToOffice.toFixed(0)}km away`}
    />
  )

  render() {
    return (
      <View style={universalStyles.container}>
        <View style={universalStyles.sliderContainer}>
          <Text style={[universalStyles.sliderValue, universalStyles.topText]}>
            {`Current distance: ${this.state.currentDistance}km`}
          </Text>
          <Slider
            minimumValue={MIN_SLIDER_DISTANCE}
            maximumValue={MAX_SLIDER_DISTANCE}
            step={1}
            value={this.state.currentDistance}
            onValueChange={this.didValueChange}
          />
          <View style={universalStyles.sliderValues}>
            <Text style={universalStyles.sliderValue}>{MIN_SLIDER_DISTANCE}</Text>
            <Text style={universalStyles.sliderValue}>{MAX_SLIDER_DISTANCE}</Text>
          </View>
        </View>
        <ListView
          style={universalStyles.list}
          dataSource={this.state.customersDataSource}
          renderRow={this.renderAlertsRow}
          enableEmptySections
          removeClippedSubviews={false}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { customers, filteredCustomers } = state.customers;
  return { customers, filteredCustomers };
};

export default connect(mapStateToProps, { getAllCustomers, filterCustomers })(MainView);

