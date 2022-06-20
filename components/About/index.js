import React, { useEffect, useState } from "react";
import styles from "./about.module.scss";
import { useWeb3 } from "@3rdweb/hooks";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { getBalance, getTotalSupply } from "../../Actions/ContractDemoActions";
const About = () => {
  const { address } = useWeb3();
  const [balance, setbalance] = useState(0);
  const getBalanceFormik = useFormik({
    initialValues: {
      balance: "",
    },
    validationSchema: Yup.object().shape({
      balance: Yup.string().required("Enter Contract Address"),
    }),
    onSubmit: async (values, restProps) => {
      console.log(values, "values");
      restProps.resetForm();
    },
  });
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <form className={styles.balance}>
            <div className={styles.heading}>Get Balance</div>
            <input
              type="text"
              placeholder="Enter Contract Address"
              {...getBalanceFormik.getFieldProps("balance")}
            />
            <button type="submit">Get Balance</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
