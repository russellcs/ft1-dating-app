import { useDispatch, useSelector } from "react-redux";
import { types } from "../../redux/types/types";
import { callAPI } from "../../dataController/messages";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Block = (props) => {
  const token = useSelector((state) => state.general.token);
  const dispatch = useDispatch();

  // Alert style interface: confirm to block on block button click
  // blockUser function called on 'yes'
  const confirmBlock = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure you want to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => blockUser(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  // functionality to block a user calls API to update DB
  const blockUser = () => {
    callAPI(types.BLOCK_USER, props, { token });
    dispatch({ type: types.BLOCK_USER, payload: props });
  };

  return (
    <div className="m-4">
      <button
        className="btn btn-danger btn-sm shadow"
        onClick={() => {
          confirmBlock();
        }}
      >
        Block user
      </button>
    </div>
  );
};

export default Block;
