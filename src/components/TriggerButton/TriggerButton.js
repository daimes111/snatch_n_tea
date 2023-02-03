import React from 'react';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import styles from './TriggerButton.module.scss'


const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <>
    <button
      className={styles.TriggerButton}
      ref={buttonRef}
      onClick={showModal}
    >
      <span><ChatBubbleOutlineIcon className={styles.ChatIcon} fontSize="small"/></span>
    </button>
    </>
  );
};
export default Trigger;
