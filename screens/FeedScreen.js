import React, {Component} from "react";
import{View,Text,StyleSheet,TouchableOpacity,Image, Button} from "react-native";
import{createSwitchNavigator} from "react-navigation";


export default class FeedScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}> Feed Screen </Text>
                     
                     <TouchableOpacity
                        onPress = {() => {
                            this.props.navigation.navigate("CreatePost")
                        }}
                     style = {styles.Button} >
                    
                        <Image source  = {require("./assets/Class 91 Image.jpg")}
                        style = {styles.Image}/>
                       

                       <TouchableOpacity
                            onPress = {() => {
                                this.props.navigation.navigate("Username.js")
                            }}
                            style = {styles.Button2}>

                                <Text style = {styles.Button2Text}> Please Enter Username Below</Text>
                            </TouchableOpacity>

                        <TouchableOpacity 
                            onPress = {() => {
                                this.props.navigation.navigate("ObjectName.js")
                            }}
                            style = {styles.Button3}>

                                <Text style = {styles.Button3Text}> Please Enter Name of Object Below</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress = {() => {
                                    this.prop.navigation.navigate("ObjectType.js")
                                }}
                                style = {styles.Button4}>

                                    <Text style = {styles.Button4Text}> Please Enter Type of Object Below</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress = {() => {
                                        this.props.navigation.navigate("Environment.js")
                                    }}
                                    style = {styles.Button5}>

                                        <Text style = {styles.Button5Text}> Please Enter if this Object can Harm the Environment Down Below</Text>
                                    </TouchableOpacity>
                     </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        marginTop: 20,
        fontSize: 35,
        color: "black",
        fontFamily: "Bubblegum-Sans",
        fontWeight: "bold"
    },
    Button: {
        marginTop: 70,
        height: 200,
        width: 600,
        justifyContent: 'center',
        textAlign: 'center'
    },
    Image: {
        marginLeft: 95,
        width: 600,
        height: 300,
    },
    Button2: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        textAlign: 'center'
    },
    Button2Text: {
        marginTop: 20,
        fontWeight: "bold",
        fontFamily: "Bubblegum-Sans",
        fontSize: 25,
        color: "black"
    },
    Button3: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        textAlign: 'center'
    },
    Button3Text: {
        marginTop: 20,
        fontWeight: "bold",
        fontFamily: "Bubblegum-Sans",
        fontSize: 25,
        color: "black"
    },
    Button4: {
        width: 200,
        height: 200,
        justifyContent: 'center'
    },
    Button4Text: {
        marginTop: 20,
        fontWeight: "bold",
        fontFamily: "Bubblegum-Sans",
        fontSize: 25,
        color: "black"
    },
    Button5: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        textAlign: 'center'
    },
    Button5Text: {
        marginTop: 20,
        fontWeight: "bold",
        fontFamily: "Bubblegum-Sans",
        fontSize: 25,
        color: "black"
    }

})