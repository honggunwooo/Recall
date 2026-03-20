const service = require("../services/interview");

exports.answer = async (req, res) => {
  try {
    await service.saveToDB(req.body);
    res.json({ message: "DB에 안전하게 저장되었습니다." });
  } catch (err) {
    res.status(500).json({ error: "저장 실패" });
  }
};

exports.result = async (req, res) => {
  try {
    const history = await service.getHistory();
    const latest = history[0];
    const analysis = service.analyzeRecord(latest);

    res.json({
      totalCount: history.length,
      history: history,
      latestAnalysis: analysis,
    });
  } catch (err) {
    res.status(500).json({ error: "조회 실패" });
  }
};
