// @flow
import * as React from "react";
import BeerDetailsPage from "../../stories/screens/BeerDetailsPage";
import { connect } from "react-redux";
import { getBeerDetails, clearBeerDetails } from "./actions";
export interface Props {
	id: any,
}
export interface State {}
class BeerDetailsContainer extends React.Component<Props, State> {

	componentDidMount() {
		this.props.getBeerDetails(this.props.navigation.state.params.id);
	}

	componentWillUnmount(){
		this.props.clearBeerDetails();
	}

	render() {
		return <BeerDetailsPage beerDetails={ this.props.beerDetails } navigation = {this.props.navigation}/>;
	}
}

function bindAction(dispatch) {
	return {
		getBeerDetails: id => dispatch(getBeerDetails(id)),
		clearBeerDetails: () => dispatch(clearBeerDetails)
	};
}

const mapStateToProps = state => ({
	isLoading: state.beerDetailsReducer.isLoading,
	beerDetails: state.beerDetailsReducer.beerDetails
});
export default connect(mapStateToProps, bindAction)(BeerDetailsContainer);

