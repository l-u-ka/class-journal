import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext({
    students: [],
    setStudents: undefined,
    scores: [],
    setScores: undefined,
    selectedSubject: undefined,
    setSelectedSubject: undefined,
    selectedWeek: undefined,
    setSelectedWeek: undefined,
});

  const subjects = [{id: "001", subjectName: "ქართული"}, {id: "002", subjectName: "ინგლისური"}, {id: "003", subjectName: "მათემატიკა"}];
  const weeks = [{id: "011", weekName: "პირველი"}, {id: "012", weekName: "მეორე"}, {id: "013", weekName: "მესამე"}];

export const GlobalContextProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const [scores, setScores] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
    const [selectedWeek, setSelectedWeek] = useState(weeks[0]);
    // const [subjects, setSubjects] = useState(initial_subjects);
    // const [weeks, setWeeeks] = useState(initial_weeks);

    return (
      <GlobalContext.Provider value={{students, setStudents, scores, setScores, selectedSubject, setSelectedSubject, selectedWeek, setSelectedWeek, subjects, weeks}}>
        {children}
      </GlobalContext.Provider>
    );
  };