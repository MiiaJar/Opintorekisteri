
const db = require('../database');

const arviointi = {
  getById: function(id, callback) {
    return db.query('select * from arviointi where opiskelija_idopiskelija=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (pvm,arvosana,Opiskelija_idOpiskelija,Opintojakso_idOpintojakso) values(?,?,?)',
      [arviointi.pvm, arvionti.arvosana, arviointi.opiskelija_idopiskelija, arviointi_idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where Opiskelija_idOpiskelija=?', [id], callback);
  },
  update: function(idopiskelija, arviointi, callback) {
    return db.query(
      'update arviointi set pvm=?,arvosana=?,Opiskelija_idOpiskelija=?,opintojakso_idOpintojakso=? where idopiskelija=?',
      [arviointi.pvm, arviointi.arvosana, arviointi.opiskelija_idopiskelija, arviointi.arviointi_idOpintojakso,idopiskelija],
      callback
    );
  }
};
module.exports = arviointi;