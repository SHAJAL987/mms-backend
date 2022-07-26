import dotenv from 'dotenv';
dotenv.config();

export function getAuthJWTSecret() {
  return process.env.AUTH_JWT_SECRET || 'Er@InfoTech#3Tens0R';
}

export function getTempAuthJWTSecret() {
  return process.env.TEMP_AUTH_JWT_SECRET || 'Er@InfoTech#3Tens0RTemP';
}

export function getVerificationJWTSecret() {
  return process.env.VERIFICATION_JWT_SECRET || 'Er@InfoTech#3Tens0RVeriFication';
}

export function getConValJWTSecret() {
  return process.env.CONVAL_JWT_SECRET || 'Er@InfoTech#3Tens0RCONval';
}

export function getSelfPasscode() {
  return process.env.SELF_PASSCODE || 'ERA';
}

export function getMobileJWTSecret() {
  return process.env.MOBILE_JWT_SECRET || 'Er@InfoTech#3Tens0RMoBile';
}
