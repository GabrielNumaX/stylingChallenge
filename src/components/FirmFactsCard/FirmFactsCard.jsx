
import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import styles from './firmFactsCard.module.scss';


const FirmFactsCard = ({
    variant, 
    id, 
    buttonText, 
    buttonVariant,
    buttonDisabled,
}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleOnHover = () => setIsHovered(prevState => !prevState)

    const isDefaultVariant = variant === 'default';
    const isBorderVariant = variant === 'border';

    const cardClassnames = cx(styles.card, {
        [styles.defaultVariant]: isDefaultVariant,
        [styles.borderVariantButtonDisabled]: buttonDisabled,
        [styles.borderVariant]: !buttonDisabled && isBorderVariant,
    })

    return (
        <div className={cardClassnames} onMouseEnter={handleOnHover} onMouseLeave={handleOnHover}>
            <Button
            key={id}
            variant={buttonVariant}
            text={buttonText}
            isDisabled={buttonDisabled} 
            isHovered={isHovered}
            cardVariant={variant}
            />
        </div>
    )
}

FirmFactsCard.propTypes = {
    variant: PropTypes.string,
    id: PropTypes.string,
    buttonText: PropTypes.string,
    buttonVariant: PropTypes.string,
    text: PropTypes.string,
    buttonDisabled: PropTypes.bool,
}

export default FirmFactsCard;