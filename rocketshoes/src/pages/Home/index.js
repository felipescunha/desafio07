import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartAction from '../../store/modules/cart/actions';

import {
  Container,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductButton,
  BoxAmount,
  ProductAmountText,
  ProductList,
  ProductView,
  TextButton,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const result = response.data.map(product => ({
      ...product,
      priceFormated: Number(product.price).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    }));

    this.setState({ products: result });
  }

  handleAddProduct = product => {
    const { navigation, addToCart } = this.props;

    addToCart(product);

    navigation.navigate('Cart', { product });
  };

  render() {
    const { products } = this.state;
    // const { amount } = this.props;
    return (
      <Container>
        <ProductList
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => {
            return (
              <ProductView>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                <ProductButton onPress={() => this.handleAddProduct(item.id)}>
                  <BoxAmount>
                    <Icon
                      name="add-shopping-cart"
                      color="#FFF"
                      size={20}
                      padding={10}
                    />
                    <ProductAmountText>
                      0{/* {amount[item.id] || 0} */}
                    </ProductAmountText>
                  </BoxAmount>
                  <TextButton color="#fff">ADICIONAR</TextButton>
                </ProductButton>
              </ProductView>
            );
          }}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);
export default connect(null, mapDispatchToProps)(Home);
