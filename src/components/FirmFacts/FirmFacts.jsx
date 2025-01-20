import FirmFactsCard from '../FirmFactsCard/FirmFactsCard';

import styles from './firmFacts.module.scss';

const FirmFacts = () => {

    return (
        <main className={styles.container}>

            <section className={styles.iconWrapper}>
                <nav className={styles.iconContainer}>
                    <div className={styles.iconClose} />
                    <div className={styles.iconClose} />
                </nav>
            </section>

            <h1>Firm Facts</h1>
            <hr className={styles.hrLine}></hr>

            <section className={styles.cardsWrapper}>

                <FirmFactsCard></FirmFactsCard>
                
            </section>


        </main>
    )
}

export default FirmFacts;