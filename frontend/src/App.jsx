import BasicContainer from '@mui/material/Container';
import BasicGrid from './components/Grid';
import DrawerAppBar from './components/NavBar';

function App() {

  return (
    <BasicContainer>
      <DrawerAppBar />
      <BasicGrid>
      </BasicGrid>
    </BasicContainer>
  );
}

export default App;
