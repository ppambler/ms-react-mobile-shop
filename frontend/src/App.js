import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-3">
          <h1>Hello World</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
