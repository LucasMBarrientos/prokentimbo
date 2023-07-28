import React, { useState } from "react";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";

import styles from "./Main.module.scss";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";

const Main: React.FC = ({ children }) => {
  return (
    <>
      <Banner/>
      <Sidebar/>
      <div className={styles.principal}>
        {children}
      </div>
    </>
  );
};

export default Main;
