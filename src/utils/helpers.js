//  CSV Export
export const exportToCSV = (data) => {
  if (!data || data.length === 0) return;

  const headers = ["date", "category", "type", "amount"];

  const rows = data.map((t) =>
    [t.date, t.category, t.type, t.amount].join(",")
  );

  const csvContent = [headers.join(","), ...rows].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "transactions.csv");

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


//  JSON Export (Optional)
export const exportToJSON = (data) => {
  if (!data || data.length === 0) return;

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "transactions.json");

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};