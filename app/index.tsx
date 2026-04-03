import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

function HomeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const pressMe = () => {
    alert("Button Pressed..!!");
  };

  const onPressFunction = () => {
    alert("Text Pressed..!!");
  };

  type ItemProps = {
    title: string;
  };

  const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bdsk6-145571e29d72",
      title: "Fourth Item",
    },
  ];
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello..! Home Screen</Text>
      <Button title="Click Me" onPress={pressMe} />

      <Switch
        trackColor={{ false: "#767577", true: "#c3f0d9" }}
        thumbColor={isEnabled ? "#25d366" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        value={isEnabled}
        onValueChange={toggleSwitch}
      />

      <Pressable onPress={onPressFunction}>
        <Text>I'm pressable!</Text>
      </Pressable>

      <Image
        style={{
          height: 150,
          width: 150,
        }}
        source={require("../assets/images/google.png")}
      />

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;
