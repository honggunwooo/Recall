const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const interviewRoutes = require("./routes/interview");
app.use("/api/interview", interviewRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Recall API Server is running on 8080" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});
