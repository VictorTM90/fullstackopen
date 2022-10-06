import React from "react";
const Header = ({ name }) => <h1>{name}</h1>;

const Total = ({ parts }) => {
    const total = parts.reduce((acc, parts) => acc + parts.exercises, 0)
    return (
    <h4>Number of exercises {total}</h4>
    )
}

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => <Part key={part.id} part={part} />)}
  </>
);

export const Course = ({ courses }) => {
    

  return (
    <div>
      {courses.map((course) => {
       
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        );
      })}

    </div>
  );
};
