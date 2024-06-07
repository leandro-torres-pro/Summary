import { View, Text, FlatList, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../../api';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function Summary() {
  const [selectId, setSelectId]=useState();
  const [Summary,setSummary]=useState([]);
  useEffect(() => {
    api.get('/resumo').then(response => {
        console.log("response",response);
        setSummary(response.data);
      })
      .catch(err => {
        console.error('opa! ocorreu um erro' + err);
      });
    

  },[]);

  
  const ButtonConfirm = (parameter) => {
    api.post('/resumoVoto/' + parameter + '/1').then(response => {
        setSummary(response.data);
        console.log("responsePost",response.data)
      })
      .catch(err => {
        console.error('Opa deu erro no post' + err);
      });
  };


  return (
    <View style={styles.ScreenAplication}>

      <View style={styles.TitleAplication}>
      <Text style={styles.heading}>Summary</Text>
      </View>

      <View style={styles.ListSummary}>
      <FlatList
          data={Summary}
          ma
          renderItem={({item, index})=>(

            item.resumo === null ?<></>:(

            <TouchableOpacity style={styles.listSummary}
              onPress={()=>{setSelectId(Summary.id)}}>
              <View style={Summary.id === selectId? styles.selectId: styles.selectIdselect}>
                <Text style={styles.title}>
                {item.resumo}
              </Text>
              <Text style={styles.authors}>
                {item.autores}
              </Text>
              </View>
              
            </TouchableOpacity>

            ))}
        />
      </View>

      <View style={styles.Button}>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>{ButtonConfirm()}}>
          <Text style={styles.TextButton}>Comfimar Voto</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ScreenAplication:{
    backgroundColor:'#ADD8E6',
  },
  TitleAplication:{
    backgroundColor:'#87CEEB',
    padding:20,
    paddingTop:30,
  },
  heading:{
    fontSize:20,
  },
  ListSummary:{
    backgroundColor:'#00CED1',
    padding:15,
    borderRadius:15,
    marginBottom:15,
    marginRight:20,
    display:'flex',
    flexDirection:'row',
  },
  Button:{
    backgroundColor:'#87CEEB',
  },
  TouchableOpacity:{
    alignItems:'center',
    display:'flex',
    height:40,
    borderRadius:15,
    marginBottom:15,
  },
  selectId:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  selectIdselect:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

})