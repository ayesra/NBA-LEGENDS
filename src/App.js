import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <CardContainer />
    </Container>
  );
}

export default App;