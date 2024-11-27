import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

import api from "./src/services/api";

import Filmes from "./src/components/Filmes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [filmes, setFilmes] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      // Faz a requisição
      const resposta = await api.get("r-api/?api=filmes");

      // console.log(resposta.data)
      setFilmes(resposta.data);

      setLoading(false);
    }

    loadFilmes();
  }, []);

  // Se loading === true, exibe o activity indicator
  if (loading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator color="#121212" size={65} />
      </View>
    );

    // Se não exibe o app
  } else {
    return (
      <View style={st.container}>
        <StatusBar style="dark" backgroundColor="#09a6ff" />

        <FlatList
          data={filmes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Filmes data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const st = StyleSheet.create({
  container: {
    flex: 1,
  },
});
