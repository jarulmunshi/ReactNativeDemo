import React,{Component} from 'react';
import {Text,FlatList,View,Image,ScrollView,TouchableHighlight} from 'react-native';
import {getUsers,removeUser} from './FunctionCall/Call'
import {Card,Button} from './component/Common';
import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
class UsersDetail extends Component{
    constructor(props){
        //debugger;
        //console.log(props);
        super(props);
    }
    static navigationOptions = {
        title: 'User Information'
    };
    state={
        users:[],
        name:'',
        hide:true
    };
    componentWillMount=()=>{
        getUsers().then((res)=>{
            console.log("Demo");
            const users=res.data;
            this.setState({users});
        }).catch((err)=>{
            alert(err)});
    };
    componentDidMount=()=>{
        getUsers().then((res)=>{
            const users=res.data;
            this.setState({users});
        }).catch((err)=>{
            alert(err)});
    }
    removeData=(name)=>{
        const data={
            name:name
        };
        //alert(name);
        removeUser(data).then((res)=>{
            getUsers();
        }).catch((err)=>{
            alert(err);
        })
    };
    render(){

        const {textStyle,viewstyle,buttonStyle} = styles;
        return(
            <ScrollView style={{backgroundColor:'white'}}>
                <SwipeableFlatList
                          data={this.state.users}
                          renderItem={({item})=>
                                    <View style={{height:50,marginTop:20}}>
                                            <View style={viewstyle} >
                                                 <View style={{flex:1}}>
                                                        <Text style={textStyle}>{item.name}</Text>
                                                        {this.state.hide?null:<Text style={textStyle}>{item.age}</Text>
                                                        }
                                                </View>
                                            </View>
                                    </View>
                                }
                            renderRight={({item})=>
                                <View style={{width:120,flexDirection:'row'}}>
                                    <View style={{paddingRight:10}}>
                                        <TouchableHighlight
                                            style={[buttonStyle,{backgroundColor:'blue'}]}
                                            onPress={()=>{this.props.navigation.navigate('EditUser',{item})}}>
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

        )
    }
}

const styles={
    textStyle:{
        fontSize:20,
        paddingLeft:5,
        paddingRight:25,
    },
    viewstyle:{
        flexDirection:'row',
        flex:1
    },
    buttonStyle:{
        width:50,
        height:50,
        backgroundColor:'red',
        justifyContent:'center',
        borderRadius:5
    }
};
export default UsersDetail;