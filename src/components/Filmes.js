import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import SinopseFilmes from "./SinopseFilmes";

export default function Filmes({ data }) {
  const [modal, setModal] = useState(false);

  function fecharModal() {
    setModal(false);
  }

  return (
    <View style={st.container}>
      <View style={st.card}>
        <Text style={st.titulo}>{data.nome}</Text>

        <Image source={{ uri: data.foto }} style={st.capa} />

        <View style={st.areaBotao}>
          <TouchableOpacity style={st.maisInfo} onPress={() => setModal(true)}>
            <Text style={st.textMoreInfo}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>

        <Modal
          visible={modal}
          animationType="slide"
          transparent={true}
          style={st.modal}
        >
          <SinopseFilmes fechar={fecharModal} filme={data} />
        </Modal>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dadada",
    paddingTop: 20
  },
  card: {
    backgroundColor: "#fff",
    margin: 15,
    elevation: 2,
    gap: 5,
    borderRadius: 8,
    paddingTop: 4,
    paddingBottom: 6,
  },
  capa: {
    height: 250,
    zIndex: 2,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  titulo: {
    textAlign: "center",
    fontSize: 18,
  },
  areaBotao: {
    alignItems: "flex-end",
    zIndex: 9,
    marginTop: -50,
  },
  maisInfo: {
    width: 100,
    backgroundColor: "#09a6ff",
    padding: 6,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  textMoreInfo: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
