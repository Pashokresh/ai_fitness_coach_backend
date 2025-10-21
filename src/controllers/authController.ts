import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        //TODO: Add registration logic here
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        //TODO: Add login logic here
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
