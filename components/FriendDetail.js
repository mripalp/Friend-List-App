import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FriendDetailScreen = ({ route }) => {
  const { friend } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={friend.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <FontAwesome5
            name="user"
            size={18}
            color="#333"
            style={styles.icon}
          />
          <Text style={styles.infoText}>{friend.name}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <FontAwesome5
            name="calendar-alt"
            size={18}
            color="#333"
            style={styles.icon}
          />
          <Text style={styles.infoText}>{friend.birthdate}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <FontAwesome5
            name="map-marker-alt"
            size={18}
            color="#333"
            style={styles.icon}
          />
          <Text style={styles.infoText}>{friend.address}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <FontAwesome5
            name="phone"
            size={18}
            color="#333"
            style={styles.icon}
          />
          <Text style={styles.infoText}>{friend.phone}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <FontAwesome5
            name="heart"
            size={18}
            color="#333"
            style={styles.icon}
          />
          <Text style={styles.infoText}>{friend.hobbies}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  infoContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 18,
    color: "#333",
  },
  backButton: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FriendDetailScreen;
