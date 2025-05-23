import { SajuCell } from './sajuData';

export const getBorderStyle = (rowIndex: number, colIndex: number, totalRows: number, totalCols: number): string => {
  const topBorder = rowIndex === 0 ? '' : 'border-t border-t-black';
  const bottomBorder = rowIndex === totalRows - 1 ? 'border-b-[1.5px] border-b-black' : 'border-b border-b-black';
  const leftBorder = colIndex === 0 ? '' : 'border-l border-l-black';
  const rightBorder = colIndex === totalCols - 1 ? 'border-r-[1.5px] border-r-black' : 'border-r border-r-black';

  return [topBorder, bottomBorder, leftBorder, rightBorder].join(' ');
};

export const renderCellContent = (cell: SajuCell, rowIndex: number): React.ReactNode => {
  if (cell.multiLine) {
    if (!cell.text) return null;
    const items = cell.text.split('\n\n');
    return (
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="text-xs">
            {item.split('\n').map((line, lineIndex) => (
              <div key={lineIndex} className={lineIndex === 0 ? cell.large || '' : cell.small || ''}>
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else if (cell.text && cell.text.includes('\n')) {
    const lines = cell.text.split('\n');
    return (
      <div className="flex flex-col items-center justify-center">
        {lines.map((line, idx) => (
          <div key={idx} className={idx === 0 ? cell.large || '' : cell.small || ''}>
            {line}
          </div>
        ))}
      </div>
    );
  } else {
    return <div className={rowIndex === 0 ? cell.large || '' : cell.small || ''}>{cell.text}</div>;
  }
};
