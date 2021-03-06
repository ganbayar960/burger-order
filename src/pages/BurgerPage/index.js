import React, { Component } from "react";
import styles from "./style.module.css";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios_orders";
import Spinner from "../../components/General/Spinner";

const INGREDIENT_PRICE = { salad: 1, cheese: 1.5, meat: 3, bacon: 1 };
const INGREDIENT_NAMES = {
  bacon: "Bacon",
  cheese: "Cheese",
  meat: "Meat",
  salad: "Salad",
};
export default class index extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 6,
    purchasing: false,
    confirmOrder: false,
    loading: false,
  };

  addIngredient = (type) => {
    const newIngredient = { ...this.state.ingredients };
    newIngredient[type]++;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    this.setState({
      purchasing: true,
      totalPrice: newPrice,
      ingredients: newIngredient,
    });
  };

  removeIngredient = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredient = { ...this.state.ingredients };
      newIngredient[type]--;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
      this.setState({
        purchasing: newPrice > 6,
        totalPrice: newPrice,
        ingredients: newIngredient,
      });
    }
  };
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  hideConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };
  continueOrder = () => {
    const params = [];
    for (let ingredients in this.state.ingredients) {
      params.push(ingredients + "=" + this.state.ingredients[ingredients]);
    }
    params.push("price=" + this.state.totalPrice);
    const query = params.join("&");
    console.log(query);
    this.props.history.push({ pathname: "/ship", search: query });
    this.hideConfirmModal();
  };

  render() {
    const disabledIngredient = { ...this.state.ingredients };

    for (let key in disabledIngredient) {
      disabledIngredient[key] = disabledIngredient[key] <= 0;
    }

    return (
      <div>
        <Modal show={this.state.confirmOrder} hide={this.hideConfirmModal}>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.hideConfirmModal}
              onConfirm={this.continueOrder}
              ingredients={this.state.ingredients}
              ingredientNames={INGREDIENT_NAMES}
              totalPrice={this.state.totalPrice}
            />
          )}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          disabled={!this.state.purchasing}
          disabledIngredient={disabledIngredient}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          totalPrice={this.state.totalPrice}
          ingredientNames={INGREDIENT_NAMES}
          showConfirmModal={this.showConfirmModal}
        />
      </div>
    );
  }
}
