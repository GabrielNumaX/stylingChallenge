
import Button from '../Button';
import styles from './firmFactsCard.module.scss';


const FirmFactsCard = (props) => {

    return (
        <section className={styles.cardsContainer}>
            <div className={styles.card}>
                <Button text={'This is a two line button that has a really long text and it ellipsisi'} 
                variant="icon"
                />
            </div>
            <div className={styles.card}>
                <Button
                    text={'This is a two line button that has a really long text and it ellipsisi'}
                    variant="icon"
                />
            </div>
            <div className={styles.card}>
                <Button
                    text={'This is a one line button that has a really long text'}
                    variant="default"
                />
            </div>
            <div className={styles.card}>
                <Button
                    text={'This is a two line button that has a really long text and it ellipsisi'}
                    variant="icon"
                />
            </div>
            <div className={styles.card}>
                <Button
                    text={'This is a two line button that has a really long text and it ellipsisi'}
                    variant="icon"
                />
            </div>
            <div className={styles.card}>
                <Button
                    text={'This is a two line button that has a really long text and it ellipsisi'}
                    isDisabled
                    variant="icon"
                />
            </div>
            <div className={styles.card}>
                <Button
                    text={'This is a two line button that has a really long text and it ellipsisi'}
                    variant="icon"
                />
            </div>
        </section>
    )
}

export default FirmFactsCard;