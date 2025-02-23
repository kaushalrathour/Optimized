import { LogBox, View } from "react-native";
import NavigationContainer from "./NavigationContainer";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { useEffect } from "react";

export default function App ():React.JSX.Element {
  useEffect(()=>{
    LogBox.ignoreAllLogs()
  },[])
  return(
    <Provider store={store}>
      <NavigationContainer/>
    </Provider>
  )
}