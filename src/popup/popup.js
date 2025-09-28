'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('autoPlayToggle');
  if (!toggle) {
    return;
  }

  const storage = chrome?.storage?.sync;
  const key = 'autoPlayEnabled';

  const applyStateToUI = (value) => {
    toggle.checked = Boolean(value);
  };

  if (storage) {
    storage.get({ [key]: false }, (result) => {
      applyStateToUI(result[key]);
    });
  } else {
    applyStateToUI(false);
  }

  toggle.addEventListener('change', () => {
    const enabled = toggle.checked;
    if (!storage) {
      return;
    }

    toggle.disabled = true;
    storage.set({ [key]: enabled }, () => {
      toggle.disabled = false;
    });
  });
});
