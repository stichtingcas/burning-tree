import { writable } from 'svelte/store';

export const tooltipValues = writable({
  'visibility': 'hidden',
  'x': 0,
  'y': 0,
  'branch':null,
  // 'angle': 0,
});