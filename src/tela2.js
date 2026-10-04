import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const burgers = [
  {
    id: '1',
    nome: 'Smash Clássico',
    descricao: 'Pão brioche, blend bovino 100g, cheddar e molho especial.',
    preco: 'R$ 28,00',
    imagem: require('../assets/burger1.png'),
  },
  {
    id: '2',
    nome: 'Bacon Supremo',
    descricao: 'Duplo blend bovino, tiras de bacon crocante e anéis de cebola.',
    preco: 'R$ 38,50',
    imagem: require('../assets/burger2.png'),
  },
];

export default function Tela2() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.imagem} />
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{item.nome}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
        <View style={styles.footerCard}>
          <Text style={styles.preco}>{item.preco}</Text>
          <TouchableOpacity style={styles.botaoAdd}>
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={burgers}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', paddingTop: 15 },
  card: {
    flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 15, marginHorizontal: 15, marginBottom: 15, padding: 10, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4,
  },
  imagem: { width: 90, height: 90, borderRadius: 10 },
  infoContainer: { flex: 1, marginLeft: 15, justifyContent: 'center' },
  titulo: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  descricao: { fontSize: 12, color: '#666', marginTop: 4, marginBottom: 8 },
  footerCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  preco: { fontSize: 16, fontWeight: 'bold', color: '#D8B551' },
  botaoAdd: { backgroundColor: '#B84D3D', borderRadius: 20, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' },
  textoBotao: { color: '#FFF', fontWeight: 'bold', fontSize: 18, marginTop: -2 }
});