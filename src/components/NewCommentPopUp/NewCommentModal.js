import React from 'react';
import ReactDOM from 'react-dom';
import Form from './NewCommentForm';
import FocusTrap from 'focus-trap-react';
import styles from "./NewCommentPopUp.module.scss"

export default function Modal({
    onClickOutside,
    onKeyDown,
    modalRef,
    buttonRef,
    closeModal,
    onSubmit,
    user,
    createComment,
    newComment, 
    setNewComment
}) {
    return ReactDOM.createPortal(
        <FocusTrap>
            <aside
                tag="aside"
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                className={styles.modal_cover}
                onClick={onClickOutside}
                onKeyDown={onKeyDown}
            >
                <div className={styles.modal_area} ref={modalRef}>
                    <button
                        ref={buttonRef}
                        aria-label="Close Modal"
                        aria-labelledby="close-modal"
                        className={styles.modal_close}
                        onClick={closeModal}
                    >
                        <span id="close-modal" className={styles._hide_visual}>
                            Close
                        </span>
                        <svg className={styles._modal_close_icon} viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </button>
                    <div className={styles.modal_body}>
                        <Form
                            onSubmit={onSubmit}
                            user={user}
                            createComment={createComment}
                            newComment={newComment}
                            setNewComment={setNewComment}
                        />
                    </div>
                </div>
            </aside>
        </FocusTrap>,
        document.body
    );
};


