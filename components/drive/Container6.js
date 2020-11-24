import styles from './Container6.module.css'
import descriptions from '../../assets/drive-descriptions.json'
import Image from 'next/image'
import Link from 'next/link'

const Container6 = ({ id }) => {

    // Filter container specific descriptions
    const description = descriptions.filter( desc => desc.id === id)

    // Check if a number is odd
    const isOdd = ( num ) => {
        return num % 2 == 1;
    }

    // Set the background color of the container depending on its id
    const background = isOdd(id) ? 'normal_container' : 'normal_container grey'

    return ( 
        <div className={background}>
            <div className={`${styles.container} sm:items-center sm:justify-center sm:flex-col`}>
                <div className={`${styles.main} sm:items-center sm:w-auto sm:p-0`}>
                    <h1 className={`${styles.title} sm:text-4xl sm:text-center sm:w-10/12 lg:text-5xl lg:w-104 lg:leading-tight xl:leading-13`}>
                        {description[0].title}
                    </h1>

                    <p className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-10/12 sm:mb-12 lg:text-lg lg:w-96`}>
                        {description[0].subtitle}
                    </p>

                    <Link href="/prices">
                        <a className={`${styles.link} flex flex-row w-auto items-center lg:text-lg lg:mt-8 lg:mb-16 xl:mt-12`}>
                            <p className="sm:text-lg mr-2 mb-1">Check out plans for teams</p>
                            <Image src="/images/1440/Drive/Section 2/Section2 arrow.png" width={14} height={11} />
                        </a>
                    </Link>
                </div>
                
                <div className={`${styles.image} sm:hidden`}>
                    <Image src="/images/1440/Drive/Section 6/Business.png" width={708} height={754} />
                </div>

                <div className={`hidden sm:block sm:mt-12`}>
                    <Image src="/images/1440/Drive/Section 6/375p business.png" width={708} height={658} />
                </div>
            </div>
        </div>
    );
}
 
export default Container6;