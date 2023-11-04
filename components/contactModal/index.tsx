import styles from './index.module.scss'
import Image from "next/image";
import React from "react";

interface IContactModalProps {
    onCloseModal: () => void
}

const ContactModal = ({onCloseModal}: IContactModalProps) => {
    return (
        <>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.closeIcon} onClick={() => {
                        onCloseModal()
                    }}>
                        <Image src={'/assets/Close.svg'} alt="logo" width={17} height={17}/>

                    </div>
                    <div className={styles.body}>
                        <div className={styles.header}>Contact</div>
                        <div className={styles.subHeader}>Lorem Ipsum is simply dummy text of the printing</div>

                        <div className={styles.form}>
                            <div className={styles.inputField}>
                                <span className={styles.label}>Name</span>
                                <input className={styles.formField} type="text" placeholder="Enter Your Name Here"/>
                            </div>
                            <div className={styles.inputField}>
                                <span className={styles.label}>E-mail</span>
                                <input className={styles.formField} type="text"
                                       placeholder="Enter Your Email Address Here"/>
                            </div>
                            <div className={styles.inputField}>
                                <span className={styles.label}>Message</span>
                                <input className={styles.formField} type="text"
                                       placeholder="Wanna share something with us?"/>
                            </div>
                            <div className={styles.btnContainer}>
                                <div className={styles.submitBtn}>Submit</div>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.helpText}>
                                Need more info? hello@newzera.com
                            </div>
                            <div className={styles.socialMediaLinks}>

                                <Image src={'/assets/FB-icon-black.png'} alt="logo" width={10} height={10}/>
                                <Image src={'/assets/linkedin-icon-black.png'} alt="logo" width={10} height={10}/>
                                <Image src={'/assets/Twitter-icon-black.png'} alt="logo" width={10} height={10}/>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ContactModal;