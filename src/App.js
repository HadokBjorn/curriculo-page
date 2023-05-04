import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import SessionAbout from "./components/SessionAbout";


function App() {
  return (
    <PageContainer>
    <Sidebar/>
    <SessionAbout/>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  width: 100%;
  display: flex;
  background-color: #e5e5e5;

  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export default App;
