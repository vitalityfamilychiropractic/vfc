$(function(context) {
  $('#build').innerHTML = context.env.CF_PAGES_BRANCH + ' ' + context.env.CF_PAGES_COMMIT_SHA;
});
