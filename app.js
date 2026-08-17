import { loadStoryWoodsPreview } from './src/story-woods/performance-adapter.mjs';

const STORAGE_KEY = 'willows-world:preview-001';
const world = document.querySelector('.world');
const begin = document.querySelector('#begin');
const reset = document.querySelector('#reset');
const status = document.querySelector('#status');
const label = document.querySelector('.button-label');
const words = [...document.querySelectorAll('[data-word]')];

let states = [];
let revisionId = null;
let progress = { step: 0, learned: [] };

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (saved.revisionId !== revisionId) return { step: 0, learned: [] };
    return {
      step: Math.min(Number(saved.step) || 0, states.length),
      learned: Array.isArray(saved.learned) ? saved.learned : []
    };
  } catch {
    return { step: 0, learned: [] };
  }
}

function render() {
  world.dataset.worldStep = String(progress.step);
  words.forEach((chip) => chip.classList.toggle('learned', progress.learned.includes(chip.dataset.word)));
  if (progress.step === 0) {
    status.textContent = 'Ready to enter Story Woods.';
    label.textContent = 'Begin the story';
  } else if (progress.step >= states.length) {
    status.textContent = states.at(-1).message;
    label.textContent = 'Visit Story Woods again';
  } else {
    status.textContent = states[progress.step - 1].message;
    label.textContent = 'Continue the story';
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...progress, revisionId }));
}

begin.addEventListener('click', () => {
  if (!states.length) return;
  if (progress.step >= states.length) progress = { step: 0, learned: [] };
  const state = states[progress.step];
  progress.step += 1;
  if (!progress.learned.includes(state.word)) progress.learned.push(state.word);
  save();
  render();
});

reset.addEventListener('click', () => {
  progress = { step: 0, learned: [] };
  localStorage.removeItem(STORAGE_KEY);
  render();
  status.textContent = 'Preview reset. Story Woods is ready again.';
});

async function initialise() {
  begin.disabled = true;
  status.textContent = 'Preparing Story Woods…';
  try {
    const loaded = await loadStoryWoodsPreview();
    states = loaded.states;
    revisionId = loaded.performance.revisionId;
    progress = readProgress();
    begin.disabled = false;
    render();
  } catch (error) {
    console.error('Story Woods performance failed to load', error);
    label.textContent = 'Story unavailable';
    status.textContent = 'Story Woods could not be prepared safely. Please try again later.';
  }
}

initialise();
