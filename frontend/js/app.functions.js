// Toast Alert
const initializeToastAlert = (msg, type) => {
  if (msg.length > 0 || type.length > 0) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 4500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: type,
      title: msg,
    });
  }
};

// Select2
const initializeSelect2 = (arr_rand_ids) => {
  let multipleSelectCollection = arr_rand_ids;
  console.log(multipleSelectCollection);
  if (multipleSelectCollection.length > 0) {
    for (let i = 0; i < multipleSelectCollection.length; i++) {
      let id = "#" + multipleSelectCollection[i];
      $(id).each(function () {
        if (id) {
          $(this).select2({
            theme: "bootstrap-5",
            width: $(this).data("width")
              ? $(this).data("width")
              : $(this).hasClass("w-100")
              ? "100%"
              : "style",
            placeholder: $(this).data("placeholder"),
            closeOnSelect: false,
          });
        }
      });
    }
  } else {
    console.log("no selects in this form ");
  }
};

// Dashboard Tables
const initiializeDefaultDataTable = () => {
  // DataTable initialization
  let pageTitle = $("title").text().replace("Team Access Beta | ", "");

  if (pageTitle !== "Exam Results" || pageTitle !== "Dashboard") {
    let formattedDate = new Date().toISOString().split("T")[0];

    new DataTable("#tblData", {
      layout: {
        topStart: {
          buttons: [
            {
              className: "btn btn-primary",
              text: "Export",
              extend: "collection",
              buttons: [
                "<h3>Options</h3>",
                {
                  title: `${pageTitle} _PDF_${formattedDate}`,
                  text: '<i className="bi bi-file-pdf text-danger"></i> PDF',
                  extend: "pdfHtml5",
                  exportOptions: {
                    columns: ":visible:not(:last-child)",
                  },
                },
                {
                  title: `${pageTitle} _CSV_${formattedDate}`,
                  text: '<i className="bi bi-file-text text-info"></i> CSV',
                  extend: "csvHtml5",
                  exportOptions: {
                    columns: ":visible:not(:last-child)",
                  },
                },
                {
                  title: `${pageTitle} _Excel_${formattedDate}`,
                  text: '<i className="bi bi-file-excel text-success"></i> Excel',
                  extend: "excelHtml5",
                  exportOptions: {
                    columns: ":visible:not(:last-child)",
                  },
                },
              ],
              init: function (api, node, config) {
                $(node).removeClass("dt-button buttons-collection");
              },
            },
          ],
        },
      },
    });

    $(".highlight-checkbox").each(function () {
      $(this).change(function () {
        var row = $(this).closest("tr");
        if ($(this).is(":checked")) {
          row.addClass("highlight-row");
        } else {
          row.removeClass("highlight-row");
        }
      });

      if ($(this).attr("id")) {
        var row = $(this).closest("tr");
        row.addClass("highlight-row");
        $(this).prop("checked", true);
      }
    });
  }
};

const showAllRows = (button) => {
  const table = $(button).closest(".table-responsive").find("table");
  table.find(".hidden-row").removeClass("d-none");
  $(button).addClass("d-none");
  $(button).next().removeClass("d-none"); // Show "Show Less" button
};

const showAllHiddenRows = (button) => {
  const table = $(button).closest(".table-responsive").find("table");
  const rowsToHide = table.find(".hidden-row").slice(10);
  rowsToHide.addClass("d-none"); // Hide rows
  $(button).addClass("d-none"); // Hide "Show Less" button
  $(button).prev().removeClass("d-none"); // Show "Show More" button
};

// Dasboard Charts
const generate_chart_php = (chart_data) => {
  for (let i = 0; i < chart_data.length; i++) {
    let table = new DataTable("#tblChartData" + chart_data[i].id);

    const chart = Highcharts.chart("tcGraph" + chart_data[i].id, {
      chart: {
        type: chart_data[i].type,
        styledMode: true,
      },
      title: {
        text: chart_data[i].title,
      },
      series: [
        {
          data: chartData(table),
        },
      ],
    });

    table.on("draw", function () {
      chart.series[0].setData(chartData(table));
    });
  }
  return chart_data;
};

const chartData = (table) => {
  var counts = {};

  table
    .column(1, { search: "applied" })
    .data()
    .each(function (val) {
      if (counts[val]) {
        counts[val] += 1;
      } else {
        counts[val] = 1;
      }
    });

  return Object.entries(counts).map((e) => ({
    name: e[0],
    y: e[1],
  }));
};

// App Navigation
const openNav = () => {
  $("#nav").css("bottom", "0");
  $("#closeNav").css("animation", "dark 0.1s 0.5s forwards");
};

const closeNav = () => {
  $("#nav").css("bottom", "-100%");
  $("#closeNav").css("animation", "unset");
};

// App Navigation
const toggleTheme = () => {
  let currentTheme = localStorage.getItem("theme");

  if (currentTheme === null || currentTheme === undefined) {
    localStorage.setItem("theme", "dark");
    $("body").addClass("dark-mode");
  } else {
    if (currentTheme === "light") {
      localStorage.setItem("theme", "dark");
      $("body").addClass("dark-mode");
    } else {
      localStorage.setItem("theme", "light");
      $("body").removeClass("dark-mode");
    }
  }
};
