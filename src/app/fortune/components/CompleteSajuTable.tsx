import React from 'react';
import { sajuData, sajuInfo } from './FortuneThird/sajuData';
import { getBorderStyle } from './FortuneThird/tableUtils';

const CompleteSajuTable = () => {
  return (
    <div className="mx-auto w-full max-w-[448px] p-4">
      {/* 상단 제목 */}
      <div className="mb-4 text-center">
        <h1 className="mb-2 text-lg font-bold">{sajuInfo.name}님의 사주</h1>
        <p className="text-sm text-gray-700">{sajuInfo.birthDate}</p>
      </div>
      {/* 장식 테두리 컨테이너 */}
      <div className="relative p-4">
        {/* 사주표 */}
        <div className="overflow-x-auto">
          <table className="border-1 w-full border-collapse border-black">
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
                          className={`flex flex-col items-center justify-center ${cell.bg} ${cell.color} ${cell.border || ''} mx-auto h-16 w-16 rounded-lg p-2`}
                        >
                          <span className="text-xs">{cell.top}</span>
                          <span className="text-2xl font-bold">{cell.hanja}</span>
                          <span className="text-xs">{cell.bottom}</span>
                        </div>
                      ) : (
                        <div className="flex min-h-[2rem] items-center justify-center">{cell.text}</div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* 하단 설명 */}
      <div className="mt-4 text-xs text-gray-600">
        <p className="text-center">※ 이 사주는 더미 데이터로 생성된 예시입니다.</p>
      </div>
    </div>
  );
};

export default CompleteSajuTable;
