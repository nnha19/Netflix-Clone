import React from "react";

import "./CloseViewDetailModal.css";

const CloseViewDetailModal = (props) => {
  return (
    <i
      onClick={props.hideViewDetail}
      class="close-viewdetail-modal fas fa-times"
    ></i>
  );
};

export default CloseViewDetailModal;
