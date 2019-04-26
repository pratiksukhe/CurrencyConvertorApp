import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';


const currencyPerRupee = {
  DOLLAR: 0.014, 
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANBOLLAR: 0.019,
  YEN: 1.54,
  DINAR:0.0043,
  BITCOIN: 0.0000041
}


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }
  buttonPressed = currency => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter some value..");
    }

    let result =  parseFloat(this.state.inputValue) * currencyPerRupee[currency]

    this.setState({resultValue: result.toFixed(2)});
  }

  render() {
    return (

      <SafeAreaView style={styles.container}>
        <View style = {styles.screenview}>
          <View style = {styles.resultcontainer}>
            <Text style= {styles.resultValue}>
              {this.state.resultValue}
            </Text>
          </View>
          <View style={styles.inputcontainer}>
            <TextInput
            style={styles.input}
            selectionColor ="#FFF"
            keyboardType = "numeric"
            placeholder = "Enter Value"
            //value= {this.state.inputValue}
            onChangeText = { inputValue => 
              this.setState({
               inputValue   
            }) }
            />
          </View>

          <View>
              <View style = {styles.coverterbuttoncontainer}>
                <TouchableOpacity onPress = {() => this.buttonPressed("DOLLAR")}
                                   style = {styles.converterbutton} >
                    <Text style={styles.conerterbuttontext}>$</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => this.buttonPressed("EURO")}
                                   style = {styles.converterbutton} >
                    <Text style={styles.conerterbuttontext}>EURO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => this.buttonPressed("POUND")}
                                   style = {styles.converterbutton} >
                    <Text style={styles.conerterbuttontext}>POUND</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => this.buttonPressed("RUBEL")}
                                   style = {styles.converterbutton} >
                    <Text style={styles.conerterbuttontext}>RUBEL</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => this.buttonPressed("AUSDOllAR")}
                                   style = {styles.converterbutton} >
                    <Text style={styles.conerterbuttontext}>AUSDOLLAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => this.buttonPressed("CANBOLLAR")}
                                   style = {styles.converterbutton} >
                    <Text style={styles.conerterbuttontext}>CANBOLLAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => this.buttonPressed("YEN")}
                                   style = {styles.converterbutton} >
                    <Text style={styles.conerterbuttontext}>YEN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => this.buttonPressed("DINAR")}
                                   style = {styles.converterbutton} >
                    <Text style={styles.conerterbuttontext}>DINAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => this.buttonPressed("BITCOIN")}
                                   style = {styles.converterbutton} >
                    <Text style={styles.conerterbuttontext}>BITCOIN</Text>
                </TouchableOpacity>
                
              </View>

          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    marginTop: 20
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  screenview: {
    flex: 1,

  },
  resultcontainer: {
    height: 70,
    justifyContent: "center",
    marginTop: 20,
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 4
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF"
  },
  inputcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FAC42F",
    borderWidth: 2,
    backgroundColor: "#758AA2"

  },
  input: {
    color: "#FFF",
    fontSize: 30
  },
  coverterbuttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "#c1c1c1",
    borderWidth: 4,
    marginTop: 20
  },
  converterbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A3D62",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%"
  },

  conerterbuttontext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: "bold"
  }
});
