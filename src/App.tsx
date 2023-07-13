import { Container } from "./components/container";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Main } from "./components/main";

export const App = () => (
  <Container>
    <Header />
    <Main />
    <Footer />
  </Container>
);
