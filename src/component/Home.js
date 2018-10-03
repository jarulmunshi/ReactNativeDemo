import React,{Component} from 'react';
import {Text,Image,View} from 'react-native';
import {CardSection,Button,Input,Header} from './Common/Common';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../Helper/styles/Style';
class Home extends Component{
    constructor(props){
        super(props);
        this.props={
            name:'',
            nameError:'',
            email:'',
            emailError:'',
            password:'',
            passwordError:'',
            age:'',
            ageError:'',
            iconError:'',
            image:''
        }
    }
    // imageSelection=()=>{
    //     ImagePicker.openPicker({
    //        multiple:true
    //     }).then(image=>{
    //          const data = new FormData();
    //        //  console.log(image[0]);
    //         data.append('image',image[0]);
    //        //  //§§§console.log(data);
    //        // data.append('image',{
    //        //      uri:image[0]['path'],
    //        //      name:image[0]['filename'],
    //        //      type:image[0]['mime']
    //        // });
    //         //console.log(data);
    //         debugger;
    //         //alert(image[0]["filename"]);
    //         //console.log(image);
    //         this.props.onChange(data,'image');
    //     })
    // };
    render(){
        //debugger;
        return(
            <View>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.props.onChange(value,'name')}
                            placeholder="Name"
                            label="Name"
                            value={this.props.name}
                        />
                        <Text style={styles.textStyle}><Icon name={this.props.iconError} size={15}/>{this.props.nameError}</Text>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.props.onChange(value,'email')}
                            placeholder="Email"
                            label="Email"
                            value={this.props.email}
                        />
                        <Text style={styles.textStyle}><Icon name={this.props.iconError} size={15}/>{this.props.emailError}</Text>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.props.onChange(value,'password')}
                            secureTextEntry={true}
                            placeholder="Password"
                            label="Password"
                            value={this.props.password}
                        />
                        <Text style={styles.textStyle}><Icon name={this.props.iconError} size={15}/>{this.props.passwordError}</Text>
                    </CardSection>
                    <CardSection>
                        <Input
                            onChange={(value)=>this.props.onChange(value,'age')}
                            placeholder="Age"
                            label="Age"
                            value={this.props.age}
                        />
                        <Text style={styles.textStyle}><Icon name={this.props.iconError} size={15}/>{this.props.ageError}</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.headStyle}>Profile Pic</Text>
                        <Button onPress={(value)=>{this.props.imageSelection(value,'image')}}> Select Image</Button>
                        {/*<Image source={{uri:this.props.image}} style={{height:40,width:50}}></Image>*/}
                        {/*<Text>{this.props.image}</Text>*/}
                    </CardSection>
            </View>

        )
    }
}
export default Home;
