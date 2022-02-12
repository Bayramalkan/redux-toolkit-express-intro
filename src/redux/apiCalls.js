import axios from "axios";
import { updateStart, updateSucces, updateError } from "./userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const response = await axios.post(
      "http://localhost:8800/api/users/123/update",
      user
    );
    dispatch(updateSucces(response.data));
  } catch (err) {
    dispatch(updateError());
  }
};
