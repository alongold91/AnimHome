import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import "./App.css";

function App() {
  return (
    <>
      <Autocomplete classNames={{
       popoverContent: 'bg-background-primary'
      }} label="Select an animal" className="max-w-xs">
        <AutocompleteItem key={"key"} value={"shlomi"}>
          dori
        </AutocompleteItem>
      </Autocomplete>
    </>
  );
}

export default App;
