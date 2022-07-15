export const USERNAME_REG_EXP = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

export const EMAIL_REG_EXP =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const PASSWORD_REG_EXP =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const DOMAIN_NAME = "http://localhost:3000";
