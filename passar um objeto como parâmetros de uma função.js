//Usando a atribuição de desestruturação para passar um objeto como parâmetros de uma função

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = ({max, min}) => (max + min) / 2.0; 
  
