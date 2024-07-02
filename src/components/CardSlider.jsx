import React, { useState } from "react";

const CardSlider = () => {
    const [forms, setForms] = useState([{ id: 1, data: {} }]);
    
    const options = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" }
    ];

    const handleAddForm = () => {
        setForms([...forms, { id: forms.length + 1, data: {} }]);
    };

    const handleRemoveForm = (id) => {
        setForms(forms.filter((form) => form.id !== id));
    };

    const handleChange = (id, event) => {
        const updatedForms = forms.map((form) => {
            if (form.id === id) {
                return { ...form, data: { ...form.data, [event.target.name]: event.target.value } };
            }
            return form;
        });
        setForms(updatedForms);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data Submitted: ", forms);
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="flex flex-row gap-4 flex-wrap">
                {forms.map((form, index) => (
                    <div key={form.id} className="relative mb-4 p-4 border rounded shadow">
                        <h2 className="text-lg font-bold mb-2">Form {index + 1}</h2>
                        {index > 0 && (
                            <button
                                type="button"
                                onClick={() => handleRemoveForm(form.id)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                            >
                                &times;
                            </button>
                        )}
                        <div className="mb-2">
                            <label className="block mb-1">Field 1:</label>
                            <select
                                name="field1"
                                value={form.data.field1 || ""}
                                onChange={(e) => handleChange(form.id, e)}
                                className="border p-2 w-full"
                            >
                                <option value="">Select an option</option>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="block mb-1">Field 2:</label>
                            <select
                                name="field2"
                                value={form.data.field2 || ""}
                                onChange={(e) => handleChange(form.id, e)}
                                className="border p-2 w-full"
                            >
                                <option value="">Select an option</option>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddForm}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Form
                </button>
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded ml-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CardSlider;
