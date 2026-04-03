import { useState } from "react";
import { Button, Pressable, Switch, Text, View, Image } from "react-native";

function HomeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const pressMe = () => {
    alert("Button Pressed..!!");
  };

  const onPressFunction = () => {
      alert("Text Pressed..!!");
    };
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
        source={require('../assets/images/google.png')}
      />
    </View>
  );
}

export default HomeScreen;
