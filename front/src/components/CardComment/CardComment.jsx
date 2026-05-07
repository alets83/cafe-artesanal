import styles from './CardComment.module.css'

function CardComment( { title, content, date, time, products } ) {
    return (
        <div className={ styles.CardComment }>
            <h3>{ title }</h3>
            <h4>{ products }</h4>
            <blockquote>{ content }</blockquote>
            <h5>{ date }</h5>
            <h5>{ time }</h5>
        </div>
    );
}

export default CardComment;