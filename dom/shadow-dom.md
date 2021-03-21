## Shadow DOM
Теневой DOM – это способ создать свой, изолированный, DOM для компонента.
```
shadowRoot = elem.attachShadow({mode: open|closed})
```
создаёт теневой DOM для elem. Если mode="open", он доступен через
свойство `elem.shadowRoot`.Мы можем создать подэлементы внутри
shadowRoot с помощью innerHTML или других методов DOM.

## Элементы теневого DOM
- Обладают собственной областью видимости идентификаторов
- Невидимы JavaScript селекторам из главного документа, таким как querySelector,
- Стилизуются своими стилями из теневого дерева, не из главного документа.
Теневой DOM, если имеется, отрисовывается браузером вместо обычных потомков (light DOM).

```
<style>
  /* стили документа не применятся в теневом дереве внутри #elem (1) */
  p { color: red; }
</style>

<div id="elem"></div>

<script>
  elem.attachShadow({mode: 'open'});
    // у теневого дерева свои стили (2)
  elem.shadowRoot.innerHTML = `
    <style> p { font-weight: bold; } </style>
    <p>Hello, John!</p>
  `;

  // <p> виден только запросам внутри теневого дерева (3)
  alert(document.querySelectorAll('p').length); // 0
  alert(elem.shadowRoot.querySelectorAll('p').length); // 1
</script>
```
