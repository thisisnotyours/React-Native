import React, {Component} from 'react';
import {Container, Header, Left, Button, Icon, Body, Title, Right, Content, Text, Footer, FooterTab, Accordion, Badge, Card, CardItem, Thumbnail,List, ListItem} from 'native-base';
import {Image} from 'react-native';

// 라이브러리 추가할 때 Link를 하지 않으면 ICON 이 이상하게 동작함 - 나머지는 특별한 문제 없이 잘 사용됨 


export default class Main extends Component{

    state={
        // 8)실습 Accordian에서 사용할 대량의 데이터
        dataArr:[
            // 정해진 propery명 { title[리스트제목글씨], content[숨겨져 있는 글씨]}
            {title:"First", content:"Hello. Nice to meet you."},
            {title:"Second", content:"Hello. Nice to meet you."},
            {title:"Third", content:"Hello. Nice to meet you."},
        ],
    }

    render(){
        return (
            
            // 앱 기획 과정에서 프로토 타입 만들때 유용하게 활용. 실제 앱 제작과정에서도 많이 사용!!!!!!!!

            //NativeBase(앞으로 줄여서 NB라고 표시)의 시작은 Container[flex:1 스타일이 이미 적용되어 있는 View- 즉, 기본 높이가 화면의 높이와 같음]
            <Container>
                {/* 크게 3개영역 : Header, Content, Footer로 구성 - 마치 web 페이지 만들듯이 */}

                {/*1. ActionBar의 역할을 하는 Header : 기본 배경색과 높이 사이즈를 가지고 있음[Android와 유사]*/}
                <Header>
                    {/* 크게 3개영역 : Left, Body, Right로 구성하면 배치가 자연스럽게 이루어짐 */}

                    {/*1.1)왼쪽 영역 : 보통 logo나 up버튼, 드로우어 메뉴버튼 등이 존재함 */}
                    <Left>
                        {/* NB의 Button컴포넌트 [ 주의: import 확인할 것. 실수로 react-native의 Button이 import되지 않도록 ] - TouchableXXX 같은 녀석*/}
                        <Button>
                            {/* native-base 라이브러리 추가시에 link 안하면 [x박스]만 보여짐 */}
                            {/* type에 지정한 icon 종류를 Google에서 검색하면 해당 아이콘들의 name들을 확인할 수 있음. [유명한 곳 : FontAwesome, Ionicons] */}
                            <Icon type="FontAwesome" name="bars"></Icon>                            
                        </Button>                        
                    </Left>
                    {/* 1.2)타이틀 영역 */}
                    <Body style={{marginLeft:8}}>
                        <Title>NAtive Base</Title>
                    </Body> 
                    {/* 1.3)오르쪽 영역 : 보통 옵션메뉴들 배치 */}
                    <Right>                        
                    </Right>
                </Header>

                {/*2.컨텐츠 영역  */}
                {/* Content : 자동 스크롤링(ScrollView), padder속성 적용 하면 기본 padding적용 */}
                <Content padder>
                    <Text>This is Content</Text>                 
                    

                    {/* 4. 버튼도 같은 방식으로 색상 지정 */}
                    <Button warning>
                        <Text>button</Text>
                    </Button>
                    {/* 아웃라인 버튼 */}
                    <Button info bordered>
                        <Text>button</Text>
                    </Button>
                    {/* 배경투명버튼 */}
                    <Button danger transparent>
                        <Text>button</Text>
                    </Button>
                    {/* 라운드 버튼 */}
                    <Button dark rounded>
                        <Text>button</Text>
                    </Button>
                    {/* 블럭버튼. 글씨가 가운데 정렬 */}
                    <Button block danger>
                        <Text>Danger</Text>
                    </Button>
                    {/* 아이콘 버튼 : 사이즈는  flex로 조절*/}
                    <Button iconLeft style={{alignSelf:'flex-start'}}>
                        <Icon type="FontAwesome" name='home' />
                        <Text>Home</Text>
                    </Button>

                    {/* 5. Card : 카드처럼 그림자효과 및 마진 */}                    
                    <Card>
                        <CardItem header button onPress={() => alert("This is Card Header")}>
                        <Text>NativeBase</Text>
                        </CardItem>
                        <CardItem button onPress={() => alert("This is Card Body")}>
                        <Body>
                            <Text>
                            Click on any carditem
                            </Text>
                        </Body>
                        </CardItem>
                        <CardItem footer button onPress={() => alert("This is Card Footer")}>
                        <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                        <Left>
                            <Thumbnail source={{uri: 'https://yts.lt//assets//images//movies//avengers_infinity_war_2018//large-cover.jpg'}} />
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                        </CardItem>
                        <CardItem cardBody>
                        <Image source={{uri: 'https://yts.lt//assets//images//movies//avengers_infinity_war_2018//large-cover.jpg'}} style={{height: 200, width: null, flex: 1}}/>
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

                    {/* 나머지는 사이트의 컴포넌트별 미리보기를 통해 확인 */}


                    {/* 6. 리스트 모양 편하게 만들수 있음. */}
                    {/* 자동 스크롤 */}
                    <List>
                        {/* 리스트 아이템 하나의 모양 */}
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://yts.lt//assets//images//movies//avengers_infinity_war_2018//large-cover.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>

                    {/* 7. Badge : 속성의 이름으로 색상 결정 - Bootstrap과 유사*/}
                    <Badge primary>
                        <Text>2</Text>
                    </Badge>
                    <Badge success>
                        <Text>2</Text>
                    </Badge>


                    {/* 8. Accordion : collapsing되어 있는 리스트뷰 UI*/}
                    {/* <Accordion 
                        dataArray={ this.state.dataArr } //보여줄 대량의 데이터를 state에 만들고 보여주기[title, content]프로퍼티 필요
                        expanded={1}    //expanded- 미리 열려있는 리스트의 인덱스번호
                        icon="add"      // 닫혀있을 때 아이콘 
                        expandedIcon="remove"  //열려있을 때 아이콘
                        iconStyle={{ color: "green" }}   //아이콘 색상
                        expandedIconStyle={{ color: "red" }}  //아이콘 색상
                        headerStyle={{ backgroundColor: "#b7daf8",}}  //리스트의 title 스타일
                        contentStyle={{ backgroundColor: "#ddecf8", padding:16,}} //리스트가 확장된 영역의 스타일
                        // 해더와 콘텐츠 영역을 별도의 컴포넌트로 변경
                        // renderHeader={ ()=><Text>Nice</Text> }
                        // renderContent={this._renderContent}
                    > 
                    </Accordion> */}


                    {/* 9. ActionSheet는 사이트 참고 - react-navigation필요 */}

                   

                </Content>

                {/*3. Footer영역 */}
                <Footer>
                    {/* 탭버튼 */}
                    <FooterTab>
                        <Button>
                            <Text>TAB1</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button>
                            <Text>TAB2</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        );
    }
}