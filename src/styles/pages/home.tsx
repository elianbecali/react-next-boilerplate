import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  color: #e86baf;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.3rem;
    color: #ffffff;

    a {
      transition: color 0.3s;
      &:hover {
        color: #e86baf;
      }
    }
  }
`;
