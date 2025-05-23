import { sajuData, sajuInfo } from './sajuData';
import { getBorderStyle, renderCellContent } from './tableUtils';

const CompleteSajuTable = () => {
  return (
    <div className="mx-auto w-full max-w-[448px] p-4">
      {/* 상단 제목 */}
      <div className="mb-4 mt-[40px] text-center">
        <p>{sajuInfo.name}님의 사주</p>
        <p className="text-xl font-semibold">{sajuInfo.birthDate}</p>
      </div>
      {/* 장식 테두리 컨테이너 */}
      <div className="relative p-4">
        {/* 사주표 */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-black">
            <tbody>
              {sajuData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      className={` ${getBorderStyle(rowIndex, colIndex, sajuData.length, row.length)} p-2 text-center ${rowIndex >= 1 && rowIndex <= 7 && colIndex >= 1 && colIndex <= 4 ? 'bg-white' : ''} relative min-h-[3.5rem] align-middle`}
                    >
                      {cell.hanja ? (
                        <div
                          className={`flex flex-col items-center justify-evenly ${cell.bg} ${cell.color} ${cell.border || ''} mx-auto h-14 w-14 rounded-xl p-1`}
                        >
                          <span className="text-[0.6rem]">{cell.top}</span>
                          <span className="text-[1rem] font-bold">{cell.hanja}</span>
                          <span className="text-[0.6rem]">{cell.bottom}</span>
                        </div>
                      ) : (
                        renderCellContent(cell, rowIndex)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompleteSajuTable;
