import { useState, useEffect } from "react";
import { CustomList, CustomInput } from "../../components"; 
import "./students.css";

function Students({setUser}) {
    const [studentName, setStudentName] = useState('')
    let [students, setStudents] = useState([]);


    const changeStudentName = (e) => setStudentName(e.target.value);
    const changeStudents = (e) => {
        console.log(e.target.value);
        setStudents([...students, e.target.value])
        setStudentName('')
    }

    // Mocked data for default students
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched users:', data);
            setStudents(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);   

    const onClick = (e) => {
        const id = e.currentTarget.getAttribute('data-key');
        const student = students.find(s => s.id == id);
        console.log('Student:', student);

        setUser(student);
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
            <CustomList items={students} onClick={onClick} />
        </div>
    );
}

export { Students };