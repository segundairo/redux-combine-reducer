import React from "react";
import { FaShopify, FaShoppingCart } from "react-icons/fa";
import { connect, useSelector } from "react-redux";
import styled from "styled-components";
const Navbar = () => {

  const {totalQty} = useSelector(state => state)
  return (
    <Wrapper>
      <div className="container">
        <h2>Logo</h2>
        <div>
          <div className="cart">
            <FaShoppingCart style={{ width: "25px", height: "30px" }} />
            <span>{totalQty}</span>
          </div>
          <div classname="cart">
            <FaShopify />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #222;
  background: var(--primary);

  color: #f2f6f9;
  color: #222;
  width: 100%;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--container);
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    & > div {
      display: inline-flex;
    }
    .cart {
      position: relative;
      width: 30px;
      span {
        position: absolute;
        top: -10px;
        right: -5px;
        padding: 10px;
        font-size: 0.8rem;
        background: coral;
        color: white;
        height: 10px;
        width: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
    }

    div + div {
      padding-left: 1rem;
    }
  }
`;
// const mapStateToProps = (state) => {
//   return {
//     totalQty: state.totalQty,
//   };
// };
export default Navbar;
