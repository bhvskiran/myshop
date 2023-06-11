import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const DropDown = (props) => {
  const { data, setDropDown } = props;
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };

  return (
    <div className="pb-4 w-[270px] bg-[#FFF] absolute z-30 rounded-b-md shadow-sm">
      {data &&
        data.map((i, index) => (
          <div
            className={`${styles.normalFlex}`}
            key={index}
            onClick={() => submitHandle(i)}
          >
            <img
              src={i.image_Url}
              alt={i.title}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
            />
            <h3 className="m-3 cursor-pointer select-none">{i.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
