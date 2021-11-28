import React, { useReducer, createContext, useContext, useRef } from "react";
export const AppStoreContext = createContext();

const cardTypes = {
  visa: "visa",
  masterCard: "mastercard",
};

const mockCards = [
  {
    id: "1",
    nickName: "Test",
    type: cardTypes.visa,
    number: "1234123412341234",
    expiryDate: "07/25",
    cvv: "345",
    cardHolder: "Pavel Jhins",
  },
  {
    id: "2",
    nickName: "Pavel",
    type: cardTypes.masterCard,
    number: "5678123412341234",
    expiryDate: "01/22",
    cvv: "345",
    cardHolder: "Pavel Jhins",
  },
  {
    id: "3",
    nickName: "Visa",
    type: cardTypes.visa,
    number: "2345123412341234",
    expiryDate: "04/28",
    cvv: "345",
    cardHolder: "Pavel Jhins",
  },
];

const AppStore = (prosp) => {
  const [AppState, AppStateDispatch] = useReducer(
    (state, action) => {
      switch (action?.type) {
        case "addCard":
          return {
            ...state,
            cards: [...state.cards, action.payload],
          };
        case "removeCard":
          return {
            ...state,
            cards: state.cards.filter((card) => card.id !== action.payload),
          };
        default:
          return state;
      }
    },
    {
      cards: mockCards,
    }
  );

  return (
    <AppStoreContext.Provider value={{ AppState, AppStateDispatch }}>
      {prosp.children}
    </AppStoreContext.Provider>
  );
};

export const useAppState = () => useContext(AppStoreContext);

export default AppStore;
