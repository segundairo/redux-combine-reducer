import React from "react";
import styled from "styled-components";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import { removeItem, increaseItem, decreaseItem } from "../redux/cart/actions";

const CartItems = ({ id, title, price, img, qty }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <img src={img} alt={title} />
      {/* <span></span> */}
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button
          onClick={() => dispatch(removeItem(id))}
          className="btn btn-remove"
        >
          remove
        </button>
      </div>
      <div>
        <button className="icon" onClick={() => dispatch(increaseItem(id))}>
          <FaChevronUp />
        </button>

        {qty}
        <button className="icon" onClick={() => dispatch(decreaseItem(id))}>
          <FaChevronDown />
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 40px;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 2rem;
  img {
    width: 80px;
  }
  div:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon {
    display: inline-block;
    padding: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover,
    &:active {
      outline-style: solid;
      outline-width: 1px;
      outline-color: var(--primary);
    }
  }
  h4 {
    letter-spacing: 1px;
    font-weight: 500;
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1rem;
    color: #888785;
    font-weight: 500;
    letter-spacing: 1px;
  }
  .btn-remove {
    margin-top: 10px;
    background: transparent;
    color: #222;
    border: 1px solid;
    padding: 3px 8px;
    margin-top: .5rem;
    &:hover {
      background: #222;
      color: #f1f5f8;
    }
  }
`;

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseItem: () => dispatch(increaseItem(  )),
//     decreaseItem: () => dispatch(decreaseItem(  )),
//     removeItem : () => dispatch(removeItem(  )),
//   };
// };
export default CartItems;
