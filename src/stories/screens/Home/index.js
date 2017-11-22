import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Thumbnail,
  Body,
  Right,
  List,
  ListItem,
  Input,
  Item,
  Card,
  CardItem,
  Spinner
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  search: Function;
  updateSearchText: Function;
  beer: Object;
  isLoading: boolean;
}
export interface State { }
class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Card>
            <CardItem searchBar rounded>
              <Item>
                <Icon name="ios-search" onPress={() => (this.props.search())} />
                <Input
                  placeholder="Search for beer"
                  value={this.props.searchText}
                  onChangeText={(text) => this.props.updateSearchText(text)}
                  returnKeyLabel={"search"}
                  onSubmitEditing={e => {
                      this.props.search();
                  }}
                />
              </Item>
            </CardItem>
          </Card>
          <List>
            {
              this.props.isLoading ?
                <Spinner />
              :
              this.props.beers.data ?
                this.props.beers.data.map((beer, i) => (
                  <ListItem
                    avatar
                    key={i}
                  >
                    <Left>
                      {
                        beer.labels ?
                          <Thumbnail source={{ uri: beer.labels.icon }} /> :
                          <Icon name="ios-beer" />
                      }

                    </Left>
                    <Body>
                      <Text>{beer.nameDisplay}</Text>
                      {
                        beer.style ?
                          <Text note>{beer.style.description}</Text> :
                          <Text />
                      }
                    </Body>
                  </ListItem>
                ))
                : <Text>No Results Found</Text>
            }
          </List>
        </Content>
      </Container>
    );
  }
}

export default Home;
