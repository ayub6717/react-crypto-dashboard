import React from "react";

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  // Extract columns from the first data object
  const columns = Object.keys(data[0]);

  const getCommissionBackgroundColor = (commission) => {
    const commissionValue = parseFloat(commission);
    if (commissionValue > 0) {
      return "bg-[#2196543c] text-[#219653] text-[10px] leading-[22px] font-semibold"; // Green background for positive commission
    } else if (commissionValue < 0) {
      return "bg-[#eb575738] text-[#EB5757] text-[10px] leading-[22px] font-semibold"; // Red background for negative commission
    }
    return "";
  };

  const getTextColor = (value) => {
    const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, "")); // Extract numeric value from the string
    return numericValue >= 0 ? "text-[#219653]" : "text-[#EB5757]"; // Green for positive, red for negative
  };

  const renderBadge = (badge) => {
    let badgeClasses = "";

    switch (badge) {
      case "Done":
        badgeClasses =
          "bg-[#2196543c] text-[#219653] text-[10px] leading-[22px] font-semibold";
        break;
      case "Pending":
        badgeClasses =
          "bg-[#f2984a33] text-[#F2994A] text-[10px] leading-[22px] font-semibold";
        break;
      case "Rejected":
        badgeClasses =
          "bg-[#eb575738] text-[#EB5757] text-[10px] leading-[22px] font-semibold";
        break;
      default:
        badgeClasses = "";
    }

    return (
      <span
        className={`px-2 py-0.5 rounded-[6px] w-[58px] inline-block text-center ${badgeClasses}`}
      >
        {badge}
      </span>
    );
  };

  return (
    <div className="overflow-x-auto dark:bg-[#1C1C25]">
      <table className="min-w-full table-auto">
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-[8px] border-b border-[#f2f2f2] dark:border-[#272730] ${
                    column === "currency"
                      ? "text-[#000] dark:text-white text-[12px] font-semibold leading-7 text-start"
                      : column === "digital_currency"
                      ? "text-[#5E6E78] dark:text-[#5E6E78] text-[12px] font-semibold leading-[22px]"
                      : column === "amount"
                      ? "text-[#000] dark:text-white text-[12px] font-medium leading-[22px] text-end"
                      : column === "to_currency"
                      ? "text-[#000] dark:text-white text-[12px] font-semibold leading-[28px]"
                      : column === "time"
                      ? "text-[#000] dark:text-white text-[12px] font-semibold leading-[22px] text-end"
                      : "text-end"
                  } ${
                    colIndex === 0
                      ? "pl-0"
                      : colIndex === columns.length - 1
                      ? "pr-0"
                      : ""
                  }`}
                >
                  {column === "commission" ? (
                    <span
                      className={`px-2 py-1 rounded-full font-semibold ${getCommissionBackgroundColor(
                        row[column]
                      )}`}
                    >
                      {row[column]}
                    </span>
                  ) : column === "badge" ? (
                    renderBadge(row[column])
                  ) : column === "img" ? (
                    <img
                      src={row[column]}
                      alt="Icon"
                      className="w-[24px] h-[24px]"
                    />
                  ) : column === "to_amount" ? (
                    <span
                      className={`text-[12px] font-semibold leading-[22px] text-end ${getTextColor(
                        row[column]
                      )}`}
                    >
                      {row[column]}
                    </span>
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
