import React from "react";

const Home = () => {
  const table = [1, 2, 3, 4, 5,2];

  const Somme = (T) => {   
    let S = 0;
    for (let i = 0; i < T.length; i++) {
      S = T[i] + S;
    }
    return S
  };

  function search(x, T) {
	var s = 0;
	for (var i = 0; i < T.length; i++) {
		if (T[i] == x) {
			s = s + 1;
		}
	}
	return s;
}

  return <h1>{search(12,[12,7,5,1,5])}</h1>;
};

export default Home;
