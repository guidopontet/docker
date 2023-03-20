const { syncDB } = require("../../tasks/sync-db");

describe('Pruebas en sync-db', () => {
  test('must run process twice', () => {
    syncDB();
    const times = syncDB();

    expect(times).toBe(2);
  });
});
