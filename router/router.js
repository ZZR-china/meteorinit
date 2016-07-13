// 首页
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});
//概况
var overview = FlowRouter.group({
  prefix: "/overview",
  name: 'overviewGroup'
});

overview.route('/', {
  name: 'overview',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "overview"});
  }
});