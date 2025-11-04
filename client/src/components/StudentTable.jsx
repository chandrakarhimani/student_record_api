
export default function StudentTable({ students, onEdit, onDelete }) {
  return (
    <table className="w-full border border-gray-300 mt-5">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Email</th>
          <th className="p-2 border">Age</th>
          <th className="p-2 border">Course</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((stud) => (
          <tr key={stud._id} className="text-center">
            <td className="border p-2">{stud.name}</td>
            <td className="border p-2">{stud.email}</td>
            <td className="border p-2">{stud.age}</td>
            <td className="border p-2">{stud.course}</td>
            <td className="border p-2 space-x-2">
              <button
                onClick={() => onEdit(stud)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(stud._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
