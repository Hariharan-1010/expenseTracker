import db from '../config/db.js';

export async function getAll(req, res, next) {
    try {
        const result = await db.query("SELECT * FROM expense_table ORDER BY id ASC");
        res.status(200).json({message: "All expenses", data: result.rows});
    } catch (error) {
        console.log(error);
        next(error);
    }
}
export async function insertExpense(req, res, next) {
    try {
        const expense = req.body;
        await db.query("INSERT INTO expense_table(expense_name, expense_cat, amount, expense_date) VALUES($1, $2, $3, $4)",[expense.title, expense.cat, expense.amt, expense.date]);
        res.status(200).json({message: "Inserted successfully"});
    } catch (error) {
        console.log(error);
        next(error);
    }
}
export async function editExpense(req, res, next) {
    try {
        const expense = req.query;
        await db.query("UPDATE expense_table SET expense_name = $1, expense_cat = $2, amount = $3    WHERE id = $4", [expense.name, expense.cat, expense.amt, expense.id]);
        res.status(200).json({message: "Updated Successfully"});
    } catch (error) {
        console.log(error);
        next(error);
    }
}
export async function deleteExpense(req, res, next) {
    try {
        const id = req.query.id;
        await db.query("DELETE FROM expense_table WHERE id = $1", [id]);
        res.status(200).json({message: "Deleted sucessfully"});
    } catch (error) {
        console.log(error);
        next(error);
    }
}
export async function getAllYears(req, res, next) {
    try {
        const result = await db.query("SELECT DISTINCT EXTRACT (YEAR FROM expense_date) FROM expense_table");
        res.status(200).json({message: "years retrieved successfully", data: result.rows});
    } catch (error) {
        console.log(error);
        next(error);
    }
}
export async function monthFiler(req, res, next) {
    try {
        const month = req.query.month;
        const year = req.query.year;
        const result = await db.query("SELECT * FROM expense_table WHERE EXTRACT( MONTH FROM expense_date) = $1 AND EXTRACT (YEAR FROM expense_date) = $2", [month, year]);
        res.status(200).json({message: "expenses in month", data: result.rows});
    } catch (error) {
        console.log(error);
        next(error);
    }
}
export async function categoryFilter(req, res, next) {
    try {
        const category = req.query.cat;
        const result = await db.query("SELECT * FROM expense_table WHERE expense_cat = $1", [category]);
        res.status(200).json({message: "expenses in category", data: result.rows});
    } catch (error) {
        console.log(error);
        next(error);
    }
}
export async function getCategories(req, res, next) {
    try {
        const result = await db.query("SELECT DISTINCT expense_cat FROM expense_table");
        res.status(200).json({message: "categories retrieved", data: result.rows});
    } catch (error) {
        console.log(error);
        next(error);
    }
}