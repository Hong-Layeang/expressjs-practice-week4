import { Articles } from "../models/data.js"

export const getArticles = (req, res) => {
    res.status(200).json({ success: true, data: Articles });
}

export const getArticlesById = (req, res) => {
    const { id } = req.params;
    const article = Articles.find(a => a.id === parseInt(id));

    if (!article) {
        return res.status(404).json({  success: false, message: "Article not found" });
    }

    res.status(200).json({ success: true, data: article });
}

export const createArticle = (req, res) => {
    let nextId = Articles.length + 1;

    const { title, content, journalistId, categoryId } = req.body;

    if (!title || !content || !journalistId, !categoryId) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const newArticle = {id: nextId++, title, content, journalistId, categoryId};

    Articles.push(newArticle);
    res.status(201).json({ success: true, data: newArticle });
}


export const editArticle = (req, res) => {
    const { id } = req.params;
    const { title, content, journalistId, categoryId } = req.body;

    const index = Articles.findIndex(article => article.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ success: false, message: "Article not found" });
    }

    Articles[index] = {
        ...Articles[index],
        title: title ?? Articles[index].title,
        content: content ?? Articles[index].content,
        journalistId: journalistId ?? Articles[index].journalistId,
        categoryId: categoryId ?? Articles[index].categoryId,
    };

    res.status(200).json({ success: true, data: Articles[index] });
};


export const deleteArticle = (req, res) => {
    const { id } = req.params;

    const index = Articles.findIndex(article => article.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ success: false, message: "Article not found" });
    }

    const deleted = Articles.splice(index, 1);
    res.status(200).json({ success: true, data: deleted[0] });
};

