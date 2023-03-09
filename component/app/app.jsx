import { Container } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import { Navbar, Main, Search, Channel } from "../../contants/";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Container>
  );
};

export default App;
