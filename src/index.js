import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Text, 
  View,
  ListView,
  Slider
} from 'react-native';
import { Cell } from './components/index';
import { getAllCustomers } from './actions/CustomersActions';
import { universalStyles } from './styles/UniversalStyles';

const MIN_DISTANCE = 0;
const MAX_DISTANCE = 50;

class MainView extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      currentDistance: 10,
      dataSource: ds,
      customersDataSource: ds.cloneWithRows(this.props.filteredCustomers)
    };
  }

  componentWillMount() {
		this.props.getAllCustomers();
	}

	componentWillReceiveProps(newProps) {
		if (newProps.filteredCustomers.length !== this.props.filteredCustomers.length) {
      console.log('Props are different');
			this.setState({
				customersDataSource: this.state.dataSource.cloneWithRows(newProps.filteredCustomers)
			});
		}
  }

  didValueChange = (value) => {
    console.log('Did value change with value: ', value);
    this.setState({
      currentDistance: value
    });
  }

  renderAlertsRow = (rowData) => (
    <Cell
      cellHeight={64}
      mainText={rowData.name}
      detailText={`${rowData.latitude}, ${rowData.longitude}`}
    />
  )

  render() {
    return (
      <View style={universalStyles.container}>
        <View style={universalStyles.sliderContainer}>
          <Text style={[universalStyles.sliderValue, universalStyles.topText]}>
            {`Current distance: ${this.state.currentDistance}`}
          </Text>
          <Slider 
            minimumValue={MIN_DISTANCE}
            maximumValue={MAX_DISTANCE}
            step={1}
            value={this.state.currentDistance}
            onValueChange={this.didValueChange}
          />
          <View style={universalStyles.sliderValues}>
            <Text style={universalStyles.sliderValue}>{MIN_DISTANCE}</Text>
            <Text style={universalStyles.sliderValue}>{MAX_DISTANCE}</Text>
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

export default connect(mapStateToProps, { getAllCustomers })(MainView);

