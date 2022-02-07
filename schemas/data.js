export default {
  name: "data",
  title: "Data",
  type: "object",
  fields: [
    {
      name: "XAxis",
      title: "XAxis",
      type: "array",
      of: [{ type: "number" }],
    },
    {
      name: "YAxis",
      title: "YAxis",
      type: "array",
      of: [{ type: "number" }],
    },
  ],
};
