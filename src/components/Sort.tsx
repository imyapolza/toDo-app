import React, { useState } from 'react';

interface SortProps {
  onClickSortType: (input: string) => void;
}

export const Sort: React.FC<SortProps> = ({ onClickSortType }: SortProps): React.ReactElement => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const items: Array<{ name: string; type: string }> = [
    { name: 'Выполненным', type: 'completed' },
    { name: 'Невыполненным', type: 'noCompleted' },
    { name: 'Все', type: 'all' },
  ];

  const onSelectItem = (type: string) => {
    onClickSortType(type);
    setVisiblePopup(false);
  };

  return (
    <>
      <b className="sort" onClick={() => setVisiblePopup(!visiblePopup)}>
        Сортировать по:
      </b>
      {visiblePopup &&
        items.map((obj, index: number) => (
          <li className="sort-category" onClick={() => onSelectItem(obj.type)} key={obj.name}>
            {obj.name}
          </li>
        ))}
    </>
  );
};
