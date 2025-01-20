import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import styles from './button.module.scss';

const Button = ({variant, text = null, isDisabled = false}) => {

    const isIconVariant = variant === 'icon'

    const buttonClasses = cx(styles.buttonMain, {
        [styles.isDisabled]: isDisabled,
    });

    const buttonTextClasses = cx(styles.buttonText, {
        [styles.iconVariant]: isIconVariant,
    })
    return(
        <button 
        className={buttonClasses} 
        disabled={isDisabled}>
            {
                variant  &&
                <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>
            </div>
            }
            <p className={buttonTextClasses}>
             {text}
            </p>
        </button>
    )
}

export default Button;