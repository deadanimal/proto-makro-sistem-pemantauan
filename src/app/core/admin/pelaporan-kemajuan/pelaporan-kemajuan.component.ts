import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

@Component({
  selector: 'app-pelaporan-kemajuan',
  templateUrl: './pelaporan-kemajuan.component.html',
  styleUrls: ['./pelaporan-kemajuan.component.scss']
})
export class PelaporanKemajuanComponent implements OnInit, OnDestroy {

  // Chart
  private chart: any
  private chart1: any
  private chart2: any
  private clicked: any = true
  private clicked1: any = false

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chart) {
          console.log('Chart disposed')
          this.chart.dispose()
        }
        if (this.chart1) {
          console.log('Chart disposed')
          this.chart1.dispose()
        }
        if (this.chart2) {
          console.log('Chart disposed')
          this.chart2.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
      this.getChart1()
      this.getChart2()
    })
  }

  getChart() {
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart
    let chart = am4core.create("cd11", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "DP",
        value: 260
      },
      {
        country: "BM",
        value: 230
      },
      {
        country: "IJ",
        value: 200
      },
      {
        country: "DJ",
        value: 165
      },
      {
        country: "LJ",
        value: 139
      },
      {
        country: "SS",
        value: 128
      },
      {
        country: "SP",
        value: 100
      }
    ];

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.radiusValue = "value";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 6;
    series.colors.step = 3;

    series.hiddenState.properties.endAngle = -90;

    chart.legend = new am4charts.Legend();
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("cd21", am4charts.PieChart);
    chart.startAngle = 160;
    chart.endAngle = 380;

    // Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(40);

    // Add data
    chart.data = [{
      "country": "DP",
      "litres": 501.9,
      "bottles": 1500
    }, {
      "country": "BM",
      "litres": 301.9,
      "bottles": 990
    }, {
      "country": "IJ",
      "litres": 201.1,
      "bottles": 785
    }, {
      "country": "DJ",
      "litres": 165.8,
      "bottles": 255
    }, {
      "country": "LJ",
      "litres": 139.9,
      "bottles": 452
    }, {
      "country": "SS",
      "litres": 128.3,
      "bottles": 332
    }, {
      "country": "SP",
      "litres": 99,
      "bottles": 150
    }];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = new am4core.InterfaceColorSet().getFor("background");
    pieSeries.slices.template.strokeWidth = 1;
    pieSeries.slices.template.strokeOpacity = 1;

    // Disabling labels and ticks on inner circle
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    // Disable sliding out of slices
    pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
    pieSeries.slices.template.states.getKey("hover").properties.scale = 1;
    pieSeries.radius = am4core.percent(40);
    pieSeries.innerRadius = am4core.percent(30);

    let cs = pieSeries.colors;
    cs.list = [am4core.color(new am4core.ColorSet().getIndex(0))];

    cs.stepOptions = {
      lightness: -0.05,
      hue: 0
    };
    cs.wrap = false;


    // Add second series
    let pieSeries2 = chart.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "bottles";
    pieSeries2.dataFields.category = "country";
    pieSeries2.slices.template.stroke = new am4core.InterfaceColorSet().getFor("background");
    pieSeries2.slices.template.strokeWidth = 1;
    pieSeries2.slices.template.strokeOpacity = 1;
    pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0.05;
    pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;

    pieSeries2.labels.template.disabled = true;
    pieSeries2.ticks.template.disabled = true;


    let label = chart.seriesContainer.createChild(am4core.Label);
    label.textAlign = "middle";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.adapter.add("text", function (text, target) {
      return "[font-size:18px]total[/]:\n[bold font-size:30px]" + pieSeries.dataItem.values.value.sum + "[/]";
    })
  }

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("cd31", am4charts.PieChart);
    chart.startAngle = 160;
    chart.endAngle = 380;

    // Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(40);

    // Add data
    chart.data = [{
      "country": "DP",
      "litres": 501.9,
      "bottles": 1500
    }, {
      "country": "BM",
      "litres": 301.9,
      "bottles": 990
    }, {
      "country": "IJ",
      "litres": 201.1,
      "bottles": 785
    }, {
      "country": "DJ",
      "litres": 165.8,
      "bottles": 255
    }, {
      "country": "LJ",
      "litres": 139.9,
      "bottles": 452
    }, {
      "country": "SS",
      "litres": 128.3,
      "bottles": 332
    }, {
      "country": "SP",
      "litres": 99,
      "bottles": 150
    }];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = new am4core.InterfaceColorSet().getFor("background");
    pieSeries.slices.template.strokeWidth = 1;
    pieSeries.slices.template.strokeOpacity = 1;

    // Disabling labels and ticks on inner circle
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    // Disable sliding out of slices
    pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
    pieSeries.slices.template.states.getKey("hover").properties.scale = 1;
    pieSeries.radius = am4core.percent(40);
    pieSeries.innerRadius = am4core.percent(30);

    let cs = pieSeries.colors;
    cs.list = [am4core.color(new am4core.ColorSet().getIndex(0))];

    cs.stepOptions = {
      lightness: -0.05,
      hue: 0
    };
    cs.wrap = false;


    // Add second series
    let pieSeries2 = chart.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "bottles";
    pieSeries2.dataFields.category = "country";
    pieSeries2.slices.template.stroke = new am4core.InterfaceColorSet().getFor("background");
    pieSeries2.slices.template.strokeWidth = 1;
    pieSeries2.slices.template.strokeOpacity = 1;
    pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0.05;
    pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;

    pieSeries2.labels.template.disabled = true;
    pieSeries2.ticks.template.disabled = true;


    let label = chart.seriesContainer.createChild(am4core.Label);
    label.textAlign = "middle";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.adapter.add("text", function (text, target) {
      return "[font-size:18px]total[/]:\n[bold font-size:30px]" + pieSeries.dataItem.values.value.sum + "[/]";
    })
  }
}
