"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState("");

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post(
      "http://localhost:5000/api/tasks",
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (id: number) => {
    await axios.patch(
      `http://localhost:5000/api/tasks/${id}/toggle`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchTasks();
  };

  const deleteTask = async (id: number) => {
    await axios.delete(
      `http://localhost:5000/api/tasks/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Task Dashboard</h1>

      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Task"
        />
        <button className="bg-green-500 text-white p-2" onClick={addTask}>
          Add
        </button>
      </div>

      {tasks.map((t) => (
        <div key={t.id} className="border p-2 mb-2 flex justify-between">
          <span>
            {t.title} {t.completed ? "✅" : "❌"}
          </span>
          <div>
            <button
              className="mr-2 bg-yellow-400 px-2"
              onClick={() => toggleTask(t.id)}
            >
              Toggle
            </button>
            <button
              className="bg-red-500 text-white px-2"
              onClick={() => deleteTask(t.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}