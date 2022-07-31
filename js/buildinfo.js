$(function() {
  document.getElementById('build').innerHTML = await fetch('/buildinfo');
}
