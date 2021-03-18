- Rendering events are about computing styles associated with each
DOM node (i.e. "Style Recalculate") and elements position on the
page ("Layout").

- Paint category is about actually painting pixels
and includes events like "Paint" itself and
"Decode Image" / "Resize Image".

- In a nutshell, it's about inner
structure vs. appearance -- if your page spends a lot of time rendering,
this is because of the structure of its DOM and CSS
(e.g. a large DOM tree), while significant paint times often mean
the appearance of the page is affecting the performance
(e.g. some styles are expensive to paint or an image is too large).
