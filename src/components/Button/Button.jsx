import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import styles from './button.module.scss';

const Button = ({ 
    variant, 
    text = null, 
    isDisabled = false, 
    isHovered,
    cardVariant,
}) => {

    const isIconVariant = variant === 'icon';
    const isCardDefaultVariant = cardVariant === 'default';
    const isCardBorderVariant = cardVariant === 'border';

    const buttonClasses = cx(styles.buttonMain, {
        [styles.isDisabled]: isDisabled,
        [styles.isTopRowCard]: !isDisabled && isCardDefaultVariant && isHovered,
        [styles.isBottomRowCard]: !isDisabled && (isCardBorderVariant && isHovered),
    });

    const buttonTextClasses = cx(styles.buttonText, {
        [styles.iconVariant]: isIconVariant,
    })
    return (
        <button
            className={buttonClasses}
            disabled={isDisabled}>
            {
                isIconVariant &&
                <div className={styles.iconContainer}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
                </div>
            }
            <p className={buttonTextClasses}>
                {text}
            </p>
        </button>
    )
}

export default Button;