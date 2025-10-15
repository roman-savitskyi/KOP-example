
import { v4 as uuidv4 } from 'uuid';
import "./customList.css";

function CustomList({ items, onClick }) {
    console.log('items in CustomList', items);
    if (!items || items.length === 0) {
        return <p className="custom-list-empty">No students added yet. Add your first student above!</p>;
    }
    return (
        <ul className="custom-list">
            {items.map((item) => (
                <li key={item.id} data-key={item.id} className="custom-list-item" onClick={onClick}>
                    <span className="custom-list-item-text">{item.name}</span>
                </li>
            ))}
        </ul>
    );
}

export { CustomList };