import Arrow from "../arrow/arrow";
import styles from "./moreInfo.module.scss";
import { useState } from "react";
import { truncateDescription } from "../../utils/general";

const MoreInfo = ({moreInfo}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className={styles.content}>

      <div className={styles.closedContainer}>
        <h6>{readMore ? "Read less" : "Read more"}</h6>
        <div>
          <div className={readMore ? styles.down : styles.right} onClick={() => setReadMore(!readMore)}>
            <Arrow />
          </div>
        </div>
      </div>

      {readMore ? <p
              dangerouslySetInnerHTML={{
                __html: truncateDescription(moreInfo)[1],
              }}
            ></p> : null}

    </div>
  );
};

export default MoreInfo;
