export const sortQuestions = (questions) => {
  let questionsList = Object.keys(questions).map(key => questions[key]);

  questionsList.sort(function (a, b) {
    let timestampA = a.timestamp;
    let timestampB = b.timestamp;
    if (timestampA < timestampB) {
      return -1;
    }
    if (timestampA > timestampB) {
      return 1;
    }
    return 0;
  });

  return questionsList.reverse();
}

export const sortByAnswersQuestions = (users) => {
  let usersList = Object.keys(users).map(key => {
    let u = users[key];
    u.total = Object.keys(u.answers).length + u.questions.length;
    return u;
  });

  usersList.sort(function (a, b) {
    let totalA = a.total;
    let totalB = b.total;
    if (totalA < totalB) {
      return -1;
    }
    if (totalA > totalB) {
      return 1;
    }
    return 0;
  });
  return usersList.reverse();

}
