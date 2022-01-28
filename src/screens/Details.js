import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Cards from '../components/Cards';

export default function Details({ route }) {
      const item = route.params.recipeItem;
      const { name, imageURL, ingredients, steps } = item;
      console.log(item)
      return (
            <ScrollView>
                  <Image style={{ height: 300, width: "100%", margin: 10 }} source={{ uri: imageURL }} />
                  <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>Ingredients</Text>
                  </View>
                  <Cards customStyle={{ flex: 1, margin: 10, padding: 20 }}>
                        {
                              ingredients.map((ingredient, index) => {
                                    return (
                                          <View key={ingredient.name}>
                                                <Text>{`-${ingredient.quantity} - ${ingredient.name}- ${ingredient.type}`}</Text>

                                          </View>

                                    )


                              })
                        }



                  </Cards>
                  <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>Step By Step Recipe</Text>
                  </View>
                  <Cards customStyle={{ flex: 1, margin: 10, padding: 20 }}>
                        {
                              steps.map((step, index) => {
                                    return (
                                          <View key={step}>
                                                <Text>{`-${step}`}</Text>

                                          </View>

                                    )


                              })
                        }



                  </Cards>
            </ScrollView>
      );
}

const styles = StyleSheet.create({});
