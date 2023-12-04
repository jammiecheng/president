export default function HorizenBar({ data, group1, group2, group3 }) {
  console.log(data);
  return (
    <div className="w-full h-[18px] rounded-[50px] flex justify-between overflow-hidden">
      {Object.keys(data).map((element, index) => {
        return (
          Number.isInteger(parseInt(element)) && (
            <div
              key={index}
              style={{
                width: `${
                  Math.round((data[element] / data.投票數) * 100) > 10 &&
                  Math.round((data[element] / data.投票數) * 100) + "%"
                }`,
                // flexGrow: `${
                //   Math.round((data[element] / data.投票數) * 100) < 10 && 1
                // }`,
              }}
              className={`bg-[var(--color-role-${
                index < 3 ? index + 1 : index - 3
              })] text-center small text-[var(--color-default-white)]`}
            >
              {Math.round((data[element] / data.投票數) * 100) > 10 &&
                Math.round((data[element] / data.投票數) * 100) + "%"}
            </div>
          )
        );
      })}
      {/* <div
        style={{ width: group1 + "%" }}
        className="bg-[var(--color-role-1)] text-center small text-[var(--color-default-white)]"
      >
        {group1 > 10 && group1 + "%"}
      </div>
      <div
        style={{ width: group2 + "%" }}
        className="bg-[var(--color-role-2)] text-center small text-[var(--color-default-white)]"
      >
        {group2 > 10 && group2 + "%"}
      </div>
      {group3 > 0 && (
        <div
          style={{ width: group3 + "%" }}
          className="bg-[var(--color-role-3)] text-center small text-[var(--color-default-white)]"
        >
          {group3 > 10 && group3 + "%"}
        </div>
      )} */}
    </div>
  );
}
