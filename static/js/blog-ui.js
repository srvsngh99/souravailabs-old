(function () {
  var THEME_STORAGE_KEY = "site-theme";

  function normalizeTheme(value) {
    return value === "dark" ? "dark" : "light";
  }

  function currentTheme() {
    return normalizeTheme(document.documentElement.getAttribute("data-theme"));
  }

  function applyTheme(theme, buttons) {
    var normalized = normalizeTheme(theme);
    document.documentElement.setAttribute("data-theme", normalized);

    buttons.forEach(function (button) {
      var isDark = normalized === "dark";
      button.setAttribute("aria-pressed", isDark ? "true" : "false");
      button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      button.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  function initThemeToggle() {
    var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-theme-toggle]"));
    if (buttons.length === 0) {
      return;
    }

    applyTheme(currentTheme(), buttons);

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var nextTheme = currentTheme() === "dark" ? "light" : "dark";
        applyTheme(nextTheme, buttons);
        try {
          localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        } catch (err) {
          /* Ignore private mode/localStorage restrictions */
        }
      });
    });
  }

  function splitTokens(value) {
    return String(value || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
  }

  function intersects(tokens, selected) {
    if (!selected || selected.size === 0) {
      return true;
    }
    for (var i = 0; i < tokens.length; i += 1) {
      if (selected.has(tokens[i])) {
        return true;
      }
    }
    return false;
  }

  function sortItems(items, sortMode) {
    var sorted = items.slice();
    sorted.sort(function (a, b) {
      var titleA = String(a.dataset.title || "");
      var titleB = String(b.dataset.title || "");
      var dateA = Number(a.dataset.date || 0);
      var dateB = Number(b.dataset.date || 0);

      if (sortMode === "a-z") {
        return titleA.localeCompare(titleB);
      }
      if (sortMode === "z-a") {
        return titleB.localeCompare(titleA);
      }
      return dateB - dateA;
    });
    return sorted;
  }

  function initBlogHub(hub) {
    var grid = hub.querySelector("[data-blog-grid]");
    var list = hub.querySelector("[data-blog-list]");
    if (!grid || !list) {
      return;
    }

    var gridItems = Array.prototype.slice.call(grid.querySelectorAll("[data-post-item]"));
    var listItems = Array.prototype.slice.call(list.querySelectorAll("[data-post-item]"));
    var searchInput = hub.querySelector("[data-search-control]");
    var sortSelect = hub.querySelector("[data-sort-control]");
    var resetBtn = hub.querySelector("[data-reset-filters]");
    var viewBtns = Array.prototype.slice.call(hub.querySelectorAll("[data-view-toggle]"));
    var resultCount = hub.querySelector("[data-results-count]");
    var filterInputs = Array.prototype.slice.call(hub.querySelectorAll("[data-filter-group]"));
    var tabButtons = Array.prototype.slice.call(document.querySelectorAll("[data-category-tab]"));

    var state = {
      tab: "all",
      query: "",
      sort: "newest",
      view: "grid",
      filters: {
        category: new Set(),
      },
    };

    function itemMatches(item) {
      var title = String(item.dataset.title || "");
      var summary = String(item.dataset.summary || "");
      var categories = splitTokens(item.dataset.category);

      if (state.tab !== "all" && categories.indexOf(state.tab) === -1) {
        return false;
      }

      if (!intersects(categories, state.filters.category)) {
        return false;
      }

      if (state.query) {
        var haystack = (title + " " + summary).toLowerCase();
        if (haystack.indexOf(state.query) === -1) {
          return false;
        }
      }

      return true;
    }

    function apply() {
      var sortedGrid = sortItems(gridItems, state.sort);
      var sortedList = sortItems(listItems, state.sort);

      sortedGrid.forEach(function (item) {
        grid.appendChild(item);
      });
      sortedList.forEach(function (item) {
        list.appendChild(item);
      });

      var visibleCount = 0;

      sortedGrid.forEach(function (item) {
        var match = itemMatches(item);
        item.hidden = !match;
        if (match) {
          visibleCount += 1;
        }
      });

      sortedList.forEach(function (item) {
        item.hidden = !itemMatches(item);
      });

      hub.querySelector("[data-results-view]").setAttribute("data-results-view", state.view);

      viewBtns.forEach(function (btn) {
        btn.classList.toggle("is-active", btn.getAttribute("data-view-toggle") === state.view);
      });

      if (resultCount) {
        resultCount.textContent = visibleCount + " posts";
      }

      tabButtons.forEach(function (btn) {
        btn.classList.toggle("is-active", btn.getAttribute("data-category-tab") === state.tab);
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        state.query = searchInput.value.trim().toLowerCase();
        apply();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        state.sort = sortSelect.value;
        apply();
      });
    }

    filterInputs.forEach(function (input) {
      input.addEventListener("change", function () {
        var group = input.getAttribute("data-filter-group");
        if (!group || !state.filters[group]) {
          return;
        }

        if (input.checked) {
          state.filters[group].add(input.value);
        } else {
          state.filters[group].delete(input.value);
        }
        apply();
      });
    });

    viewBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.view = btn.getAttribute("data-view-toggle") || "grid";
        apply();
      });
    });

    tabButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.tab = btn.getAttribute("data-category-tab") || "all";
        apply();
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        state.tab = "all";
        state.query = "";
        state.sort = "newest";
        state.filters.category.clear();

        if (searchInput) {
          searchInput.value = "";
        }
        if (sortSelect) {
          sortSelect.value = "newest";
        }
        filterInputs.forEach(function (input) {
          input.checked = false;
        });

        apply();
      });
    }

    apply();
  }

  function initCopyLink() {
    var copyButtons = Array.prototype.slice.call(document.querySelectorAll("[data-copy-link]"));
    copyButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var url = button.getAttribute("data-copy-link") || window.location.href;
        var original = button.textContent;

        function done() {
          button.textContent = "Copied";
          window.setTimeout(function () {
            button.textContent = original;
          }, 1400);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(done).catch(function () {
            button.textContent = url;
          });
          return;
        }

        var input = document.createElement("input");
        input.value = url;
        document.body.appendChild(input);
        input.select();
        try {
          document.execCommand("copy");
          done();
        } catch (err) {
          button.textContent = url;
        }
        document.body.removeChild(input);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initThemeToggle();
    var hubs = Array.prototype.slice.call(document.querySelectorAll("[data-blog-hub]"));
    hubs.forEach(initBlogHub);
    initCopyLink();
  });
})();
