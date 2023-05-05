import { useState } from "react";
import { api } from "../../service/api";
import SearchButton from "../../components/SearchButton";
import { ICartHistoryResponse } from "../../interfaces/cartHistory";
import CartSection from "../../components/CartSection";
import { StyledCartDetail, StyledCarts, StyledUserDetail } from "./style";

const Home = () => {
  const [userHistory, setUserHistory] = useState<ICartHistoryResponse>(
    {} as ICartHistoryResponse
  );

  const searchFunction = (userId: string) => {
    api.get(`/cart-history/${userId}`).then((res) => {
      setUserHistory(res.data);
    });
  };
  return (
    <>
      <SearchButton searchFunction={searchFunction} />
      <StyledUserDetail>
        <h2>ID: {userHistory.userId}</h2>
        <h2>Nome: {userHistory.fullName}</h2>
        <h2>email: {userHistory.email}</h2>
        <h2>Total: {userHistory.total}</h2>
      </StyledUserDetail>

      {userHistory.carts?.map((cart, index) => (
        <StyledCarts>
          <h2>Carrinho {index + 1}</h2>
          <StyledCartDetail>
            <h3>ID: {cart.id}</h3>
            <h3>Data: {new Date(cart.date).toLocaleDateString("pt-BR")}</h3>
            <h3>
              Total:{" "}
              {cart.total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
          </StyledCartDetail>
          <CartSection cart={cart} key={index} />;
        </StyledCarts>
      ))}
    </>
  );
};

export default Home;
