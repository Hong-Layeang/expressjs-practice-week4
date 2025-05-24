import { Categories, Articles } from "../models/data.js";

let nextCategoryId = Categories.length + 1;

export const getCategories = (req, res) => {
    res.status(200).json({ success: true, data: Categories });
};

export const getCategoryById = (req, res) => {
    const { id } = req.params;
    const category = Categories.find(c => c.id === parseInt(id));
    if (!category) {
        return res.status(404).json({ success: false, message: "Category not found" });
    }
    res.status(200).json({ success: true, data: category });
};

export const createCategory = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Name is required" });
    }
    const newCategory = { id: nextCategoryId++, name };
    Categories.push(newCategory);
    res.status(201).json({ success: true, data: newCategory });
};

export const editCategory = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const index = Categories.findIndex(c => c.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ success: false, message: "Category not found" });
    }
    Categories[index].name = name ?? Categories[index].name;
    res.status(200).json({ success: true, data: Categories[index] });
};

export const deleteCategory = (req, res) => {
    const { id } = req.params;
    const index = Categories.findIndex(c => c.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ success: false, message: "Category not found" });
    }
    const removed = Categories.splice(index, 1);
    res.status(200).json({ success: true, data: removed[0] });
};

export const getArticlesByCategoryId = (req, res) => {
    const { id } = req.params;
    const filteredArticles = Articles.filter(a => a.categoryId === parseInt(id));
    res.status(200).json({ success: true, data: filteredArticles });
};
