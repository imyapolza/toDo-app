import React, { useState } from 'react';
import { useTypedSelector } from '../redux/hooks/useTypedSelector';

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

  const type = useTypedSelector(({ filter }) => filter);

  return (
    <>
      <b className="sort" onClick={() => setVisiblePopup(!visiblePopup)}>
        Сортировать по:
        <div>
          {type === 'completed' ? 'выполненым' : type === 'noCompleted' ? 'невыполненым' : 'Всем'}
        </div>
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
