const Record = require("../models/recordModel");

exports.analyzeRecord = (data) => {
  if (!data || !data.item) return "저장된 기록이 없습니다.";
  const { item, lastPlace, nextMove } = data;

  if (lastPlace.includes("카페") && nextMove.includes("버스")) {
    return `${item}은(는) 카페에 두고 왔을 확률이 높습니다.`;
  }
  return `${item}은(는) 마지막으로 ${lastPlace}에서 확인되었습니다.`;
};

exports.saveToDB = async (data) => {
  return await Record.create(data);
};

exports.getHistory = async () => {
  return await Record.findAll();
};
