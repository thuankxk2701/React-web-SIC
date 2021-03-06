import { SIGN_UP, UPDATE_PASSWORD } from "./types";
export interface typesInitialStateProps {
  AllAccount: {
    id: any;
    name: string;
    phone: string;
    email: string;
    password: string;
    image: string;
  }[];
}
const initialState: typesInitialStateProps = {
  AllAccount: [
    {
      id: 912347238942,
      name: "thuan",
      phone: "0912207142",
      email: "ttctde@gmail.com",
      password: "1234",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpBKa7FAm5u35u_NM5xGNBg6kQO_3TRWIjw&usqp=CAU",
    },
  ],
};
interface typesActionProps {
  type: string;
  payload: any;
}
export function rootReducer(state = initialState, action: typesActionProps) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        AllAccount: [action.payload, ...state.AllAccount],
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        AllAccount: state.AllAccount.map(postItem =>
          postItem.id === action.payload.id ? action.payload : postItem,
        ),
      };

    default:
      return state;
  }
}
