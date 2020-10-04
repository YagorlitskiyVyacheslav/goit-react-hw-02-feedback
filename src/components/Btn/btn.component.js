import styled from 'styled-components';


const Button = styled.button`
  background-color: #555555;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  padding: 15px 15px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
Button.Container = styled.div`
text-align: center;
& h2 {
  margin: 20px 0;
}
`;
export default Button;