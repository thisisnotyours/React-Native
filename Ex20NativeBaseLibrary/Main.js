import React, {Component} from 'react';
import {Image} from 'react-native';
import {Body, Button, Container, Content, Header, Icon, Left, Right, Title,
        Card, CardItem, Thumbnail, Text, Footer, FooterTab} from 'native-base';

export default class Main extends Component{
    render(){
        return(
            // NativeBase의 container는 flex:1을 주지않아도 자동으로 적용되어있음
            <Container style={{backgroundColor:'#FFC19E'}}>
                {/* 1. Header 영역 : 제목줄 */}
                <Header>
                    {/* 크게 3개영역으로 구성 : 자동 row 방향 */}
                    <Left>
                        <Button>
                            <Icon type="FontAwesome" name="bars"></Icon>
                        </Button>
                    </Left>
                   
                    <Body>
                        <Title>NativeBase</Title>
                    </Body>

                    <Right>
                        <Button>
                            <Icon type="FontAwesome" name="bath"></Icon>
                        </Button>
                    </Right>
                </Header>






                {/* 2. Content 영역 */}
                <Content>
                    <Button info bordered>
                        <Text>button</Text>
                    </Button>

                    <Button warning="warning">
                        <Text>button</Text>
                    </Button>

                    <Button>
                        <Icon type="FontAwesome" name="home"></Icon>
                        <Text>Home</Text>
                    </Button>

                    <Card>
                        <CardItem>
                        <Left>
                            <Thumbnail source={{uri: 'https://bracknellparish.org/wp-content/uploads/2020/06/Bubbles.jpeg'}} />
                            <Body>
                                <Text>Bubble Bath</Text>
                                <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                        </CardItem>
                        <CardItem cardBody>
                        <Image source={{uri: 'https://www.rd.com/wp-content/uploads/2016/10/01_bathing_kids_too_much_fotostorm-1024x683.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                        <Left>
                            <Button transparent>
                            <Icon active type="FontAwesome" name="thumbs-up" />
                            <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                            <Icon active type="FontAwesome" name="comment" />
                            <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                        </CardItem>
                    </Card>
                </Content>






                {/* 3. Footer 영역 */}
                <Footer>
                    {/* 탭버튼들.. */}
                    <FooterTab>
                        <Button>
                            <Text>Tab1</Text>
                        </Button>
                        <Button>
                            <Text>Tab2</Text>
                        </Button>
                        <Button>
                            <Text>Tab3</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}