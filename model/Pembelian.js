module.exports = {
  get: function(con, callback) {
    con.query("SELECT * FROM pembelian", callback)
  },

  getById: function(con, id, callback) {
    con.query(`SELECT * FROM pembelian WHERE id_pembelian = ${id}`, callback)
  },

  create: function(con, data, callback) {
    con.query(
      `INSERT INTO pembelian SET
      nama_barang = '${data.nama_barang}',
      jumlah = '${data.jumlah}',
      harga = '${data.harga}',
      total_harga = '${data.jumlah * data.harga}',
      status = '${data.status}'`,
      callback
    )
  },

  update: function(con, data, id, callback) {
    con.query(
      `UPDATE pembelian SET
      nama_barang = '${data.nama_barang}',
      jumlah = '${data.jumlah}',
      harga = '${data.harga}',
      total_harga = '${data.jumlah * data.harga}',
      status = '${data.status}'
      WHERE id_pembelian = ${id}`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM pembelian WHERE id_pembelian = ${id}`, callback)
  }
}
