import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import './App.css';
import { Button } from './shadcn-components/ui/button';

function App() {
  return (
    <div className='bg-background-primary'>
    <Button className='bg-background-primary hover:bg-text-light hover:text-background-secondary' variant='outline'>Click me</Button>
    </div>
  );
}

export default App;
