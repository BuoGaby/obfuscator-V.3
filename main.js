
function obfuscate() {
  const input = document.getElementById("input").value;
  if (!input.trim()) return;

  let code = input;
  for (let i = 0; i < 20; i++) {
    const b64 = btoa(unescape(encodeURIComponent(code)));
    code = `import base64;exec(base64.b64decode('${b64}').decode())`;
  }

  document.getElementById("output").value = code;
  document.getElementById("result-box").style.display = "block";
}

function copyOutput() {
  const r = document.getElementById("output");
  r.select();
  document.execCommand("copy");
  alert("Copied!");
}

function obfuscate() {
  const input = document.getElementById("input").value;
  if (!input.trim()) return;

  let code = input;
  for (let i = 0; i < 20; i++) {
    const b64 = btoa(unescape(encodeURIComponent(code)));
    code = `import base64;exec(base64.b64decode('${b64}').decode())`;
  }

  document.getElementById("output").value = code;
  document.getElementById("result-box").style.display = "block";
}

function copyOutput() {
  const r = document.getElementById("output");
  r.select();
  document.execCommand("copy");
  alert("Copied!");
}

const PREMIUM_CODE = "P@ssPremium";

function loginPremium() {
  const input = document.getElementById("premium-code").value.trim();
  if (input === PREMIUM_CODE) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("premium-section").style.display = "block";
  } else {
    alert("❌ รหัสไม่ถูกต้อง!");
  }
}

function obfuscatePremium() {
  const input = document.getElementById("premium-input").value;
  if (!input.trim()) return;

  let code = input;
  for (let i = 0; i < 30; i++) {
    const b64 = btoa(unescape(encodeURIComponent(code)));
    code = `import base64;exec(base64.b64decode('${b64}').decode())`;
  }

  document.getElementById("premium-output").value = code;
  document.getElementById("premium-result-box").style.display = "block";
}

function copyPremiumResult() {
  const r = document.getElementById("premium-output");
  r.select();
  document.execCommand("copy");
  alert("Copied!");
}
