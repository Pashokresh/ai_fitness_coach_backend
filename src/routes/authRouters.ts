import { register, login } from "../controllers/authController";

export const registerAuthRoute = async (req, res) => {
    await register(req, res);
}

export const loginAuthRoute = async (req, res) => {
    await login(req, res);
}