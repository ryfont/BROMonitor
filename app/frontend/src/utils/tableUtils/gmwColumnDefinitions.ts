export const gmwColumns = [
  {
    name: "naam",
    label: "Bronhouder",
    field: "naam",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "kvk",
    label: "KvK-nummer",
    field: "kvk",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "broId",
    label: "BRO-ID",
    field: "broId",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "wellCode",
    label: "Putcode",
    field: "wellCode",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "nitgCode",
    label: "NITG-Code",
    field: "nitgCode",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "tubes",
    label: "Aantal buizen",
    field: "numberOfMonitoringTubes",
    align: "right",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "location",
    label: "Locatie",
    field: "rdCoords",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "registrationTime",
    label: "Registratiedatum",
    field: "registrationTime",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "wellConstructionDate",
    label: "Inrichtingsdatum",
    field: "wellConstructionDate",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "wellRemovalDate",
    label: "Opruimingsdatum",
    field: "wellRemovalDate",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
];

export const abnormalTubeColumns = [
  {
    name: "openbroid",
  },
  {
    name: "naam",
    label: "Bronhouder",
    field: "bronhouder",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "kvk",
    label: "KvK-nummer",
    field: "kvk",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "broId",
    label: "BRO-ID",
    field: "broId",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "wellCode",
    label: "Putcode",
    field: "wellCode",
    align: "left",
    sortable: true,
    classes: "ellipsis",
  },
  // {
  //   name: "nitgCode",
  //   label: "NITG-Code",
  //   field: "nitgCode",
  //   align: "left",
  //   sortable: true,
  //   classes: "ellipsis",
  // },
  // {
  //   name: "totalTubes",
  //   label: "Aantal buizen",
  //   field: "totalTubes",
  //   align: "right",
  //   sortable: true,
  //   classes: "ellipsis",
  // },
  {
    name: "abnormalTubes",
    label: "Aantal niet-plausibele buizen",
    field: (row) => row.abnormalTubes + " van " + row.totalTubes,
    align: "right",
    sortable: true,
    classes: "ellipsis",
  },
  {
    name: "maxDelta",
    label: "Grootste overschrijding",
    field: "maxDelta",
    align: "right",
    sortable: true,
    classes: "ellipsis",
    format: (val) =>
      (Math.round(parseFloat(val) * 100) / 100).toFixed(2).replace(".", ",") +
      "m",
  },
];