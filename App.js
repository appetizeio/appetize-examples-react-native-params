import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, Alert } from 'react-native'
import { getItem, storeItem } from './src/store/LocalStorage';
import SharedPreferences from 'react-native-shared-preferences';

export default class App extends Component {

  constructor(props) {
    super(props)
    {
      this.state = { keys: [], DATA: [] }
    }
  }


  componentDidMount() {
    SharedPreferences.setName("prefs.db");
    //console.log('SP name '+SharedPreferences.getName());
    // SharedPreferences.getItem("isAppetize", function (value) {
    //   //console.log("RN isAppetize = ");
    //   //console.log(value);
    // });

    var self = this;

    var DATA = [];
    SharedPreferences.getAll(function (values) {
      console.log(values.length);
      values.forEach(value => {
        //if (value[0] !="isAppetize")
          DATA.push({ id: value[0], title: value[1] });
      });

      self.setState({ DATA });
    });

  }




  getHeader() {
    return <View style={{ flexDirection: 'row', padding: 0, marginBottom: -1, borderWidth: 0, borderColor: 'black' }}>
      <Text style={{ fontSize: 14, textAlign: 'center', width: '40%', padding: 10, fontWeight: 'bold' }}>Key</Text>
      <Text style={{ fontSize: 14, textAlign: 'center', width: '60%', padding: 10, fontWeight: 'bold' }}>Value</Text>
    </View>
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16 }}> Simple Shared Prefs </Text>
          <FlatList
            style={{ width: '80%', marginTop: 20 }}
            data={this.state.DATA}
            keyExtractor={item => item.id}
            ListHeaderComponent={this.getHeader()}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', borderColor: 'black', borderTopWidth: 0.5, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 0.5 }}>
                <Text style={{ fontSize: 14, textAlign: 'center', width: '40%', padding: 10, color: 'grey' }}>{item.id}</Text>
                <View style={{ width: 1, backgroundColor: 'black' }} />

                <Text style={{ fontSize: 14, textAlign: 'center', width: '60%', padding: 10, color: 'grey' }}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    )
  }
}