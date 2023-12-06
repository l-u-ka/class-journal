import { createContext } from "react";
import { useState } from "react";

const subjects = [{id: "001", subjectName: "ქართული"}, {id: "002", subjectName: "ინგლისური"}, {id: "003", subjectName: "მათემატიკა"}];
const weeks = [{id: "011", weekName: "პირველი"}, {id: "012", weekName: "მეორე"}, {id: "013", weekName: "მესამე"}];
const weekDays = [{id: "111", name: "ორშაბათი"}, {id: "112", name: "სამშაბათი"}, {id: "113", name: "ოთხშაბათი"}, {id: "114", name: "ხუთშაბათი"}, {id: "115", name: "პარასკევი"}]

export const GlobalContext = createContext({
    students: [],
    setStudents: undefined,
    scores: [],
    setScores: undefined,
    selectedSubject: {},
    setSelectedSubject: undefined,
    selectedWeek: {},
    setSelectedWeek: undefined,
});

export const GlobalContextProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const [scores, setScores] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
    const [selectedWeek, setSelectedWeek] = useState(weeks[0]);
    
    return (
      <GlobalContext.Provider value={{students, setStudents, scores, setScores, selectedSubject, setSelectedSubject, selectedWeek, setSelectedWeek, subjects, weeks, weekDays}}>
        {children}
      </GlobalContext.Provider>
    );
  };