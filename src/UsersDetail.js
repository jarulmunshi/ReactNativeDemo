import React,{Component} from 'react';
import {Text,FlatList,View,Image,ScrollView} from 'react-native';
import axios from 'axios';
import {Card} from './component/Common';
class UsersDetail extends Component{
    static navigationOptions = {
        title: 'User Information'
    };
    state={
        users:[]
    };
    componentWillMount=()=>{
        axios.get('http://localhost:3000/').then((res)=>{
            console.log("Demo");
            const users=res.data;
            this.setState({users});
        }).catch((err)=>{
            alert(err)});
    };
    render(){
        const {textStyle,viewstyle} = styles;
        return(
            <ScrollView>
                <FlatList
                          data={this.state.users}
                          renderItem={({item})=>
                            <Card>
                                <View style={viewstyle} >
                                     <View style={{flex:1}}>
                                        <Text style={textStyle}>{item.name}</Text>
                                        <Text style={textStyle}>{item.age}</Text>
                                        <Text style={textStyle}>{item.email}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        {/*<Image source={{uri:item.imageName}} style={{height:150,width:200}} />*/}
                                    </View>
                                   </View>
                            </Card>
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
}
export default UsersDetail;