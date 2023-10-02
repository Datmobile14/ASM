import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, View, Text, Image, ScrollView, SafeAreaView, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const banner = require('./assets/anhnengym.jpg');
const avatar = require('./assets/anhadm.jpg');

const MenuScreen = ({navigation}) => {
  return (
    
    <ScrollView style = {{flex: 1}}>
      <View style = {{borderBottomWidth: 1}}>
        <View>
          <Image source={banner} style = {{width: "100%", height: 250}}/>
        </View>
        <View>
          <Image source={avatar} style = {{width: 150, height: 150, borderRadius: 75, borderColor: 'blue', borderWidth: 2, position: 'absolute', top: -120, left: "20%", marginLeft: -75}}/>
        </View>
        <View>
          <Text style = {{fontSize: 20, fontWeight: 'bold', marginTop: 40, marginLeft: 30, paddingBottom: 10}}>ADMIN</Text>
        </View>
      </View>
        
        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', padding: 20, borderBottomWidth: 1, borderTopWidth: 1, marginTop: 5}}>
                <View style = {{ flexDirection: 'row', alignItems: 'center'}}>
                    <View style = {{width: 40, height: 40, borderColor: 'black', borderWidth: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
                        <Ionicons name = "people" size={20} color= 'black'/>
                    </View>       
                    <TouchableOpacity onPress={() => navigation.navigate('NewPost')} style={{ marginLeft: 10 }}>
                        <Text>Bạn đang nghĩ gì?</Text>
                    </TouchableOpacity>      
                </View>
                <Ionicons name = "images" size={20} style = {{paddingEnd: 20}}/>
            </View>
    </ScrollView>
  );
};

export default MenuScreen;
