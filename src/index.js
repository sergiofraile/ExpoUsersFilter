import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Text, 
  View,
  ListView
} from 'react-native';
import { Cell } from './components/index';
import { getAllCustomers } from './actions/CustomersActions';

import { universalStyles } from './styles/UniversalStyles';

class MainView extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
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

  renderAlertsRow = (rowData) => (
		<Cell
			cellHeight={64}
			mainText="Paco"
			detailText="el flaco"
		/>
  )

  render() {
    return (
      <View style={universalStyles.container}>
        <Text>This is it</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <ListView
          style={{ backgroundColor: 'blue' }}
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

