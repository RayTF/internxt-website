import styles from './Container1.module.css'
import descriptions from '../../assets/photos-descriptions.json'
import EmailNewsletter from '../EmailNewsletter'
import Image from 'next/image'

const Container1 = ({ id }) => {

    const description = descriptions.filter( desc => desc.id === id)
    
    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const className = isOdd(id) ? 'container' : 'container grey'

    return ( 
        <div className={`${className} relative`}>
            <div className={styles.main}>
                <h1 className={`${styles.title} lg:text-8xl`}>
                    {description[0].title}
                </h1>

                <p className={`${styles.subtitle} lg:text-xl lg:w-7/12`}>
                    {description[0].subtitle}
                </p>

                <p className={`${styles.subtitle} lg:text-xl lg:w-7/12`}>
                    {description[0].subtitle2}
                </p>

                <div className={`${styles.picture} lg:w-32`}>
                    <Image src="/images/1440/Photos/Section 1/1.png" width={75} height={92} />
                </div>

                <div className={`${styles.weather} lg:w-32 lg:pb-16`}>
                    <Image src="/images/1440/Photos/Section 1/2.png" width={68} height={65} />
                </div>

                <div className={`${styles.video} lg:w-20`}>
                    <Image src="/images/1440/Photos/Section 1/6.png" width={110} height={131} />
                </div>

                <div className={`${styles.lgcross} lg:w-72 lg:pl-48`}>
                    <Image src="/images/1440/Photos/Section 1/cross 1.png" width={29} height={29} />
                </div>

                <div className={`${styles.mdcross} lg:pr-32 lg:pt-40`}>
                    <Image src="/images/1440/Photos/Section 1/cross 4.png" width={18} height={18} />
                </div>

                <div className={styles.smcross}>
                    <Image src="/images/1440/Photos/Section 1/cross 2.png" width={11} height={11} />
                </div>
            </div>

            <div className={`${styles.circles} lg:w-40 lg:pr-16 lg:mr-6 lg:pt-84`}>
                    <Image src="/images/1440/Photos/Section 1/5.png" width={182} height={129} />
                </div>

            <div className={styles.secondary}>
                <h1 className={`${styles.subtitle2} lg:text-xl`}>
                    {description[0].subtitle3}
                </h1>

                <EmailNewsletter value="Subscribe" />

                <div className={`${styles.recorder} lg:w-84 lg:pl-32 lg:pt-32`}>
                    <Image src="/images/1440/Photos/Section 1/3.png" width={133} height={104} />
                </div>

                <div className={`${styles.message} lg:w-92 lg:pr-72`}>
                    <Image src="/images/1440/Photos/Section 1/4.png" width={82} height={80} />
                </div>

                <div className={`${styles.cross} lg:pr-64`}>
                    <Image src="/images/1440/Photos/Section 1/cross 3.png" width={19} height={19} />
                </div>
            </div>
        </div>
    );
}
 
export default Container1;