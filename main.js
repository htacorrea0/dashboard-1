// --- ITEM SELECTED | SIDE MENU --- //
const menuItems = document.querySelectorAll('.component')

menuItems.forEach(item =>
  item.addEventListener('click', function () {
    menuItems.forEach(item => item.classList.remove('selected'))
    this.classList.add('selected')
  })
)

// --- HIDDEN | SIDE MENU --- //
const sideMenu = document.querySelector('.nav')
const button = document.querySelector('.chevron-icon')
const container = document.querySelector('.container')

button.addEventListener('click', () => {
  sideMenu.classList.toggle('hidden')
  container.classList.toggle('changed')
})

// --- BAR CHART | DEMOGRAPHIC --- //
const demographic = {
  first: 83,
  second: 27
}

const progressBars = document.querySelectorAll('.progress-bar-group div')

for (let progressBar of progressBars) {
  const progressBarName = progressBar.className

  progressBar.setAttribute(
    'style',
    `width: ${demographic[`${progressBarName}`]}%`
  )
}

// --- PROGRESS BAR | TOP CHANNEL --- //
const topChannels = {
  Facebook: 70,
  Instagram: 50,
  Linkedin: 90,
  Youtube: 30
}

const channels = document.querySelectorAll('.channel-name')

for (let channel of channels) {
  const channelName = channel.textContent
  const bar = channel.parentElement.childNodes[9].childNodes[1]

  bar.setAttribute('style', `width: ${topChannels[`${channelName}`]}%`)
}

// --- CHARTS.JS --- //
// Doughnut //
const doughnutChart = document.getElementById('myChart')

const dataDoughnut = {
  labels: ['Amônia', 'CO2', 'Benzeno', 'Óxido Nítrico'],
  datasets: [
    {
      label: 'Ranking e Umidade',
      data: [33.16, 25.69, 23.68, 17.47],
      backgroundColor: [
        'rgba(253, 31, 155, 1)',
        'rgba(48, 217, 135, 1)',
        'rgba(1, 126, 250, 1)',
        'rgba(255, 251, 10, 1)'
      ],
      hoverOffset: 4,
      cutout: '60%'
    }
  ]
}

const configDoughnut = {
  type: 'doughnut',
  data: dataDoughnut,
  options: {
    responsive: true,

    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: "'Poppins', 'sans-serif'",
            size: 10,
            weight: 400
          },
          padding: 15,
          color: 'rgba(0, 0, 0, 1)',
          usePointStyle: true
        }
      },
      tooltip: {
        enable: false,
        position: 'average',
        external: 'abc'
      }
    }
  }
}

const myChart = new Chart(doughnutChart, configDoughnut)

// Line //
const lineChart = document.getElementById('chartMain')

const dataLine = {
  labels: [
    '0h',
    '1h',
    '2h',
    '3h',
    '4h',
    '5h',
    '6h',
    '7h',
    '8h',
    '9h',
    '10h',
    '11h',
    '12h',
    '13h',
    '14h',
    '15h',
    '16h',
    '17h',
    '18h',
    '19h',
    '20h',
    '21h',
    '22h',
    '23h'
  ],
  datasets: [
    {
      label: 'Amônia',
      data: [302, 357, 249, 299, 332, 294, 394, 249, 315, 349, 288, 401, 256, 359, 348, 254, 298, 314, 248, 375, 225, 236, 245, 225],
      backgroundColor: 'rgba(1, 126, 250, 1)',
      borderColor: 'rgba(1, 126, 250, 1)',
      borderWidth: 2
    },
    {
      label: 'CO2',
      data: [382, 257, 235, 359, 369, 410, 253, 347, 265, 235, 349, 316, 369, 298, 489, 348, 421, 235, 286, 335, 289, 359, 346, 321],
      backgroundColor: 'rgba(48, 217, 135, 1)',
      borderColor: 'rgba(48, 217, 135, 1)',
      borderWidth: 2
    },
    {
      label: 'Benzeno',
      data: [423, 367, 492, 388, 315, 458, 475, 334, 409, 311, 482, 440, 394, 328, 412, 358, 499, 468, 423, 337, 461, 375, 341, 448],
      backgroundColor: 'rgba(253, 31, 155, 1)',
      borderColor: 'rgba(253, 31, 155, 1)',
      borderWidth: 2
    },
    {
      label: 'Óxido nítrico',
      data: [187, 120, 255, 92, 174, 238, 211, 153, 276, 196, 275, 125, 184, 245, 221, 151, 265, 208, 256, 278, 124, 289, 260, 169],
      backgroundColor: 'rgba(255, 251, 10, 1)',
      borderColor: 'rgba(255, 251, 10, 1)',
      borderWidth: 2
    }
  ]
}

const genericOptions = {
  responsive: true,
  hoverBackgroundColor: 'white',
  hoverRadius: 7,
  hoverBorderWidth: 3,
  onHover: { mode: ['dataset', 'tooltip'] },
  scales: {
    x: { grid: { display: false } },
    y: {
      min: 0,
      max: 600,
      ticks: { stepSize: 100 },
      grid: { borderDash: [5, 5] }
    }
  },
  layout: {
    padding: {
      bottom: 10,
      left: 15,
      right: 25
    }
  },
  interaction: {
    mode: 'index',
    intersect: false
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      padding: 16,
      titleFont: {
        family: "'Poppins', 'sans-serif'",
        size: 16,
        weight: 'normal'
      },
      backgroundColor: 'rgba(8, 26, 81, 1)',
      bodyColor: 'rgba(255, 255, 255, 0.7)',
      bodyFont: {
        family: "'Poppins', 'sans-serif'",
        size: 15
      },
      bodySpacing: 8,
      boxHeight: 6,
      boxPadding: 8,
      usePointStyle: true,
      callbacks: {
        title: ctx => {
          return `${ctx[0].label}`
        },
        label: ctx => {
          return `${ctx.dataset.label}:  ${ctx.raw} ppm`
        }
      }
    }
  }
}

const annotationLine = {
  id: 'annotationLine',
  beforeDraw: chart => {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const ctx = chart.ctx
      ctx.save()
      const activePoint = chart.tooltip._active[0]
      const display = lineChart.getContext('2d')

      const gradient = display.createLinearGradient(0, 0, 0, 330)

      gradient.addColorStop(0, 'rgba(37, 75, 209, 0)')
      gradient.addColorStop(1, 'rgba(37, 75, 209, 0.1)')

      ctx.beginPath()
      ctx.moveTo(activePoint.element.x, chart.chartArea.top)
      ctx.lineTo(activePoint.element.x, chart.chartArea.bottom)
      ctx.lineWidth = 40
      ctx.strokeStyle = gradient
      // ctx.strokeStyle = 'rgba(37, 75, 209, 0.2)'
      ctx.strokeRect(activePoint.element.x, chart.chartArea.top, 0, 282)
      ctx.restore()
    }
  }
}

const lineDash = {
  id: 'lineDash',
  beforeDraw: chart => {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const ctx = chart.ctx
      ctx.save()
      const activePoint = chart.tooltip._active[0]

      ctx.beginPath()
      ctx.setLineDash([5, 5])
      ctx.moveTo(activePoint.element.x, chart.chartArea.top)
      ctx.lineTo(activePoint.element.x, chart.chartArea.bottom)
      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(1, 126, 250, 0.8)'
      ctx.stroke()
      ctx.restore()
    }
  }
}

const configLine = {
  type: 'line',
  data: dataLine,
  options: genericOptions,
  plugins: [annotationLine, lineDash]
}

const chartMain = new Chart(lineChart, configLine)
