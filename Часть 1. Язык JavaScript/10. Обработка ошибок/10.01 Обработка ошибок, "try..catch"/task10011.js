// Finally или просто код?

function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // ошибка
  } catch (e) {
    // ...
    if (e.name != 'SyntaxError') {
      throw e; // проброс исключения
    }
  }

  // очистить рабочее пространство
}

// Если поместить очистку после try..catch, то этот код не выполнится