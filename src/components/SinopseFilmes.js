import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function SinopseFilmes(props) {
  return (
    <View style={st.container}>
      <View style={st.modal}>
        <TouchableOpacity onPress={props.fechar} style={st.backBtn}>
          <Text style={{ color: "#fff", fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>Voltar</Text>
        </TouchableOpacity>

        <Text style={st.titulo}>{props.filme.nome}</Text>
        <Text style={st.sinopse}>Sinopse: </Text>
        <Text style={st.descricao}>{props.filme.sinopse}</Text>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modal:{
    height: '70%',
    backgroundColor: '#121212',
    width: '92%',
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    elevation: 10
  },
  backBtn:{
    backgroundColor: '#DC3545',
    marginTop: 6, 
    width: '50%',
    borderRadius: 4,
    alignSelf: 'center',
    padding: 6
  },
  titulo:{
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  sinopse:{
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10
  },
  descricao:{
    color: '#fff',
    marginLeft: 10,
    marginRight: 10
  }
});
