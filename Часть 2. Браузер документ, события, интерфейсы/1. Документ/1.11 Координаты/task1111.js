// Найдите координаты точек относительно окна браузера

// 1. верхний левый, внешний угол
[field.getBoundingClientRect().left, field.getBoundingClientRect().top]

// 2. нижний правый, внешний угол
[field.getBoundingClientRect().right, field.getBoundingClientRect().bottom]

// 3. верхний левый, внутренний угол
[field.getBoundingClientRect().left + field.clientLeft, field.getBoundingClientRect().top + field.clientTop]

// 4. нижний правый, внутренний угол
[field.getBoundingClientRect().left + field.clientLeft + field.clientWidth, field.getBoundingClientRect().top + field.clientTop + field.clientHeight]