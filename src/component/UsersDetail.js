import React,{Component} from 'react';
import {Text,FlatList,View,Image,ScrollView,TouchableHighlight,Alert,SafeAreaView} from 'react-native';
import {getUsers,removeUser} from '../FunctionCall/Call'
import {userStyles,imageStyles} from '../Helper/styles/Style';
import {Header} from './Common/Common';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
class UsersDetail extends Component{
    constructor(props){
        super(props);
        //console.log(props);
        this.displayUser();
    }
    static navigationOptions = {
        title: 'User Information',
        tabBarLabel: 'Users',
        tabBarIcon: () => <Icon name="users" size={25} style={{color:'gray'}} />
    };
    state={
        users:[],
        name:'',
        hide:false,
        height:50
    };
    displayUser=()=>{
        getUsers().then((res)=>{
            const users=res.data;
            this.setState({users});
        }).catch((err)=>{
            alert(err)});
    };
    componentDidMount=()=>{
       this.displayUser();
    };
    removeData=(name)=>{
        const data={
            name:name
        };
        Alert.alert(
            'Delete User',
            'Are you sure you want to delete?',
            [
                {text: 'No', onPress: () => {this.displayUser();}},
                {text: 'Yes', onPress: () =>{
                    removeUser(data).then((res)=>{
                        this.displayUser();
                    }).catch((err)=>{
                        alert(err);
                    })
                }},
            ],
            { cancelable: false }
        )
        //alert(name);


    };
    render(){
        const {textStyle,viewstyle,buttonStyle} = userStyles;
        return(
                <SafeAreaView style={{ flex:1,backgroundColor: 'white'}}>
                    <ScrollView
                        automaticallyAdjustContentInsets={false}
                    >

                            <Image source={require('./../images/imgUser.jpeg')} size={70} style={imageStyles.imgStyle}/>
                            <Header headerText="Users" headIcon="info-circle"></Header>
                            <SwipeableFlatList
                                      data={this.state.users}
                                      renderItem={({item})=>
                                                <View style={{height:80,marginTop:20}}>
                                                        {item &&
                                                        <View style={viewstyle} >
                                                             <View>
                                                                    <Text style={textStyle}>{item.name}</Text>
                                                                    <Text style={textStyle}>{item.age}</Text>
                                                                    <Text style={textStyle}>{item.email}</Text>

                                                            </View>
                                                        </View>
                                                        }
                                                </View>
                                            }
                                        renderRight={({item})=>
                                            <View style={{width:120,flexDirection:'row'}}>
                                                <View style={{paddingRight:10}}>
                                                    <TouchableHighlight
                                                        style={[buttonStyle,{backgroundColor:'blue'}]}
                                                        onPress={()=>{this.props.navigation.navigate('EditUser',{item,displayUser:this.displayUser});}}>
                                                            <Text style={{color:'white',alignSelf:'center'}}>Edit</Text>
                                                    </TouchableHighlight>
                                                </View>
                                                <View style={{paddingRight:10}}>
                                                    <TouchableHighlight
                                                        style={buttonStyle}
                                                        onPress={()=>this.removeData(item.name)}>
                                                             <Text style={{color:'white',alignSelf:'center'}}>Delete</Text>
                                                    </TouchableHighlight>
                                                </View>
                                            </View>
                                        }

                                      keyExtractor={item=>item.email}

                            />

                        </ScrollView>
                </SafeAreaView>
        )
    }
}


export default UsersDetail;