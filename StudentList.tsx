import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sinh viên</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((student) => (
          <li key={student.id} style={{ marginBottom: "10px" }}>
            <Link to={`/student/${student.id}`} style={{ textDecoration: "none", color: "blue" }}>
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;

