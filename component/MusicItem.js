import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

/*const { width, height } = Dimensions.get("window");*/

const MusicItem = (props, { item }) => {
  const navigatetoDetail = useCallback(() => {
    props.functiontoNavigate();
  }, [item]);

  return (
    <TouchableOpacity onPress={navigatetoDetail}>
      <View style={styles.cardView}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: props.item.artworkUrl100 }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.name}> {props.item.trackName} </Text>
          <Text style={styles.artistname}> {props.item.artistName} </Text>
          <Text style={styles.collname}> {props.item.primaryGenreName} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  /*cardView: {*/
    flex: 1,
    /*width: Dimensions.get("window").width,*/
    /*flexDirection: "row",*/
    /*paddingHorizontal: 12,*/
    /*borderStyle: "solid",*/
    /*backgroundColor: "#FAFFFA",*/
    margin: width * 0.04,
    borderRadius: width * 0.05,
    shadowColor: "black",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  /*imgContainer: {
    flex: 0,
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },*/
  /*imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  itemInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },*/
  /*name: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  artistname: {
    color: "#696969",
    fontSize: 18,
  },
  collname: {
    fontSize: 16,
    color: "blue",
  },*/
);
export default MusicItem;

