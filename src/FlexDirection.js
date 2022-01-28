import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlexDirection() {
      return (
            <View style={styles.container}>
                  <View style={[styles.box, styles.box1]} />
                  <View style={[styles.box, styles.box2]} />
                  <View style={[styles.box, styles.box3]} />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            flexDirection:"row",
            justifyContent:"space-between"
            
      },
      box: {
            width: 60,
            height: 60,
      },
      box1: {
            backgroundColor: "red"

      },
      box2: {
            backgroundColor: "yellow"
      },
      box3: {
            backgroundColor: "blue"
      }

});
