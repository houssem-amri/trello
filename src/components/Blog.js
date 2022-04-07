import React from "react";

export default function Blog() {

  
  const handleClick = () => {
    // negative([4, 3, 8, -16, 8]);
    // Somme([5, 3, 9, -5], [3, 7, 6, -2]);
    // search(1)
    // deleteArray();
  };

  const deleteArray = () => {
    let T = ["achref", "houssem", "ahmed", "mohamed"];
    for (let i = 0; i < T.length; i++) {
      if (T[i] === "achref") {
        T.splice(i, 1);
      }
    }
    console.log(T);
  };

  const negative = (T) => {
    let pos = 0;
    for (let i = 0; i < T.length; i++) {
      if (T[i] < 0) {
        pos = i + 1;
      }
    }
    console.log(pos);
  };

  const Somme = (A, B) => {
    let C = [];
    for (var i = 0; i < B.length; i++) {
      C[i] = A[i] + B[B.length - 1 - i];
    }

    console.log(C);
  };

  const search = (param) => {
    let T = [1, 2, 4, 7, 8, 1, 2, 1, 1, 8];
    let s = 0;
    for (let i = 0; i < T.length; i++) {
      if (T[i] === param) {
        s = s + 1;
      }
    }
    console.log(s);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        valider
      </button>
    </div>
  );
}
