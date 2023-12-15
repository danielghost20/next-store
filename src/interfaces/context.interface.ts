import { Cart } from "./cart.interface";
import { CreditCard, UserContact } from "./payment.interface";

// Cart context

export interface CartContextType  {
    items: Cart[];
    cartState: boolean;
    features: {
      addProductToCart: (prod: Cart) => void;
      handleShowCart: () => void;
      totalProducts: () => number;
      removeProduct: (id: string) => void;
      incrementProductAmount: (id: string) => void;
      decrementProductAmount: (id: string) => void;
    };
  };


// Payment Context

export interface PaymentContext  {
  user_contact: UserContact;
  credit_card: CreditCard;
  features: {
      addUserAddress: (data: UserContact) => void;
      addUserCard: (data: CreditCard) => void;
  };
};