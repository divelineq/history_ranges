import styled from "styled-components";
import { HistoryRanges } from "./components";

const Container = styled.div`
  width: 70%;
  min-height: 100vh;
  margin: 0 auto;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function App() {
	return (
		<Container>
			<HistoryRanges />
		</Container>
	);
}

export default App;
