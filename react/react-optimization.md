> Monkey Patch для проверки ререндера React компонентов\
[WhyDidYouRender](https://github.com/welldone-software/why-did-you-render)

> Помним что собранный `build` вариант работает куда шустрее без допов.

> Анализ производительности компонентов с помощью вкладки
Chrome «Performance». В режиме разработки вы можете видеть
как компоненты монтируются, обновляются и размонтируются с
помощью инструментов производительности (main=UserTiming)\
[<img src="chrome_perf.png" width="600"/>](chrome_perf.png)\
[Performance](https://calibreapp.com/blog/react-performance-profiling-optimization)

> Profiler из ReactDevTools расширения к Chrome:\
[Profiler](https://ru.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)

> Виртуализация длинных списков, оконный доступ:\
react-window и react-virtualized

> Мемоизация компонентов: Сравнение условия перерисовки\
shouldComponentUpdate / PureComponent / memo(FC) / useMemo(FC, deps) / useCallback(fn)
```
import React, { memo } from 'react'; // higher order function
export default memo(
  function ContactList({ contacts }) {
    return <List data={contacts} />;
  }
);
```
```
import React, { useMemo } from 'react';
function ContactList({ title, contacts }) {
  const listComponent = useMemo(() => {
    return <List title={title} data={contacts} />;
  }, [contacts]);
  return listComponent;
}
```
```
shouldComponentUpdate(nextProps, nextState) {
  return true;
}
```

> Мемоизация к Redux:\
Immer для редюсеров\
Reselect для селектеров\
shallowEqual для useState

> Использовать немутирующие чистые функции (immutable pure functions)
```
handleClick() {
  this.setState(state => ({
    words: [...state.words, 'словцо'],
  }));
};
```
```
function updateColorMap(colormap) {
  return {...colormap, right: 'blue'};
}
```

> Не подгружать лишнего, использовать отложенную загрузку 
React.Suspense + import.then()

> Через вкладку Network в Chrome проверяем скорость API ответов.
