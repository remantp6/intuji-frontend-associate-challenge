// js code for collapsible sidebar
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");

function updateSidebarState() {
  if (window.innerWidth < 1024) {
    sidebar.classList.remove("collapsed");
    sidebar.classList.add("mobile-collapsed");
  } else {
    sidebar.classList.remove("mobile-active", "mobile-collapsed");
    sidebar.classList.remove("collapsed");
  }
}

hamburger.addEventListener("click", () => {
  if (window.innerWidth >= 1024) {
    sidebar.classList.toggle("collapsed");
  } else {
    sidebar.classList.toggle("mobile-active");
    sidebar.classList.toggle("mobile-collapsed");
  }
});

window.addEventListener("click", (e) => {
  if (
    window.innerWidth < 1024 &&
    !sidebar.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    sidebar.classList.remove("mobile-active");
    sidebar.classList.add("mobile-collapsed");
  }
});

window.addEventListener("resize", updateSidebarState);
window.addEventListener("DOMContentLoaded", updateSidebarState);



// chart 
// Chart data
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Data for the blue line (values between 5k and 20k)
const blueData = [
  14000, 11000, 14000, 9500, 7000, 15500, 13000, 8000, 21000, 9000, 18000,
  14000,
];

// Data for the yellow line (values between 4k and 10k)
const yellowData = [
  5000, 5500, 5800, 9500, 6000, 6800, 10500, 5000, 4300, 5200, 7500, 5000, 9500,
];

// Chart configuration
const ctx = document.getElementById("analytics-chart").getContext("2d");
const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: days,
    datasets: [
      {
        label: "Label 1",
        data: blueData,
        borderColor: "#5a5cdb",
        backgroundColor: "rgba(90, 92, 219, 0.15)",
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Label 1",
        data: yellowData,
        borderColor: "#fdb01d",
        backgroundColor: "rgba(253, 176, 29, 0.15)",
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#333",
        bodyColor: "#666",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            return (
              context.dataset.label + ": " + context.parsed.y.toLocaleString()
            );
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            if (value === 0) return "0k";
            return value / 1000 + "k";
          },
          stepSize: 5000,
          color: "#aaa",
        },
        grid: {
          color: "rgba(200, 200, 200, 0.15)",
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#555",
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  },
});