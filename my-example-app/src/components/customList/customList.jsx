
import { v4 as uuidv4 } from 'uuid';
import "./customList.css";

function CustomList({ items }) {
    console.log('items in CustomList', items);
    if (!items || items.length === 0) {
        return <p className="custom-list-empty">No students added yet. Add your first student above!</p>;
    }
    return (
        <ul className="custom-list">
            {items.map((item) => (
                <li key={uuidv4()} className="custom-list-item">
                    <span className="custom-list-item-text">{item}</span>
                </li>
            ))}
        </ul>
    );
}

export { CustomList };