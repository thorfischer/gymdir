Gymnasts = new Mongo.Collection('gymnasts');


if (Meteor.isServer) {
  Gymnasts.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}

Gymnasts.attachSchema(new SimpleSchema({
  lname: {
    type: String,
    label: "Last Name",
    max: 100
  },
  fname: {
    type: String,
    label: "First Name",
    max: 100
  },
  noc: {
    type: String,
    label: "NOC",
    max: 3
  },
  comp: {
    type: String,
    label: "Competition",
    allowedValues: ['RD761','Baku','American Cup','Glasgow','Bucarest','Stuttgart',
    'EnBW DTB-Pokal Team Challenge','UCIC (Calgary)','African Championships','Doha','Cottbus',
    'Pacific Rim','Rio Olympics Test Event','Olympics','Osijek','Varna','Sao Paulo',
    'European Championships','Ukraine Nation Cup','Ljubljana']
  },
  comptype: {
    type: String,
    label: "Competition Type",
    allowedValues: ['CI','CII','CIII','CIV'],
    optional: true
  },
  compdate: {
    type: Date,
    label: "Competition Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker"
    }
  },
  scores: {
    type: Object,
    label: "Scores"
  },// FLOOR
  "scores.fx": {
    type: Object,
    label: "Floor",
    optional: true
  },
  "scores.fx.d": {
    type: Number,
    label: "D-Score",
    optional: true,
    decimal: true
  },
  "scores.fx.e": {
    type: Number,
    label: "E-Score",
    optional: true,
    decimal: true
  },
  "scores.fx.pen": {
    type: Number,
    label: "Penalty",
    allowedValues: [0,-0.1,-0.2,-0.3,-0.4,-0.5,-0.6, -0.7],
    decimal: true,
    optional: true
  },
  "scores.fx.total": {
    type: Number,
    label: "Total",
    decimal: true,
    optional: true
  },
  "scores.fx.video": {
    type: String,
    label: "Video",
    optional: true
  },// POMMELS
  "scores.ph": {
    type: Object,
    label: "Pommel Horse",
    optional: true
  },
  "scores.ph.d": {
    type: Number,
    label: "D-Score",
    optional: true,
    decimal: true
  },
  "scores.ph.e": {
    type: Number,
    label: "E-Score",
    optional: true,
    decimal: true
  },
  "scores.ph.pen": {
    type: Number,
    label: "Penalty",
    allowedValues: [0,-0.1,-0.3],
    decimal: true,
    optional: true
  },
  "scores.ph.total": {
    type: Number,
    label: "Total",
    decimal: true,
    optional: true
  },
  "scores.ph.video": {
    type: String,
    label: "Video",
    optional: true
  },// RINGS
  "scores.sr": {
    type: Object,
    label: "Rings",
    optional: true
  },
  "scores.sr.d": {
    type: Number,
    label: "D-Score",
    optional: true,
    decimal: true
  },
  "scores.sr.e": {
    type: Number,
    label: "E-Score",
    optional: true,
    decimal: true
  },
  "scores.sr.total": {
    type: Number,
    label: "Total",
    decimal: true,
    optional: true
  },
  "scores.sr.video": {
    type: String,
    label: "Video",
    optional: true
  },// VAULT
  "scores.vt": {
    type: Object,
    label: "Vault",
    optional: true
  },
  "scores.vt.d": {
    type: Number,
    label: "D-Score",
    optional: true,
    decimal: true
  },
  "scores.vt.e": {
    type: Number,
    label: "E-Score",
    optional: true,
    decimal: true
  },
  "scores.vt.pen": {
    type: Number,
    label: "Penalty",
    allowedValues: [0,-0.1,-0.3],
    decimal: true,
    optional: true
  },
  "scores.vt.total": {
    type: Number,
    label: "Total",
    decimal: true,
    optional: true
  },
  "scores.vt.d1": {
    type: Number,
    label: "Vault 1 D",
    optional: true,
    decimal: true
  },
  "scores.vt.e1": {
    type: Number,
    label: "Vault 1 E",
    optional: true,
    decimal: true
  },
  "scores.vt.pen1": {
    type: Number,
    label: "Vault 1 Pen.",
    allowedValues: [0,-0.1,-0.3],
    decimal: true,
    optional: true
  },
  "scores.vt.total1": {
    type: Number,
    label: "Vault 1 Total",
    decimal: true,
    optional: true
  },
  "scores.vt.d2": {
    type: Number,
    label: "Vault 2 D",
    optional: true,
    decimal: true
  },
  "scores.vt.e2": {
    type: Number,
    label: "Vault 2 E",
    optional: true,
    decimal: true
  },
  "scores.vt.pen2": {
    type: Number,
    label: "Vault 2 Pen.",
    allowedValues: [0,-0.1,-0.3],
    decimal: true,
    optional: true
  },
  "scores.vt.total2": {
    type: Number,
    label: "Vault 2 Total",
    decimal: true,
    optional: true
  },
  "scores.vt.totalf": {
    type: Number,
    label: "Vault Final Total",
    decimal: true,
    optional: true
  },
  "scores.vt.video": {
    type: String,
    label: "Video",
    optional: true
  },// PBARS
  "scores.pb": {
    type: Object,
    label: "P-Bars",
    optional: true
  },
  "scores.pb.d": {
    type: Number,
    label: "D-Score",
    optional: true,
    decimal: true
  },
  "scores.pb.e": {
    type: Number,
    label: "E-Score",
    optional: true,
    decimal: true
  },
  "scores.pb.total": {
    type: Number,
    label: "Total",
    decimal: true,
    optional: true
  },
  "scores.pb.video": {
    type: String,
    label: "Video",
    optional: true
  },// HIGH BAR
  "scores.hb": {
    type: Object,
    label: "Horizontal Bar",
    optional: true
  },
  "scores.hb.d": {
    type: Number,
    label: "D-Score",
    optional: true,
    decimal: true
  },
  "scores.hb.e": {
    type: Number,
    label: "E-Score",
    optional: true,
    decimal: true
  },
  "scores.hb.total": {
    type: Number,
    label: "Total",
    decimal: true,
    optional: true
  },
  "scores.hb.video": {
    type: String,
    label: "Video",
    optional: true
  },// ALL-AROUND
  "scores.aa": {
    type: Object,
    label: "All Around",
    optional: true
  },
  "scores.aa.d": {
    type: Number,
    decimal: true,
    label: "D-Score",
    optional: true
  },
  "scores.aa.total": {
    type: Number,
    decimal: true,
    label: "Total",
    optional: true
  }
}))
