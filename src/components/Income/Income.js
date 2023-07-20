import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import { Data } from "../../Assets/Data";
import { Bar, Doughnut } from "react-chartjs-2";

Chart.register(CategoryScale);

const Income = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Employer\n $73.500",
        data: Data.map((data) => data.userGain),
        backgroundColor: "#0300A3",
        borderColor: "#0300A3",
        borderWidth: 1,
      },
      {
        label: "Employee\n $52,500",
        data: Data.map((data) => data.userLost),
        backgroundColor: "#4935FF",
        borderColor: "#4935FF",
        borderWidth: 1,
      },
      {
        label: "Total Interest\n $244,313",
        data: Data.map((data) => data.userb),
        backgroundColor: "#85AFFF",
        borderWidth: 1,
      },
    ],
  });

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        fontSize = "25";
        ctx.font = fontSize + "px sans-serif";
        ctx.textBaseline = "top";
        var text = "78%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          // textY = height / 2;
          textY = height / 2 - fontSize / 3;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  const plugins1 = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        fontSize = "25";
        ctx.font = fontSize + "px sans-serif";
        ctx.textBaseline = "top";
        var text = "95%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          // textY = height / 2;
          textY = height / 2 - fontSize / 3;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  const plugins2 = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        fontSize = "25";
        ctx.font = fontSize + "px sans-serif";
        ctx.textBaseline = "top";
        var text = "59%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          // textY = height / 2;
          textY = height / 2 - fontSize / 3;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  const chartData1 = {
    labels: ["yes", "no"],

    datasets: [
      {
        label: "Poll",
        data: [22, 78],
        backgroundColor: ["#D3F7EE", "#23D5AA"],
        borderColor: ["#D3F7EE", "#23D5AA"],
      },
    ],
  };
  const chartData2 = {
    labels: ["yes", "no"],

    datasets: [
      {
        label: "Poll",
        data: [5, 95],
        backgroundColor: ["#D3F7EE", "#23D5AA"],
        borderColor: ["#D3F7EE", "#23D5AA"],
      },
    ],
  };
  const chartData3 = {
    labels: ["yes", "no"],

    datasets: [
      {
        label: "Poll",
        data: [31, 59],
        backgroundColor: ["#D3F7EE", "#23D5AA"],
        borderColor: ["#D3F7EE", "#23D5AA"],
      },
    ],
  };

  return (
    <>
      <div className="income flex flex-col p-2 px-5 mt-10  md:w-[40%] md:h-screen md:mt-0 md:py-10 overflow-y-scroll">
        <div className="bell text-right p-2 md:hidden">
          <div className="max-w-min relative float-right">
            <span className="absolute w-[6px] h-[6px] rounded-lg bg-blue-500 right-0 top-[-2px]"></span>
            <i class="bx bx-bell text-gray-500 text-lg font-normal"></i>
          </div>
        </div>

        <div className="upperSection mt-0">
          <div>
            <p className="text-[14px] text-[#7E70FF] font-bold">
              Retirement Income
            </p>
            <p className="text-2xl text-gray-800 font-semibold">
              Starting Year 2056
            </p>
          </div>
          <div className="flex flex-wrap justify-between mt-7">
            <div className="w-full mb-4">
              <p className="text-2xl font-bold text-gray-900">$300,000</p>
              <p className=" border-0 border-b-2 pb-3 text-gray-500 text-[10px] font-bold border-[#C1D6FF]">
                My Goal
              </p>
            </div>
            <div className="w-[40%]">
              <p className="text-gray-800 text-1xl font-bold">$300,000</p>
              <p className=" border-0 border-b-2 pb-3 text-gray-500 text-[10px] font-bold border-[#C1D6FF]">
                My Goal
              </p>
            </div>
            <div className="w-[40%]">
              <p className="text-gray-800 text-1xl font-bold">$300,000</p>
              <p className=" border-0 border-b-2 pb-3 text-gray-500 text-[10px] font-bold border-[#C1D6FF]">
                My Goal
              </p>
            </div>
          </div>
        </div>
        <div className="lowerSection mt-10">
          <div>
            <p className="text-gray-600 font-bold text-[14px]">
              Contribution Overtime
            </p>
            <div className="barchart w-[100%] h-[300px]">
              <Bar
                data={chartData}
                options={{
                  barThickness: 15,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top",
                      align: "center",
                      labels: {
                        // color: "darkred",
                        boxWidth: 10,
                        boxHeight: 5,
                        useBorderRadius: true,
                        borderRadius: 2,
                        font: {
                          weight: "bold",
                        },
                      },
                    },
                  },

                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      stacked: true,
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      stacked: true,
                      grid: {
                        display: true,
                      },
                      ticks: {
                        beginAtZero: true,
                        callback: function (value, index, values) {
                          return "$" + value;
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className="upperSectionD hidden md:block mt-3">
          <div>
            <p className="text-[18px] text-gray-800 font-semibold">
              How do I Compare to my peers?
            </p>
            <p className="text-gray-500 text-[10px] font-bold">
              These numbers represent current goal achievement.
            </p>
          </div>
          <div className="choice mt-5 md:flex md:mt-3 md:justify-between">
            <div className="choose md:w-[35%] md:text-[12px]">
              <div className="flex items-baseline justify-between pb-2 border-0 border-b-2 md:pb-1">
                <div className="w-[30%] md:w-[20%] text-[15px] md:text-[12px] text-gray-800 font-semibold">
                  Age:
                </div>
                <div className="w-[60%] md:w-[70%] md:text-[12px]">
                  <label for="underline_select" className="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    class="block md:text-[12px] md:py-1 py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected>Under 30</option>
                    <option value="US">Under 30</option>
                    <option value="CA">Under 40</option>
                    <option value="FR">Under 50</option>
                    <option value="DE">Under 60</option>
                  </select>
                </div>
              </div>
              <div className="flex items-baseline justify-between pb-2 border-0 border-b-2 mt-2 md:mt-1 md:pb-1">
                <div className="w-[30%] md:w-min text-[15px] md:text-[12px] text-gray-800 font-semibold">
                  Salary:
                </div>
                <div className="w-[60%] ">
                  <label for="underline_select" className="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    class="block py-2.5 md:py-1 px-0 w-full text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer md:text-[12px]"
                  >
                    <option selected>K 20 - K 30</option>
                    <option value="40-50">K 40 - K 50</option>
                    <option value="50-60">K 50 - K 60</option>
                    <option value="60-70">K 60 - K 70</option>
                    <option value="70-80">K 80 - K 90</option>
                  </select>
                </div>
              </div>
              <div className="flex items-baseline justify-between pb-2 border-0 border-b-2 mt-2 md:mt-1 md:pb-1">
                <div className="w-[30%] md:w-min text-[15px] md:text-[12px] text-gray-800 font-semibold ">
                  Gender
                </div>
                <div className="w-[60%] ">
                  <label for="underline_select" className="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    class="block py-2.5 md:py-1 md:text-[12px] px-0 w-full text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected>Male</option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="doughnut mt-7 flex justify-around md:mt-0 md:items-center md:w-[60%]">
              <div className="d1 w-[30%]">
                <Doughnut
                  data={chartData1}
                  plugins={plugins}
                  options={{
                    rotation: 270,
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        enabled: false,
                      },
                    },
                    cutout: 40,
                    elements: {
                      customCutout: true,
                    },
                  }}
                />
                <p className="text-gray-600  text-[12px] font-bold text-center pt-1">
                  Average
                </p>
              </div>
              <div className="d1 w-[30%]">
                <Doughnut
                  plugins={plugins1}
                  data={chartData2}
                  options={{
                    rotation: 270,
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        enabled: false,
                      },
                    },
                    cutout: 40,
                    elements: {
                      customCutout: true,
                    },
                  }}
                />
                <p className="text-gray-600  text-[12px] font-bold text-center pt-1">
                  Top
                </p>
              </div>
              <div className="d1 w-[30%]">
                <Doughnut
                  plugins={plugins2}
                  data={chartData3}
                  options={{
                    rotation: 270,
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        enabled: false,
                      },
                    },
                    cutout: 40,
                    elements: {
                      customCutout: true,
                    },
                  }}
                />
                <p className="text-gray-600  text-[12px] font-bold text-center pt-1">
                  Me
                </p>
              </div>
              {/* <div className="d2">
                <Doughnut data={chartData} />
              </div>
              <div className="d3">
                <Doughnut data={chartData} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Income;
