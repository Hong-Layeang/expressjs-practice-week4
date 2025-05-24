import { Journalists, Articles } from "../models/data.js";

let nextJournalistId = Journalists.length + 1;

export const getJournalists = (req, res) => {
    res.status(200).json({ success: true, data: Journalists });
};

export const getJournalistById = (req, res) => {
    const { id } = req.params;
    const journalist = Journalists.find(j => j.id === parseInt(id));
    if (!journalist) {
        return res.status(404).json({ success: false, message: "Journalist not found" });
    }
    res.status(200).json({ success: true, data: journalist });
};

export const createJournalist = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ success: false, message: "Name and email are required" });
    }
    const newJournalist = { id: nextJournalistId++, name, email };
    Journalists.push(newJournalist);
    res.status(201).json({ success: true, data: newJournalist });
};

export const editJournalist = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const index = Journalists.findIndex(j => j.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ success: false, message: "Journalist not found" });
    }
    Journalists[index] = {
        ...Journalists[index],
        name: name ?? Journalists[index].name,
        email: email ?? Journalists[index].email
    };
    res.status(200).json({ success: true, data: Journalists[index] });
};

export const deleteJournalist = (req, res) => {
    const { id } = req.params;
    const index = Journalists.findIndex(j => j.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ success: false, message: "Journalist not found" });
    }
    const removed = Journalists.splice(index, 1);
    res.status(200).json({ success: true, data: removed[0] });
};

export const getArticlesByJournalistId = (req, res) => {
    const { id } = req.params;
    const filteredArticles = Articles.filter(a => a.journalistId === parseInt(id));
    res.status(200).json({ success: true, data: filteredArticles });
};
