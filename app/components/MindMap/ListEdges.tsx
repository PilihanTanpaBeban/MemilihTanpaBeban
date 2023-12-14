import { lineBlack, lineDarkBrown, lineGreen, lineLightPurple, lineOcean } from "../../../public/colors";

const listEdges = [
  // Ekse top
  {
    id: "e91-50",
    source: "91",
    target: "50",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e91-51",
    source: "91",
    target: "51",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e91-61",
    source: "91",
    target: "61",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e91-62",
    source: "91",
    target: "62",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  // ekse right
  {
    id: "e91-63",
    source: "91",
    target: "63",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },
  {
    id: "e91-57",
    source: "91",
    target: "57",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },
  {
    id: "e91-55",
    source: "91",
    target: "55",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },

  // ekse bot
  {
    id: "e91-56",
    source: "91",
    target: "56",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e91-49",
    source: "91",
    target: "49",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e91-48",
    source: "91",
    target: "48",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e91-47",
    source: "91",
    target: "47",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },

  // ekse left
  {
    id: "e91-59",
    source: "91",
    target: "59",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },
  {
    id: "e91-52",
    source: "91",
    target: "52",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },
  {
    id: "e91-60",
    source: "91",
    target: "60",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },

  // legislatif komisi IV
  {
    id: "e90-12",
    source: "90",
    target: "1",
    sourceHandle: "a",
    targetHandle: "h",
    color: lineBlack,
  },

  // anggota IV top
  {
    id: "e1-3",
    source: "1",
    target: "3",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e1-22",
    source: "1",
    target: "2",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e1-5",
    source: "1",
    target: "5",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },

  // anggota IV right
  {
    id: "e1-6",
    source: "1",
    target: "6",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },
  {
    id: "e1-7",
    source: "1",
    target: "7",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },
  {
    id: "e1-8",
    source: "1",
    target: "8",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },

  // anggota IV bot
  {
    id: "e1-9",
    source: "1",
    target: "9",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e1-10",
    source: "1",
    target: "10",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e1-11",
    source: "1",
    target: "11",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },

  // komisi VI
  {
    id: "e90-12",
    source: "90",
    target: "12",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },

  // anggota VI top
  {
    id: "e12-14",
    source: "12",
    target: "14",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e12-20",
    source: "12",
    target: "20",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e12-19",
    source: "12",
    target: "19",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },

  // anggota VI left
  {
    id: "e12-21",
    source: "12",
    target: "21",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },
  {
    id: "e12-13",
    source: "12",
    target: "13",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },
  {
    id: "e12-15",
    source: "12",
    target: "15",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },

  // anggota VI bot
  {
    id: "e12-16",
    source: "12",
    target: "16",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e12-17",
    source: "12",
    target: "17",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e12-18",
    source: "12",
    target: "18",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },

  // komisi VII
  {
    id: "e90-22",
    source: "90",
    target: "22",
    sourceHandle: "c",
    targetHandle: "h",
    color: lineBlack,
  },

  // anggota VII top
  {
    id: "e22-24",
    source: "22",
    target: "24",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e22-28",
    source: "22",
    target: "28",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },

  // anggota VII right
  {
    id: "e22-26",
    source: "22",
    target: "26",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },
  {
    id: "e22-25",
    source: "22",
    target: "25",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },
  {
    id: "e22-27",
    source: "22",
    target: "27",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },

  // anggota VII bot
  {
    id: "e22-29",
    source: "22",
    target: "29",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e22-93",
    source: "22",
    target: "93",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },

  // komisi IX
  {
    id: "e90-30",
    source: "90",
    target: "30",
    sourceHandle: "c",
    targetHandle: "f",
    color: lineBlack,
  },

  // anggota IX top
  {
    id: "e30-32",
    source: "30",
    target: "32",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },

  // anggota IX left
  {
    id: "e30-31",
    source: "30",
    target: "31",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },
  {
    id: "e30-33",
    source: "30",
    target: "33",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },

  // anggota IX bot
  {
    id: "e30-34",
    source: "30",
    target: "34",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e30-95",
    source: "30",
    target: "95",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },

  // Komisi XI
  {
    id: "e30-95",
    source: "30",
    target: "95",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },

  // anggota XI top
  {
    id: "e35-38",
    source: "35",
    target: "38",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e35-42",
    source: "35",
    target: "42",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },

  // anggota XI left
  {
    id: "e35-40",
    source: "35",
    target: "40",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },
  {
    id: "e35-43",
    source: "35",
    target: "43",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },
  {
    id: "e35-44",
    source: "35",
    target: "44",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },

  // anggota XI left
  {
    id: "e35-37",
    source: "35",
    target: "37",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e35-39",
    source: "35",
    target: "39",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e35-36",
    source: "35",
    target: "36",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },

  // tobacco industry
  {
    id: "e92-66",
    source: "92",
    target: "66",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },
  {
    id: "e92-67",
    source: "92",
    target: "67",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e92-68",
    source: "92",
    target: "68",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e92-69",
    source: "92",
    target: "69",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },

  // Front Group TI
  {
    id: "e96-70",
    source: "96",
    target: "70",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e96-73",
    source: "96",
    target: "73",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e96-75",
    source: "96",
    target: "75",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e96-83",
    source: "96",
    target: "83",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },
  {
    id: "e96-76",
    source: "96",
    target: "76",
    sourceHandle: "a",
    targetHandle: "g",
    color: lineBlack,
  },

  // FG left
  {
    id: "e96-94",
    source: "96",
    target: "94",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },
  {
    id: "e96-72",
    source: "96",
    target: "72",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },
  {
    id: "e96-78",
    source: "96",
    target: "78",
    sourceHandle: "d",
    targetHandle: "f",
    color: lineBlack,
  },

  // FG bot
  {
    id: "e96-79",
    source: "96",
    target: "79",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },
  {
    id: "e96-74",
    source: "96",
    target: "74",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },

  {
    id: "e96-71",
    source: "96",
    target: "71",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },

  {
    id: "e96-89",
    source: "96",
    target: "89",
    sourceHandle: "c",
    targetHandle: "e",
    color: lineBlack,
  },

  // FG right
  {
    id: "e96-97",
    source: "96",
    target: "97",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },
  {
    id: "e96-86",
    source: "96",
    target: "86",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },
  {
    id: "e96-81",
    source: "96",
    target: "81",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineBlack,
  },

  // ekse external
  // eddy
  {
    id: "e51-68",
    source: "51",
    target: "68",
    sourceHandle: "b",
    targetHandle: "h",
    color: lineGreen,
  },

  // hendratmojo
  {
    id: "e52-70",
    source: "52",
    target: "70",
    sourceHandle: "d",
    targetHandle: "e",
    color: lineDarkBrown,
  },
  {
    id: "e52-97",
    source: "52",
    target: "97",
    sourceHandle: "c",
    targetHandle: "b",
    color: lineDarkBrown,
  },
  {
    id: "e52-81",
    source: "52",
    target: "81",
    sourceHandle: "b",
    targetHandle: "e",
    color: lineDarkBrown,
  },

  // airlangga
  {
    id: "e48-66",
    source: "48",
    target: "66",
    sourceHandle: "c",
    targetHandle: "h",
    color: lineOcean,
  },

  // agus gumiwang
  {
    id: "e57-73",
    source: "57",
    target: "73",
    sourceHandle: "b",
    targetHandle: "e",
    color: lineLightPurple,
  },
];

export default listEdges;
