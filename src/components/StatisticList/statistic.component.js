import styled from 'styled-components';

const List = styled.ul`
text-align: left;
width: 250px;
margin: 0 auto;
& li:not(:last-child) {
margin-bottom: 10px;
}
`;
List.Container = styled.div`
text-align: center;
& h2 {
    margin: 20px 0;
}
`;
export default List;