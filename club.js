/* ============================================================
   ALEJANDRA VERGEL · club.js
   Sistema de suscriptores + validación de códigos de descuento
   ============================================================ */

const CLUB_API = "https://script.google.com/macros/s/AKfycbxx7D_m8Ywi1uRW_4Q181b2YL9AGhxuVFPL4cBAqJfRaGLEJJ2PYGu2pEgJSF89lcom/exec";

let clubState = {
  code: localStorage.getItem("av_club_code") || null,
  email: localStorage.getItem("av_club_email") || null,
  discount: localStorage.getItem("av_club_discount") ? parseInt(localStorage.getItem("av_club_discount")) : 0
};

/* ============================================================
   REGISTRAR EN CLUB
   ============================================================ */
async function registerClub(name, email) {
  if (!name || !email) {
    showToast("Por favor completa nombre y email");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast("Email inválido");
    return false;
  }

  try {
    const response = await fetch(`${CLUB_API}?action=registerSubscriber&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
    const result = await response.json();

    if (result.success) {
      clubState.code = result.code;
      clubState.email = email;
      clubState.discount = 15;

      // Guardar en localStorage
      localStorage.setItem("av_club_code", result.code);
      localStorage.setItem("av_club_email", email);
      localStorage.setItem("av_club_discount", "15");

      showToast(`¡Bienvenido! Tu código: ${result.code}`);
      return true;
    } else {
      showToast(result.error || "Error registrando");
      // Si ya existe, mostrar el código
      if (result.code) {
        clubState.code = result.code;
        clubState.email = email;
        clubState.discount = 15;
        localStorage.setItem("av_club_code", result.code);
        localStorage.setItem("av_club_email", email);
        localStorage.setItem("av_club_discount", "15");
      }
      return false;
    }
  } catch (error) {
    console.error("[Club Register Error]", error);
    showToast("Error registrando. Intenta de nuevo.");
    return false;
  }
}

/* ============================================================
   VALIDAR CÓDIGO DE DESCUENTO
   ============================================================ */
async function validateCoupon(code) {
  if (!code) {
    return { valid: false, discount: 0, error: "Código vacío" };
  }

  try {
    const response = await fetch(`${CLUB_API}?action=checkCode&code=${encodeURIComponent(code)}`);
    const result = await response.json();

    if (result.valid && !result.used) {
      // Código válido y no usado
      clubState.code = code;
      clubState.discount = result.discount || 15;
      localStorage.setItem("av_club_code", code);
      localStorage.setItem("av_club_discount", result.discount || "15");
      return { valid: true, discount: result.discount || 15, email: result.email };
    } else if (result.valid && result.used) {
      return { valid: false, discount: 0, error: "Código ya fue usado" };
    } else {
      return { valid: false, discount: 0, error: result.error || "Código no válido" };
    }
  } catch (error) {
    console.error("[Validate Coupon Error]", error);
    return { valid: false, discount: 0, error: "Error validando código" };
  }
}

/* ============================================================
   OBTENER DESCUENTO ACTUAL
   ============================================================ */
function getClubDiscount() {
  return clubState.discount;
}

function getClubCode() {
  return clubState.code;
}

/* ============================================================
   INICIALIZAR CLUB
   ============================================================ */
function initClub() {
  // Si ya tiene código guardado, verificar que siga siendo válido
  if (clubState.code) {
    console.log("Club activo: " + clubState.code + " (" + clubState.discount + "% descuento)");
  }
}
