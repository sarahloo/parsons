$(function () {
  var
    filters = {
      acquisition: null,
      reason: null,
      utility: null
    };

  function updateFilters() {
    $('.container').addClass('offscreen').filter(function () {
      var
        self = $(this),
        result = true; // not guilty until proven guilty

      Object.keys(filters).forEach(function (filter) {
        if (filters[filter] && (filters[filter] != 'None') && (filters[filter] != 'Any')) {
          result = result && filters[filter] === self.data(filter);
        }
      });

      return result;
    }).removeClass( 'offscreen' );
  }

  function bindDropdownFilters() {
    Object.keys(filters).forEach(function (filterName) {
      $('#' + filterName + '-filter').on('change', function () {
        filters[filterName] = this.value;
        updateFilters();
      });
    });
  }

  bindDropdownFilters();
})();