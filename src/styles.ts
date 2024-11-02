import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../tailwind.config';

export const { theme } = resolveConfig(tailwindConfig);

export function evaluateCssMeasureToPx(measure: string) {
  // Create a temporary element with styles to keep it invisible and out of layout flow
  const tempElement = document.createElement('div');
  tempElement.style.width = measure;
  tempElement.style.position = 'absolute';
  tempElement.style.visibility = 'hidden';
  tempElement.style.height = '0';
  tempElement.style.overflow = 'hidden';

  // Append the element to the body, get the computed width in pixels, and remove it
  document.body.appendChild(tempElement);
  const pixels = parseFloat(getComputedStyle(tempElement).width);
  document.body.removeChild(tempElement);

  return pixels;
}
