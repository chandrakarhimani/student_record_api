
export default function StudentForm({ formData, setFormData, handleSubmit, isEdit }) {
  return (
    <form onSubmit={handleSubmit} className="p-5 bg-gray-100 rounded shadow-md">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 border mb-3"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border mb-3"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <input
        type="number"
        placeholder="Age"
        className="w-full p-2 border mb-3"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        required
      />

      <input
        type="text"
        placeholder="Course"
        className="w-full p-2 border mb-3"
        value={formData.course}
        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
        required
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        {isEdit ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}
