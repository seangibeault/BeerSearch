import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import styles from "./styles";
import { Image } from "react-native";
export interface Props {
	beerDetails: Object;
}
export interface State { }
class BeerDetailsPage extends React.Component<Props, State> {
	render() {
		console.log(this.props.beerDetails);

		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{this.props.beerDetails.name}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					{
						this.props.beerDetails.labels ?
							<Image source={{ uri: this.props.beerDetails.labels.large }} style={{ height: 200, width: null, flex: 1 }} />
							: <Text />
					}

					<Text>{this.props.beerDetails.description}</Text>
					{
						this.props.beerDetails.style ?
							<Text>{this.props.beerDetails.style.description}</Text>
							:
							<Text />
					}
				</Content>
			</Container>
		);
	}
}

export default BeerDetailsPage;
