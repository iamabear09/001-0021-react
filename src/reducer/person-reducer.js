export default function personReducer(person, action) {

  switch (action.type) {

    case 'updated': {
      const {prev, current} = action;
      return {
        ...person,
        mentors: person.mentors.map(mentor => {
          if (mentor.name !== prev) {
            return {...mentor};
          }
          return {...mentor, name: current};
        })
      };
    }

    case 'deleted': {
      const {name} = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name)
      }
    }

    case 'added': {
      const {name, title} = action;
      return {...person, mentors: [...person.mentors, {name, title}]};
    }

  }
};