import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Flex() {
      return (
            <View style={styles.container}>
                  <View style={{ flex: 3, backgroundColor: "red" }} />
                  <View style={{ flex: 3, backgroundColor: "yellow" }} />
                  <View style={{ flex: 3, backgroundColor: "blue" }} />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1
      }
});
