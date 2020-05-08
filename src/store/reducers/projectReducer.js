const initialState = {
  projects: [
    { id: Math.random(), title: "title Math.random()0" },
    { id: Math.random(), title: "title Math.random()1" },
    { id: Math.random(), title: "title Math.random()2" },
    { id: Math.random(), title: "title Math.random()3" },
    { id: Math.random(), title: "title Math.random()4" },
  ],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
        console.log('created',action.project)
      break;
  
    default:
      break;
  }
  return state;
};

export default projectReducer;
