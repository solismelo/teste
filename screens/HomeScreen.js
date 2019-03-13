import React from "react";
import {
  FlatList,
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Modal from "react-native-modal";
import FormModal from "app/components/FormModal";

import { Icon } from "expo";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e286d"
  },
  headerButton: {
    marginHorizontal: 18
  },
  headerText: {
    color: "#fff"
  },
  flatlist: {
    height: "100%",
    margin: 20 // PIXEL RATIO??? <<<<==========
  },
  item: {
    alignItems: "center",
    flexBasis: 0,
    flexGrow: 1,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    height: 100, //PUT PIXEL RATIO!!!!!! <<=====================
    borderRadius: 4
  },
  emptyItem: {
    backgroundColor: "#4b5289"
  },
  deleteItem: {
    backgroundColor: "#4b5289"
  },
  mainItem: {
    backgroundColor: "#75f1c1"
  },
  editItem: {
    backgroundColor: "transparent",
    borderColor: "#4b5289",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 1
  },
  mainText: {
    fontWeight: "bold",
    color: "#1e286d",
    fontSize: 11
  },
  text: {
    color: "#333333",
    fontSize: 14
  },
  deleteText: {
    marginTop: 10,
    marginBottom: 0,
    color: "#fff",
    fontSize: 12
  },
  modal: {
    flex: 1,
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#fff"
  },
  modalText: {
    textAlign: "center",
    fontSize: 20
  }
});

const getIconItemState = name => {
  return !!name ? (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 24
      }}
    >
      <Icon.Ionicons name="ios-close-circle" size={26} color="#e9517e" />
      <Text
        style={[styles.text, styles.deleteText]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {name}
      </Text>
    </View>
  ) : (
    <Icon.Ionicons name="md-add" size={26} color="#fff" />
  );
};

const getItemState = name => {
  return !!name ? (
    <View style={[styles.mainItem, styles.item]}>
      <Text style={[styles.text, styles.mainText]}>{name}</Text>
    </View>
  ) : (
    <View style={[styles.emptyItem, styles.item]} />
  );
};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "COMPANY NAME",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontSize: 16
    },
    headerLeft: (
      <Icon.Ionicons
        name="md-menu"
        size={26}
        style={styles.headerButton}
        color="#fff"
      />
    ),
    headerRight: (
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => alert("info")}
      >
        <Text style={styles.headerText}>Edit</Text>
      </TouchableOpacity>
    )
  };

  state = {
    data: [
      { id: "00", name: "" },
      { id: "01", name: "PANCAAAKE" },
      { id: "02", name: "" },
      { id: "03", name: "" },
      { id: "04", name: "FRIDAYYY" },
      { id: "05", name: "JASOOOON" },
      { id: "06", name: "" },
      { id: "07", name: "" },
      { id: "08", name: "" },
      { id: "09", name: "" },
      { id: "10", name: "" },
      { id: "11", name: "" }
    ],
    editing: true,
    isModalVisible: false
  };

  toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  modalComponent = () => (
    <Modal isVisible={this.state.isModalVisible}>
      <View style={styles.modal}>
        <Text style={styles.modalText}>Add a content to item!</Text>
        <TouchableOpacity onPress={this.toggleModal}>
          <Text>Hide me!</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  render() {
    const columns = 3;
    const { editing, isModalVisible } = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {this.modalComponent()}
          <FlatList
            data={this.state.data}
            style={styles.flatlist}
            keyExtractor={item => item.id}
            numColumns={columns}
            renderItem={({ item, index }) => {
              if (editing) {
                return (
                  <TouchableOpacity
                    style={[
                      item.name ? styles.deleteItem : styles.editItem,
                      styles.item
                    ]}
                    onPress={() => this.toggleModal()}
                  >
                    {getIconItemState(item.name)}
                  </TouchableOpacity>
                );
              }
              return getItemState(item.name);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
