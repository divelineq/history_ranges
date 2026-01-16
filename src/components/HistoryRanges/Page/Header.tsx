import styled from "styled-components";

const Container = styled.div`
  display: block;
  position: absolute;
  top: 200px;
  left: 0px;
  display: flex;
  gap: 80px;

  div {
    width: 4px;
    min-height: 100%;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  }

  h1 {
    margin: 0;
    font-size: 56px;
    white-space: pre-line;
  }

  @media (max-width: 768px) {
    padding: 24px;
    top: 50px;

    div {
      display: none;
    }

    h1 {
      font-size: 24px;
    }

  }
`;

function Header() {
	return (
		<Container>
			<div />
			<h1>
				Исторические
				<br /> даты
			</h1>
		</Container>
	);
}

export { Header };
