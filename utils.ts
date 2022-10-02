import { BaseData } from "./types";

export const BASE_FONT_SIZE = 26;
export const BASE_GAP = 8;

export const getRandomNumber = (range: number) => {
  return Math.floor(Math.random() * range);
};

export const getRandomBackground = () => {
  const position = getRandomNumber(colors.length);
  return colors[position];
};

function makeid(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const colors = [
  "#5eff00",
  "#5eff00",
  "#5eff00",
  "#5eff00",
  "#5eff00",
  "#5eff00",
  "#ff2929",
  "#fce408",
];

export const createArray = (length: number) => Array.from({ length });

export const data: BaseData[] = [
  {
    title: "Vendas",
    id: makeid(12),
    background: "#111242",
    color: "#fff",
    style: { height: "100%" },
    nested: [
      {
        title: "Pricing",
        id: makeid(12),
        nested: createArray(10).map((d, i) => ({
          title: `Item`,
          id: makeid(12),
        })),
      },
    ],
  },
  {
    title: "Gestão",
    id: makeid(12),
    background: "#111242",
    color: "#fff",
    style: { height: "100%" },
    nested: [
      {
        title: "Infraestrutura",
        id: makeid(12),
        nested: createArray(7).map((d, i) => ({
          title: `Item`,
          id: makeid(12),
        })),
      },
      {
        title: "Infraestrutura",
        id: makeid(12),
        nested: createArray(5).map((d, i) => ({
          title: `Item`,
          id: makeid(12),
        })),
      },
      {
        title: "Infraestrutura",
        id: makeid(12),
        nested: createArray(5).map((d, i) => ({
          title: `Item`,
          id: makeid(12),
        })),
      },
      {
        title: "Infraestrutura",
        id: makeid(12),
        nested: createArray(5).map((d, i) => ({
          title: `Item`,
          id: makeid(12),
        })),
      },

      {
        title: "Infraestrutura",
        id: makeid(12),
        nested: createArray(5).map((d, i) => ({
          title: `Item`,
          id: makeid(12),
        })),
      },
      {
        title: "Infraestrutura",
        id: makeid(12),
        nested: createArray(10).map((d, i) => ({
          title: `Item`,
          id: makeid(12),
        })),
      },
      {
        title: "Infraestrutura",
        id: makeid(12),
        nested: createArray(10).map((d, i) => ({
          title: `Item`,
          id: makeid(12),
        })),
      },
    ],
  },
  {
    title: "Financeiro",
    id: makeid(12),
    background: "#111242",
    style: { height: "100%" },
    color: "#fff",
    nested: [
      {
        title: "Contábil",
        id: makeid(12),
        nested: createArray(2).map((d, i) => ({
          title: `Item`,
          id: makeid(12),
        })),
      },
      {
        title: "Contábil",
        id: makeid(12),
        nested: createArray(2).map((d, i) => ({
          title: `Item`,
          id: makeid(12),
          nested: createArray(3).map((d, ii, a) => ({
            title: `Item`,
            id: makeid(12),
          })),
        })),
      },
      {
        title: "Contábil",
        id: makeid(12),
        nested: createArray(2).map((d, i) => ({
          title: `Item`,
          id: makeid(12),
          nested: createArray(3).map((d, ii, a) => ({
            title: `Item`,
            id: makeid(12),
            nested:
              ii + 1 === a.length &&
              createArray(3)?.map(() => ({
                title: "Item",
                id: makeid(12),
              })),
          })),
        })),
      },
    ],
  },
];
