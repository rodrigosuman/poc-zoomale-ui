import type { NextPage } from "next";
import ReactEcharts from "echarts-for-react";
import { getRandomNumber } from "../utils";

const Home: NextPage = () => {
  function getLevelOption() {
    return [
      {
        itemStyle: {
          borderColor: "#777",
          borderWidth: 0,
          gapWidth: 1,
        },
        upperLabel: {
          show: false,
        },
      },
      {
        itemStyle: {
          borderColor: "#555",
          borderWidth: 5,
          gapWidth: 1,
        },
        emphasis: {
          itemStyle: {
            borderColor: "#ddd",
          },
        },
      },
      {
        colorSaturation: [0.35],
        itemStyle: {
          borderWidth: 5,
          gapWidth: 1,
          borderColorSaturation: 0.6,
        },
      },
    ];
  }

  const randomColor = () => {
    const colors = ["#BE002F", "#FFA400", "#0EB83A", "#0EB83A", "#0EB83A"];

    return colors[getRandomNumber(colors.length)];
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: 40,
        background: "#170b4d",
      }}
    >
      <ReactEcharts
        style={{
          width: "100%",
          height: "100%",
          background: "#170b4d",
        }}
        onEvents={{
          click: function (params: any) {
            if (params?.data?.value !== undefined) {
              alert(JSON.stringify(params.data));
            }
          },
        }}
        option={{
          tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
          },
          series: [
            {
              type: "treemap",
              label: {
                show: true,
                formatter: "{b}",
              },
              upperLabel: {
                show: true,
                height: 30,
              },
              itemStyle: {
                borderColor: "#fff",
              },
              levels: getLevelOption(),
              data: [
                {
                  name: "node0",
                  value: 10,
                  children: [
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAb",
                      value: 6,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAc",
                      value: 6,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAd",
                      value: 6,
                      itemStyle: {
                        color: "#0a0a0a",
                      },
                      children: [
                        {
                          name: "nodeAda",
                          value: 9,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeAdb",
                          value: 9,

                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeAdc",
                          value: 9,

                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeAdd",
                          // value: 9,
                          itemStyle: {
                            color: "#9e1111",
                          },
                          children: [
                            {
                              name: "nodeAdaa",
                              value: 9,

                              itemStyle: {
                                color: randomColor(),
                              },
                              children: [],
                            },
                            {
                              name: "nodeAdbb",
                              value: 9,

                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                            {
                              name: "nodeAdcc",
                              value: 9,

                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                            {
                              name: "nodeAddd",
                              value: 9,

                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "nodeAzz",
                  value: 10,
                  children: [
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAb",
                      value: 6,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAc",
                      value: 6,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAd",
                      value: 6,
                      itemStyle: {
                        color: "#0a0a0a",
                      },
                      children: [
                        {
                          name: "nodeAda",
                          value: 9,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeAdb",
                          value: 9,

                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeAdc",
                          value: 9,

                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeAdd",
                          // value: 9,
                          itemStyle: {
                            color: "#0a0a0a",
                          },
                          children: [
                            {
                              name: "nodeAdaa",
                              value: 9,

                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                            {
                              name: "nodeAdbb",
                              value: 9,

                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                            {
                              name: "nodeAdcc",
                              value: 9,

                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                            {
                              name: "nodeAddd",
                              value: 9,

                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "nodeA",
                  value: 10,
                  children: [
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAa",
                      value: 4,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAb",
                      value: 6,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAc",
                      value: 6,
                      itemStyle: {
                        color: randomColor(),
                      },
                    },
                    {
                      name: "nodeAd",
                      value: 6,
                      itemStyle: {
                        color: "#0a0a0a",
                      },
                      children: [
                        {
                          name: "nodeAda",
                          value: 9,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeAdb",
                          value: 9,

                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeAdc",
                          value: 9,

                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeAdd",
                          // value: 9,
                          itemStyle: {
                            color: "#0a0a0a",
                          },
                          children: [
                            {
                              name: "nodeAdaa",
                              value: 9,

                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                            {
                              name: "nodeAdbb",
                              value: 9,

                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                            {
                              name: "nodeAdcc",
                              value: 9,

                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                            {
                              name: "nodeAddd",
                              value: 9,

                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "nodeB",
                  value: 20,
                  itemStyle: {
                    color: "#dedede",
                  },
                  children: [
                    {
                      name: "nodeBa",
                      value: 20,
                      itemStyle: {
                        color: "#0a0a0a",
                      },
                      children: [
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: "#0a0a0a",
                          },
                          children: [
                            {
                              name: "nodeBa1",
                              value: 20,
                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                            {
                              name: "nodeBa1",
                              value: 20,
                              itemStyle: {
                                color: randomColor(),
                              },
                            },
                          ],
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa1",
                          value: 20,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa2",
                          value: 21,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                        {
                          name: "nodeBa3",
                          value: 23,
                          itemStyle: {
                            color: randomColor(),
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default Home;
