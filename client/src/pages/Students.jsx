import { useEffect, useState } from "react";
import {
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
} from "../api/students";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const loadStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await updateStudent(editId, formData);
    } else {
      await createStudent(formData);
    }
    setFormData({ name: "", email: "", age: "", course: "" });
    setIsEdit(false);
    loadStudents();
  };

  const handleEdit = (student) => {
    setFormData(student);
    setIsEdit(true);
    setEditId(student._id);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Student Records</h1>

      <StudentForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isEdit={isEdit}
      />

      <StudentTable
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
