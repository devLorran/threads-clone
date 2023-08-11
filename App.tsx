import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  return(
    <>
    <StatusBar style="light"/>
    <BottomSheetModalProvider>
      <Routes />
    </BottomSheetModalProvider>
    </>
  );
}
