let _debounceTimer = null;

function debounce(func, timeout = 500) {
  clearTimeout(_debounceTimer);
  _debounceTimer = setTimeout(function () {
    func.apply();
  }, timeout);
}
