export const createProject = (project) => {
  return (dispath, getState) => {
    // make async call to database
    // projecr(we want to add) : project(we recived on this action creator)
    dispath({
      type: "CREATE_PROJECT",
      project,
    });
  };
};

