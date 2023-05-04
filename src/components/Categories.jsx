import React from 'react';

function Categories({ value, onChangeCategory }) {
  const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {category.map((categoryName, i) => {
          return (
            <li key={i} className={value === i ? 'active' : ''} onClick={() => onChangeCategory(i)}>
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
