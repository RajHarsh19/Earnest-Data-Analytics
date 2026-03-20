import prisma from "../prisma";

export const getTasks = async (req, res) => {
  const { page = 1 } = req.query;
  const tasks = await prisma.task.findMany({
    where: { userId: req.userId },
    skip: (Number(page) - 1) * 5,
    take: 5
  });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const task = await prisma.task.create({
    data: { title: req.body.title, userId: req.userId }
  });
  res.json(task);
};

export const updateTask = async (req, res) => {
  const task = await prisma.task.update({
    where: { id: Number(req.params.id) },
    data: req.body
  });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await prisma.task.delete({ where: { id: Number(req.params.id) } });
  res.json({ msg: "Deleted" });
};

export const toggleTask = async (req, res) => {
  const task = await prisma.task.findUnique({ where: { id: Number(req.params.id) } });
  const updated = await prisma.task.update({
    where: { id: task.id },
    data: { completed: !task.completed }
  });
  res.json(updated);
};
