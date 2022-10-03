import styled from "styled-components";
import { IProduct } from "../types/Product";

function Product({ _id, name, imgUrl }: IProduct) {
  return (
    <Container key={_id}>
      {name} <img width={200} height={200} src={imgUrl} />
    </Container>
  );
}

export default Product;

const Container = styled.div`
  border-radius: 16;
  border: 1px solid black;
`;
