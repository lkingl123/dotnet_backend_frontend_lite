import React, { useEffect, useState } from 'react';
import { getExamples, createExample } from './api/exampleApi';

function App() {
    const [examples, setExamples] = useState([]);
    const [newExampleName, setNewExampleName] = useState('');

    // Fetch data from the API on component mount
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getExamples();
                setExamples(data);
            } catch (error) {
                console.error('Error fetching examples:', error);
            }
        }
        fetchData();
    }, []);

    // Handle form submission to add a new example
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (newExampleName) {
            const newExample = { name: newExampleName, description: 'Sample description' };
            try {
                const createdExample = await createExample(newExample);
                setExamples([...examples, createdExample]);
                setNewExampleName('');
            } catch (error) {
                console.error('Error creating example:', error);
            }
        }
    };

    return (
        <div>
            <h1>Examples</h1>
            <ul>
                {examples.map((example) => (
                    <li key={example.id}>{example.name}</li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newExampleName}
                    onChange={(e) => setNewExampleName(e.target.value)}
                    placeholder="New example name"
                />
                <button type="submit">Add Example</button>
            </form>
        </div>
    );
}

export default App;
