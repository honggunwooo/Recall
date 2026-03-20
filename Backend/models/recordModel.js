const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

let db;

// DB 초기화: 파일이 없으면 만들고, 테이블(표)이 없으면 생성합니다.
async function initDB() {
  db = await open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS records (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      item TEXT,
      lastPlace TEXT,
      nextMove TEXT,
      createdAt DATETIME DEFAULT (DATETIME('now', 'localtime'))
    )
  `);
}

initDB();

const Record = {
  // 데이터 넣기
  async create(data) {
    const { item, lastPlace, nextMove } = data;
    return await db.run(
      "INSERT INTO records (item, lastPlace, nextMove) VALUES (?, ?, ?)",
      [item, lastPlace, nextMove],
    );
  },
  // 모든 데이터 가져오기 (최신순)
  async findAll() {
    return await db.all("SELECT * FROM records ORDER BY createdAt DESC");
  },
};

module.exports = Record;
