import { ThemeProvider } from "styled-components"
import './App.css';
import { Container } from "./components/styles/Container.styled"
import Header from "./components/Header"
import Card from "./components/Card"
import SetAll from "./components/styles/SetAll"
import content from "./content.js"

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}

function App() {
  return (

    <ThemeProvider theme={theme}>
      <>
        <SetAll />
        <Header />
        <Container>
          {content.map((item, index)=> (
             <Card key={index} item={item}>{item.title}</Card>
             ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
