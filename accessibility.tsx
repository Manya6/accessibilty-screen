// AccessibilityScreen - submitted for peer code review

import { Button } from '@react-navigation/elements';
import {useState} from 'react';
import { Text, View, StyleSheet, Pressable, TextInput, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from "react-native-gesture-handler";
export default function AccessibilityScreen() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Accessibility Hub</Text>
      <Text style={styles.text1}>Find and book resources according to your needs.</Text>
      <View style={styles.divider} />
      <Text style={styles.smallTitle}>Accessibility Mode</Text>
      <Text style={styles.text3}>Choose your accessibility preferences:</Text>
      <Text style={styles.text2}>Step-Free routes</Text>
      <Text style={styles.text2}>Close parking preference</Text>
      <Text style={styles.text2}>Hearing loop required</Text>
      <Text style={styles.text2}>Adjustable desk</Text>
      <Text style={styles.text2}>Wheelchair accessible equipment</Text>
      <View style={styles.divider} />
      <Text style={styles.text3}>Accessible Resources Overview:</Text>
      <View style={styles.grid}>
      <Text style={styles.text2}>Step-Free routes</Text>
      <Text style={styles.text4}>5 Available</Text>
      <Text style={styles.text2}>Close parking preference</Text>
      <Text style={styles.text4}>2 Available</Text>
      <Text style={styles.text2}>Hearing loop required</Text>
      <Text style={styles.text4}>3 Available</Text>
      <Text style={styles.text2}>Adjustable desk</Text>
      <Text style={styles.text4}>1 Available</Text>
      <Text style={styles.text2}>Wheelchair accessible equipment</Text>
      <Text style={styles.text4}>4 Available</Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.text3}>Recommended For You:</Text>
      <View style={styles.resourceCard}>
        <Text style={styles.resourceTitle}>Study Room 3</Text>
        <Text>Adjustable desk • Automatic doors</Text>
      </View>
      <Pressable style = {styles.button}
      onPress={() => alert("Booking request sent")}
      >
      <Text style={styles.buttonText}>Book</Text>
      </Pressable>
      <View style={styles.resourceCard}>
        <Text style={styles.resourceTitle}>Parking Lot B</Text>
        <Text>5 spaces available</Text>
      </View>
      <Pressable style = {styles.button}
      onPress={() => alert("Booking request sent")}
      >
      <Text style={styles.buttonText}>Book</Text>
      </Pressable>

      <View style={styles.divider} />
      <View style={styles.reportSection}>
      <Text style={styles.title2}>Report Accessibility Issue</Text>

      <Text style={styles.text4}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={location}
        onChangeText={setLocation}
      />
      
      <Text style={styles.text4}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email address"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.text4}>Your SRN</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter SRN"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.text4}>Description</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Describe the issue"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <Pressable
        style={styles.button}
        onPress={() => alert("Accessibility issue submitted")}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  reportSection: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40,
    paddingHorizontal: 1,
  },
  text1: {
    color: '#000',
    fontSize: 20,
    textAlign: "left",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    marginTop: 5,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
  },
  button: {
    width: 100,
    height: 40,
    paddingHorizontal: 16,
    backgroundColor: "#3097E0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  title:{
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  title2:{
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  smallTitle:{
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  text2: {
    color: '#000',
    fontSize: 16,
    fontWeight: "semibold",
    textAlign: "left",
    paddingHorizontal: 15,
    paddingVertical: 2,
  },

  text3: {
    color: '#000',
    fontSize: 20,
    textAlign: "left",
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontWeight: "700",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  text4: {
    color: '#000',
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    paddingHorizontal: 15,
    paddingVertical: 2,
  },

  resourceCard: {
    backgroundColor: "#F5F7FA",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  
  resourceTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

});
