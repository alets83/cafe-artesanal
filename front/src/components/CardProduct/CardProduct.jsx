import styles from './CardProduct.module.css'

function CardProduct( { name, category, description } ) {
    return (
        <div className={ styles.cardProduct }>
            <h3>{ name }</h3>
            <h5>{ category }</h5>
            <blockquote>{ description }</blockquote>
        </div>
    );
}

export default CardProduct;