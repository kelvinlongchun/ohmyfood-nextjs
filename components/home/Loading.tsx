import React from "react";
import style from "./Loading.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div className={style.loading}>
      <FontAwesomeIcon icon={faSpinner} className={style.loading__spinner} />
    </div>
  );
};

export default Loading;
