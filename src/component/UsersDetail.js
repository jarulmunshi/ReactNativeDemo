import React,{Component} from 'react';
import {Text,FlatList,View,Image,ScrollView,TouchableHighlight,Alert} from 'react-native';
import {getUsers,removeUser} from '../FunctionCall/Call'
import {userStyles,imageStyles} from '../Helper/styles/Style';
import {Header} from './Common/Common';
import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
class UsersDetail extends Component{
    constructor(props){
        super(props);
        //console.log(props);
        this.displayUser();
    }
    static navigationOptions = {
        title: 'User Information'
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
            <ScrollView style={{backgroundColor:'white'}}>
                <Image source={require('./../images/imgUser.jpeg')} size={70} style={imageStyles.imgStyle}/>
                <Header headerText="User Information" headIcon="info-circle"></Header>
                <SwipeableFlatList
                          data={this.state.users}
                          renderItem={({item})=>
                                    <View style={{height:this.state.height,marginTop:20}}>
                                            <View style={viewstyle} >
                                                 <View style={{flex:1}}>
                                                        <TouchableHighlight onPress={()=>{
                                                            if(this.state.hide){
                                                                this.setState({hide:false,height:50});
                                                            }
                                                            else {
                                                                this.setState({hide:true,height:80});
                                                            }
                                                            }}>
                                                             <Text style={textStyle}>{item.name}</Text>
                                                        </TouchableHighlight>
                                                        {this.state.hide?
                                                        (<View><Text style={textStyle}>{item.age}</Text>
                                                           <Text style={textStyle}>{item.email}</Text></View>
                                                        ):null}

                                                </View>
                                            </View>
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

        )
    }
}


export default UsersDetail;