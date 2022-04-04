import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Details = () => {
  //-------- USESTATE ------------------------
  const [details, setDetails] = useState([]);

  //-------- USEEFFECT -----------------------
  useEffect(() => {
    saveDetails();
  }, []);
  //-------- FUNCTIONS -----------------------
  const saveDetails = () => {
    const helperArr = [
      "getdifficulty",
      "hashrate",
      "marketcap",
      "totalbc",
      "24hrtransactioncount",
      "24hrbtcsent",
    ];

    helperArr.forEach((element) => {
      getDetails(element);
    });
  };

  const getDetails = async (parameter) => {
    try {
      const { data } = await axios.get(
        `https://blockchain.info/q/${parameter}`
      );

      setDetails((prevArray) => [
        ...prevArray,
        { name: parameter, value: data },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main">
      <div className="details-container">
        <div className="details-title">Bitcoin Details</div>
        <div className="details"></div>
      </div>
    </div>
  );
};

export default Details;
