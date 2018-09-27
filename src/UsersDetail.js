import React,{Component} from 'react';
import {Text,FlatList,View,Image,ScrollView,TouchableHighlight} from 'react-native';
import {getUsers,removeUser} from './FunctionCall/Call'
import {Card,Button} from './component/Common';
import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
class UsersDetail extends Component{
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
    removeData=(name)=>{
        const data={
            name:name
        };
        //alert(name);
        removeUser(data).then((res)=>{
            alert("Removed");
        }).catch((err)=>{
            alert(err);
        })
    }
    render(){

        const {textStyle,viewstyle} = styles;
        return(
            <ScrollView>
                <SwipeableFlatList
                          data={this.state.users}
                          renderItem={({item})=>
                                    <View style={{height:100}}>
                                            <View style={viewstyle} >
                                                 <View style={{flex:1}}>
                                                    {/*<TouchableHighlight onPress={()=>{*/}
                                                        {/*if(this.state.hide){*/}
                                                             {/*this.setState({hide:false})*/}
                                                        {/*}*/}
                                                        {/*else {*/}
                                                             {/*this.setState({hide:true})*/}
                                                        {/*}*/}
                                                       {/*}}>*/}
                                                        <Text style={textStyle} onPress={()=>{this.setState({name:item.name});
                                                        alert(this.state.name)}}>{item.name}</Text>
                                                    {/*</TouchableHighlight>*/}
                                                        {/*{this.state.hide?null:<Text style={textStyle}>{item.age}</Text>*/}
                                                        {/*}*/}
                                                </View>
                                                <View>
                                                    {/*<Button style={{height:50,width:50}} onPress={()=>alert()}>Delete</Button>*/}
                                                    {/*<Image source={{uri:item.imageName}} style={{height:150,width:200}} />*/}
                                                </View>
                                            </View>
                                    </View>
                                }
                            renderRight={({item})=>
                                <TouchableHighlight
                                style={{width:100,height:50,backgroundColor:'red',justifyContent:'center'}}
                                 onPress={()=>this.removeData(item.name)}>
                                    <Text style={{color:'white',alignSelf:'center'}}>Delete</Text>
                                </TouchableHighlight>

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
        paddingBottom:5,
        paddingTop:5
    },
    viewstyle:{
        flexDirection:'row',
        flex:1
    }
};
export default UsersDetail;