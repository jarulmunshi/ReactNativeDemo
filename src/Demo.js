import React,{Component} from 'react';
import {Text,FlatList,View,Image,ScrollView,TouchableHighlight} from 'react-native';
import {Card} from './component/Common/Common';
import SwipeOut from 'react-native-swipeout';
class Demo extends Component {
    render() {
        var swipeBtns = [
            {
                text: 'Button'
            }
        ]
        const {textStyle, viewstyle} = styles;
        return (
            <ScrollView>
                <Text>Hello</Text>
                <FlatList
                    data={[
                        {key:'Jarul'},
                        {key:'Juhi'},
                        {key:'Yash'}
                    ]}
                    renderItem={({item})=>{
                            <TouchableHighlight>
                                <Text>{item.key}</Text>
                            </TouchableHighlight>

                    }}
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
        flex:1,
        marginTop:70
    }
};
export default Demo;