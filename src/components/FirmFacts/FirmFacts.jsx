import PropTypes from 'prop-types';
import FirmFactsCard from '../FirmFactsCard/FirmFactsCard';

import styles from './firmFacts.module.scss';

const FirmFacts = ({ data = [] }) => {

    const cardRenderer = () => data.map((item) =>
        <FirmFactsCard
            key={item.id}
            variant={item.cardVariant}
            id={item.id}
            buttonText={item.buttonText}
            buttonVariant={item.buttonVariant}
            buttonDisabled={item?.isDisabled}
        />
    )

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

            <section className={styles.cardsContainer}>
                {
                    cardRenderer()
                }
            </section>

        </main>
    )
}

FirmFacts.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            cardVariant: PropTypes.string,
            buttonVariant: PropTypes.string.isRequired,
            buttonText: PropTypes.string.isRequired,
            isDisabled: PropTypes.bool,
        }).isRequired
    ).isRequired
}

export default FirmFacts;