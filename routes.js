FlowRouter.route('/', {
  triggersEnter: [function (context, redirect) {
    redirect('intro1');
  }]
});

FlowRouter.route('/intro1', {
  action: function (params) {
    BlazeLayout.render("appLayout", {content: "intro1"});
  },
  name: "intro1"
});

// FlowRouter.route('/trending', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "trending"});
//   },
//   name: "trending"
// });

// FlowRouter.route('/posts/new', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "newPost"});
//   },
//   name: "posts.new"
// });

// FlowRouter.route('/posts/:postId', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "postsShow"});
//   },
//   name: "posts.show"
// });

// FlowRouter.route('/notifications', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "notifications"});
//   },
//   name: "notifications"
// });

// FlowRouter.route('/profile', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "profile"});
//   },
//   name: "profile"
// });

// FlowRouter.route('/signIn', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "signIn"});
//   },
//   name: "signIn"
// });

// FlowRouter.route('/signUp', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "signUp"});
//   },
//   name: "signUp"
// });

// FlowRouter.route('/notVerified', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "notVerified"});
//   },
//   name: "notVerified"
// });

// FlowRouter.route('/settings', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "settings"});
//   },
//   name: "settings"
// });

// FlowRouter.route('/about', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "about"});
//   },
//   name: "about"
// });

// FlowRouter.route('/terms', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "terms"});
//   },
//   name: "terms"
// });

// FlowRouter.route('/privacy', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "privacy"});
//   },
//   name: "privacy"
// });

// FlowRouter.route('/users/:userId', {
//   action: function (params) {
//     BlazeLayout.render("appLayout", {content: "usersShow"});
//   },
//   name: "users.show"
// });
