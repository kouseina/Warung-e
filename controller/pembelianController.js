const Pembelian = require("../model/Pembelian")

module.exports = {
  index: function(req, res, next) {
    Pembelian.get(req.con, function(err, rows) {
      if (err) return next("Cannot Connect");

      
      res.render("pembelian", { 
        title: "Table Pembelian",
        name: "pembelian",
        data: rows,
        })
    })
  },

  create: function(req, res) {
    res.render("create", {
      title: "Create Pembelian",
      name: "edit-pembelian",
    })
  },

  store: function(req, res) {
    Pembelian.create(req.con, req.body, function(err) {
      if (err) {
        let errors_detail = ("Error Insert : %s ", err);
        req.flash("msg_error", errors_detail);
      }

      req.flash("msg_info", "Create pembelian success");
      res.redirect("/pembelian")
    })
  },

  edit: function(req, res) {
    Pembelian.getById(req.con, req.params.id, function(err, rows) {
      if (err) {
        var errors_detail = ("Error Update : %s ", err);
        req.flash("msg_error", errors_detail);
      }

      //if pembelian not found
      if (rows.length < 1) return res.send("Pembelian Not found");
      
      res.render("edit", {
        title: "Edit Pembelian",
        name: "edit-pembelian",
        data: rows,
      });
    })
  },

  update: function(req, res) {
    Pembelian.update(req.con, req.body, req.params.id, function(err) {
      if(!err) {
        req.flash("msg_info", "Update pembelian success");
        res.redirect("/pembelian")
      }
    })
  },

  destroy: function(req, res, next) {
    Pembelian.destroy(req.con, req.params.id, function(err) {
      if (err) {
        var errors_detail = ("Error Delete : %s ", err);
        req.flash("msg_error", errors_detail);
        res.redirect("/pembelian")
      } else {
        req.flash("msg_info", "Delete pembelian Success");
        res.redirect("/pembelian")
      }
    })
  }
}
