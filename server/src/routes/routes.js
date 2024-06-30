import express from 'express';
import { categoryFilter, deleteExpense, editExpense, getAll, getAllYears, getCategories, insertExpense, monthFiler } from '../controllers/main.controller.js';

const router = express.Router();

router.get("/", (req, res) => {
    console.log(`You have hit the expense port!`);
    res.status(200).send("<h1>Hi!</h1>");
});

router.patch("/edit", editExpense);
router.get("/cat", getCategories);
router.post("/insert", insertExpense);
router.get("/all", getAll);
router.get("/years", getAllYears);
router.delete("/delete", deleteExpense);
router.get("/month", monthFiler);
router.get("/catFilter", categoryFilter);

router.get("*", (req, res) => {
    res.json({message: '404 Not Found', success: false,});
});

export default router;