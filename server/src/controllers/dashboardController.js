import db from "../config/db.js";

export const getDashboardStats = (req, res) => {
  const query = `
    SELECT
      (SELECT COUNT(*) FROM projects) AS totalProjects,
      (SELECT COUNT(*) FROM tasks) AS totalTasks,
      (SELECT COUNT(*) FROM tasks WHERE status='completed') AS completedTasks,
      (SELECT COUNT(*) FROM tasks WHERE status='pending') AS pendingTasks
  `;

  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result[0]);
  });
};