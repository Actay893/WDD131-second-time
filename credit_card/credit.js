// ── Helpers ──────────────────────────────────────────────────
function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

function clearError(id) {
  const el = document.getElementById(id);
  if (el) el.textContent = '';
}

function markField(input, valid) {
  input.classList.toggle('valid', valid);
  input.classList.toggle('invalid', !valid);
}

// ── Card Number ───────────────────────────────────────────────
// Accept the exact number: 1234123412341234
function validateCardNumber(raw) {
  const digits = raw.replace(/\s+/g, '');
  return digits === '1234123412341234';
}

// Auto-format card number with spaces every 4 digits
document.getElementById('cardNumber').addEventListener('input', function () {
  let val = this.value.replace(/\D/g, '').slice(0, 16);
  this.value = val.match(/.{1,4}/g)?.join(' ') || val;
});

// ── Expiration ────────────────────────────────────────────────
function validateExpiration(mm, yy) {
  const month = parseInt(mm, 10);
  const year  = parseInt(yy, 10);

  if (!mm || !yy || isNaN(month) || isNaN(year)) return false;
  if (month < 1 || month > 12) return false;

  const now        = new Date();
  const curYear2   = now.getFullYear() % 100; // e.g. 25
  const curMonth   = now.getMonth() + 1;       // 1-12

  // Card is expired if year < current year, OR same year but month < current month
  if (year < curYear2) return false;
  if (year === curYear2 && month < curMonth) return false;

  return true;
}

// ── CVV ───────────────────────────────────────────────────────
function validateCVV(val) {
  return /^\d{3}$/.test(val);
}

// ── Name ──────────────────────────────────────────────────────
function validateName(val) {
  return val.trim().length >= 2;
}

// ── Form Submit ───────────────────────────────────────────────
document.getElementById('cardForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  const cardNumberInput = document.getElementById('cardNumber');
  const cardNameInput   = document.getElementById('cardName');
  const monthInput      = document.getElementById('month');
  const yearInput       = document.getElementById('year');
  const cvvInput        = document.getElementById('cvv');

  // Clear previous errors
  ['cardNumberError', 'cardNameError', 'expError', 'cvvError'].forEach(clearError);

  // Validate card number
  if (!validateCardNumber(cardNumberInput.value)) {
    showError('cardNumberError', 'Invalid card number');
    markField(cardNumberInput, false);
    isValid = false;
  } else {
    markField(cardNumberInput, true);
  }

  // Validate name
  if (!validateName(cardNameInput.value)) {
    showError('cardNameError', 'Please enter cardholder name');
    markField(cardNameInput, false);
    isValid = false;
  } else {
    markField(cardNameInput, true);
  }

  // Validate expiration
  if (!validateExpiration(monthInput.value, yearInput.value)) {
    showError('expError', 'Invalid or expired date');
    markField(monthInput, false);
    markField(yearInput, false);
    isValid = false;
  } else {
    markField(monthInput, true);
    markField(yearInput, true);
  }

  // Validate CVV
  if (!validateCVV(cvvInput.value)) {
    showError('cvvError', '3 digits required');
    markField(cvvInput, false);
    isValid = false;
  } else {
    markField(cvvInput, true);
  }

  // ── Success ──
  if (isValid) {
    document.getElementById('cardForm').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
  }
});