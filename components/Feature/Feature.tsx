import { Reorder } from "framer-motion";

import Button from "../Button/Button";

import styles from "./Feature.module.css"

interface Props {
  name: string;
};

export const Feature = ({ name }: Props) => {
  return (
    <Reorder.Item value={name} id={name} className={styles.feature}>
      <div className={styles.featureNameWrapper}>
        <input type="color"/>
        <p className={styles.featureName}>{name}</p>
      </div>
      <Button label="Delete"/>
    </Reorder.Item>
  );
};

export default Feature;