import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #171720;
`;
export const StyleBox = styled.View`
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  height: 400px;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
  padding: 20px;
`;

export const ProductView = styled.View``;

export const ProductBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80;
  height: 80;
`;

export const DescriptionBox = styled.View``;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  padding-top: 5px;
  font-weight: bold;
  font-size: 16px;
`;
export const BoxAmountSubTotal = styled.View`
  flex-direction: row;
  background: #f2f2f2;
  border-radius: 4px;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  padding: 10px;
`;
export const AmountNumberBox = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;
export const NumberAmountView = styled.View`
  background: #fff;
  width: 45px;
  height: 25px;
  border-radius: 4px;
  justify-content: center;
  margin: 0 5px;
`;

export const NumberAmount = styled.Text`
  font-size: 16px;
  align-self: center;
`;

export const SubTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const TextTotal = styled.Text`
  padding-top: 25px;
  color: #999999;
  align-self: center;
  font-weight: bold;
  font-size: 16px;
`;

export const ProductTotal = styled.Text`
  align-self: center;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 25px;
`;

export const OrderButton = styled.TouchableOpacity`
  background: #7159c1;
  align-items: center;
  border-radius: 4px;
  padding: 15px 91px;
`;

export const TextOrderButton = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;
