import React, {useEffect} from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import Image from "next/image";
import {useState} from "react";
import ContactModal from "@/components/contactModal";


const Home = () => {

    //Array of images
    const images = [
        '/assets/Group.png',
        '/assets/Group2.png',
    ]

    //State to store the selected image
    const [selected_image, set_selected_image] = useState<string>(images[2])

    const [show_modal, set_show_modal] = useState<boolean>(false)

    //This useEffect is used to change the image in the right section after every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const index = images.indexOf(selected_image)
            if (index === images.length - 1) {
                set_selected_image(images[0])
            } else {
                set_selected_image(images[index + 1])
            }
        }, 5000)
        return () => clearInterval(interval)
    })


    useEffect(() => {
        console.log(show_modal)
    }, [show_modal])

    return (
        <>
            <Head>
                <title>Cat-N-Dog</title>
            </Head>
            <div className={styles.pageWrapper}>

                {/*Left Section*/}
                <div className={styles.leftSection}>
                    {/*Logo Section*/}
                    <div className={styles.header}>
                        <div className={styles.logoContainer}>
                            <Image src={'/assets/Cat-N-Dog-Logo copy.png'} alt="logo" width={194} height={62}/>
                        </div>
                    </div>
                    {/*Info Section*/}
                    <div className={styles.infoSection}>
                        <div className={styles.infoSectionTextHeading}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className={styles.infoSectionTextSubHeading}>
                            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                            unknown
                            printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>
                    {/*Left footer*/}
                    <div className={styles.footerSection}>
                        <div className={styles.footerLeftSection}>
                            <div className={styles.logoContainer}>
                                <Image src={'/assets/AppStoreBadge.svg'} alt="logo" width={160} height={54}/>
                            </div>
                            <div className={styles.logoContainer}>
                                <Image src={'/assets/google-play-badge.png'} alt="logo" width={206} height={80}/>
                            </div>

                        </div>
                    </div>
                </div>


                {/*Right Section*/}
                <div className={styles.rightSection}
                     style={{
                         background: `url(${selected_image})`,
                     }}
                >
                    <div className={styles.header}>
                        <div className={styles.nav}>
                            <div className={styles.navItem}>About</div>
                            <div className={styles.navItem}>Blog</div>
                            <div className={styles.navItem}>Careers</div>
                            <div className={styles.navItem} onClick={() => {
                                set_show_modal(true)
                            }}>Contact
                            </div>
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.textHeading}>
                            Type Text
                        </div>
                        <div className={styles.textDescription}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                    <div className={styles.carouselController}>
                        {images?.map((image: string, index: number) => {
                            return (
                                <>
                                    <div key={index}
                                         className={`${styles?.carouselControllerItem} ${image === selected_image ? styles.carouselControllerItemSelected : null}`}
                                         onClick={() => {
                                             set_selected_image(image)
                                         }}/>
                                </>
                            )
                        })}
                    </div>
                </div>

            </div>
            {show_modal ?
                <ContactModal onCloseModal={() => {
                    set_show_modal(false)
                }}
                />
                : null}
        </>
    )
}


export default Home;