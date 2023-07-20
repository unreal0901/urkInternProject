import React, { useState } from "react";
import Chart from "chart.js/auto";
import { ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const Compare = () => {
  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "78%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
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
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "95%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
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
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "59%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  const chartData = {
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
      <div className="compare flex flex-col  px-5 mt-10 md:w-[30%] md:h-min md:mt-5">
        <div className="bell text-right p-2 md:hidden">
          <div className="max-w-min relative float-right">
            <i class="bx bx-x text-gray-500 text-lg font-normal"></i>
          </div>
        </div>

        <div className="upperSectionD md:hidden ">
          <div>
            <p className="text-[18px] text-gray-800 font-semibold">
              How do I Compare to my peers?
            </p>
            <p className="text-gray-500 text-[10px] font-bold">
              These numbers represent current goal achievement.
            </p>
          </div>
          <div className="choice mt-5">
            <div className="choose">
              <div className="flex items-baseline justify-between pb-2 border-0 border-b-2">
                <div className="w-[30%] text-[15px] text-gray-800 font-semibold">
                  Age:
                </div>
                <div className="w-[60%]">
                  <label for="underline_select" class="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected>Under 30</option>
                    <option value="US">Under 30</option>
                    <option value="CA">Under 40</option>
                    <option value="FR">Under 50</option>
                    <option value="DE">Under 60</option>
                  </select>
                </div>
              </div>
              <div className="flex items-baseline justify-between pb-2 border-0 border-b-2 mt-2">
                <div className="w-[30%] text-[15px] text-gray-800 font-semibold">
                  Salary:
                </div>
                <div className="w-[60%]">
                  <label for="underline_select" class="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected>K 20 - K 30</option>
                    <option value="40-50">K 40 - K 50</option>
                    <option value="50-60">K 50 - K 60</option>
                    <option value="60-70">K 60 - K 70</option>
                    <option value="70-80">K 80 - K 90</option>
                  </select>
                </div>
              </div>
              <div className="flex items-baseline justify-between pb-2 border-0 border-b-2 mt-2">
                <div className="w-[30%] text-[15px] text-gray-800 font-semibold ">
                  Gender
                </div>
                <div className="w-[60%]">
                  <label for="underline_select" class="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0  appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected>Male</option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="doughnut mt-7 flex justify-around">
              <div className="d1 w-[30%]">
                <Doughnut
                  data={chartData}
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

        <div className="lowerSectionD mt-10 md:mt-0 md:py-10 md:w-[80%] md:mx-auto md:bg-[#fafafa] md:rounded-lg md:px-4">
          <p className="text-[18px] text-gray-800 font-semibold">
            Retirement Strategy
          </p>
          <div className="slider">
            <label
              for="minmax-range"
              className="w-[30%] text-[12px] text-gray-800 font-semibold"
            >
              Employee Contribution
            </label>
            <div className="flex items-baseline gap-5 md:justify-between">
              <input
                id="minmax-range2"
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                class="w-[60%] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                onChange={(e) => {
                  let sp = e.target.id[e.target.id.length - 1];
                  let el = document.getElementById("s" + sp);
                  el.innerText = e.target.value;
                }}
              />
              <span id="s2" className="w-20%"></span>
              <span className="w-20%">%</span>
            </div>
          </div>
          <div className="slider mt-4">
            <label
              for="minmax-range"
              className="w-[30%] text-[12px] text-gray-800 font-semibold "
            >
              Retirement Age
            </label>
            <div className="flex items-baseline gap-5 md:justify-between">
              <input
                id="minmax-range1"
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                class="w-[60%] mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                onChange={(e) => {
                  let sp = e.target.id[e.target.id.length - 1];
                  let el = document.getElementById("s" + sp);
                  el.innerText = e.target.value;
                }}
              />
              <span id="s1" className="w-[20%]"></span>
            </div>
          </div>

          <div class="mt-4">
            <div className="flex justify-between items-baseline">
              <p className="text-[12px] text-gray-800 font-semibold">
                Employer Contribution
              </p>
              <p className="text-[15px] text-gray-800 font-semibold">8.4%</p>
            </div>
            <div className="flex justify-between items-baseline mt-4">
              <p className="text-[12px] text-gray-800 font-semibold">
                Interest Rate
              </p>
              <p className="text-[15px] text-gray-800 font-semibold">5%</p>
            </div>
          </div>
          <div className="w-full bbutton mt-5">
            <button className="text-[12px] w-full h-[50px] bg-[#4935FF] mb-10 text-white font-bold rounded-lg md:mb-4">
              Update
            </button>
          </div>

          <div className="hidden md:block">
            <p className="text-center text-[#8074FD] text-[12px] font-bold">
              View Help Docs &gt;
            </p>
          </div>
        </div>
        <div className="hidden md:block text-[12px] w-[80%] mx-auto px-4 mt-5 border-0 border-l-2 border-[#CBC5FF]">
          <p className="text-gray-500 font-semibold">Are you considering a</p>
          <p className="font-bold text-gray-900">Housing Advance?</p>
          <p className="text-[10px] text-gray-500 mt-1">
            Limited time reduced interest.
          </p>
          <p className="text-[#4935ff] font-bold text-[10px]">
            Learn more &gt;
          </p>
        </div>
      </div>
    </>
  );
};

export default Compare;
