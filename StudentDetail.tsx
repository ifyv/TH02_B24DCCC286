import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, [id]);

  if (!student) return <p>Đang tải thông tin...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thông tin chi tiết sinh viên</h2>
      <p><strong>Tên:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Điện thoại:</strong> {student.phone}</p>
      <p><strong>Website:</strong> {student.website}</p>
      <Link to="/bai2">← Quay lại danh sách</Link>
    </div>
  );
};

export default StudentDetail;

