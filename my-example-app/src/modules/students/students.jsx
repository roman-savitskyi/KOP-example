import { useState } from "react";
import { CustomList, CustomInput } from "../../components";
import "./students.css";

function Students({ defaultStudents }) {
    const [studentName, setStudentName] = useState('')
    const [students, setStudents] = useState(defaultStudents || []);

    const changeStudentName = (e) => setStudentName(e.target.value);
    const changeStudents = (e) => {
        console.log(e.target.value);
        setStudents([...students, e.target.value])
        setStudentName('')
    }

    return (
        <div className="students-container">
            <h2 className="students-heading">Students</h2>
            <div className="students-input-section">
                <label className="students-label">Add New Student:</label>
                <CustomInput
                    value={studentName}
                    onChange={changeStudentName}
                    onBlur={changeStudents}
                    placeholder="Enter student name..."
                />
            </div>
            <CustomList items={students} />
        </div>
    );
}

export { Students };