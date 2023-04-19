import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {category.map((name, i) => {
          return (
            <li
              key={i}
              className={activeIndex === i ? 'active' : ''}
              onClick={() => onClickCategory(i)}>
              {name}
            </li>
          );
        })}

        {/* <li className={activeIndex === 0 ? 'active' : ''} onClick={() => onClickCategory(0)}>
          Все
        </li> */}
      </ul>
    </div>
  );
}

export default Categories;
