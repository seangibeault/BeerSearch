// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { beerSearch } from "./actions";
export interface Props {
	navigation: any,
	beerSearch: Function,
	data: Object,
}
export interface State { }
class HomeContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);

		this.state = {
			searchText: ""
		};

		this.updateSearchText = this.updateSearchText.bind(this);
		this.search = this.search.bind(this);
		this.goToBeerDetailsPage = this.goToBeerDetailsPage.bind(this);
	}

	updateSearchText(value) {
		this.setState({
			searchText: value
		});
	}

	search() {
		this.props.beerSearch(this.state.searchText);
	}

	goToBeerDetailsPage(id:Number) {
		this.props.navigation.navigate("BeerDetailsPage", { id });
	}

	render() {
		return <Home
			goToBeerDetailsPage={this.goToBeerDetailsPage}
			navigation={this.props.navigation}
			isLoading={this.props.isLoading}
			updateSearchText={this.updateSearchText}
			beers={this.props.beers}
			search={this.search}
		/>;
	}
}

function bindAction(dispatch) {
	return {
		beerSearch: name => dispatch(beerSearch(name))
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
	beers: state.homeReducer.beers
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
