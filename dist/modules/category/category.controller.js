import { Category } from "./category.model.js";
const createCategory = async (req, res) => {
    const category = await Category.insertOne(req.body);
    res.status(201).json({
        message: "category created successfully",
        data: category
    });
};
const getCategories = async (req, res) => {
    const categories = await Category.find();
    res.status(200).json({
        message: "category retrieved successfully",
        data: categories
    });
};
const deleteCategory = async (req, res) => {
    const id = req.params?.id;
    const categories = await Category.findByIdAndDelete(id);
    res.status(200).json({
        message: "category delete successfully"
    });
};
const updateCategory = async (req, res) => {
    const id = req.params?.id;
    const categories = await Category.findByIdAndUpdate(id, {
        ...req.body
    });
    res.status(200).json({
        message: "category updated successfully"
    });
};
export const CategoryController = {
    createCategory,
    getCategories,
    deleteCategory,
    updateCategory
};
//# sourceMappingURL=category.controller.js.map