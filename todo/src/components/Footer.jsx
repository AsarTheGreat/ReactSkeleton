import styles from '../css/footer.module.css'

export default function Footer({completedTodos, totalTodos})
{
    return (<div className={styles.header}>
        <span className={styles.item}>Completed:{completedTodos}</span> 
        <span className={styles.item}>Total:{totalTodos}</span>       
    </div>);
}