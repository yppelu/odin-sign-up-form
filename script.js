const inputs = document.querySelectorAll('input');
const inputCorrectnessSymbolsIndicators = document.querySelectorAll('input+span');

inputCorrectnessSymbolsIndicators.forEach(symbol => symbol.style.visibility = 'hidden');

inputs.forEach((input, index) => {
  input.addEventListener('focus', () => {
    inputCorrectnessSymbolsIndicators[index].style.visibility = 'visible';
  });
});