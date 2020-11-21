import React, { useEffect } from "react";
import CartItems from "./cartItems";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, computeCart, fetchCart } from "../redux/cart/actions";
import { BeatLoader } from "react-spinners";

const Carts = () => {
  const dispatch = useDispatch();
  const { cart, totalAmount, loading, error } = useSelector((state) => state);

  useEffect(() => {
    const loadDelay = setTimeout(() => {
      dispatch(fetchCart());
      
    }, 2000);
   return ()=> {
     clearTimeout(loadDelay)
   }
  }, []);


  useEffect(() => {
    dispatch(computeCart());
  }, [cart]);

  if (loading) {
    return (
      <Wrapper>
        <div className="loading">
        <BeatLoader className="loading" size={50} color={"#123abc"} />

        </div>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h2 className="empty">{error}</h2>
      </Wrapper>
    );
  }

  if (!loading && cart.length === 0) {
    return (
      <Wrapper>
        <h2 className="empty">No Item in Cart</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h2>Carts</h2>
      <div className="container">
        {cart.map((item) => {
          return <CartItems key={item.id} {...item} />;
        })}

        <div className="summary">
          <h2>Total</h2>
          <h4>${totalAmount}</h4>
        </div>
        <div className="btn-container">
          <button onClick={() => dispatch(clearCart())} className="btn">
            CLEAR
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: #f1f5f7;
  flex-grow: 1;
  padding-top: 4rem;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .empty, .loading {
    padding-top: 10rem;
    text-align: center;
    font-size: 3rem;
  }

  .summary {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }
  .container {
    max-width: var(--container);
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
`;

export default Carts;
