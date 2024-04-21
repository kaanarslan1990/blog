import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

export default function IndexScreen() {
  const { state, addBlogPost,deleteBlogPost } = useContext(Context);
  return (
    <View>
      {/* <Text>IndexScreen</Text> */}
      <Button title="Add" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
              <Feather name="trash-2" size={20} color="red" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderTopWidth:1,
    paddingHorizontal:10,
    paddingVertical:20,
    borderColor:'gray',
  },
  title:{
    fontSize:18,

  }
});
