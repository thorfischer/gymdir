TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Gymnasts = new Tabular.Table({
  name: "Gymnasts",
  collection: Gymnasts,
  columns: [
    {data: "lname", title: "Last Name"},
    {data: "fname", title: "First Name"},
    {data: "noc", title: "NOC"},
    {data: "comp", title: "Competition"},
    {data: "comptype", title: "Competition Type"},
    {
    	data: "compdate", 
    	title: "Competition Date",
    	render: function (date) {
    		return moment(date).format('MM-YYYY');
    	}
    },
    {data: "scores.fx.d", title: "FX D-Score"},
    {data: "scores.fx.total", title: "FX Total"},
    {data: "scores.ph.d", title: "PH D-Score"},
    {data: "scores.ph.total", title: "PH Total"},
    {data: "scores.sr.d", title: "SR D-Score"},
    {data: "scores.sr.total", title: "SR Total"},
    {data: "scores.vt.d1", title: "VT1 D"},
    {data: "scores.vt.total1", title: "VT1 Total"},
    {data: "scores.vt.d2", title: "VT2 D"},
    {data: "scores.vt.total2", title: "VT2 Total"},
    {data: "scores.vt.d", title: "VT D-Score"},
    {data: "scores.vt.total", title: "VT Total"},
    {data: "scores.vt.totalf", title: "VT Total [CIII]"},
    {data: "scores.pb.d", title: "PB D-Score"},
    {data: "scores.pb.total", title: "PB Total"},
    {data: "scores.hb.d", title: "HB D-Score"},
    {data: "scores.hb.total", title: "HB Total"},
    {data: "scores.aa.d", title: "AA D-Score"},
    {data: "scores.aa.total", title: "All Around Total"}
  ]
});